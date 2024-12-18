import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import confirmationEmail from '@/lib/confirmationEmail'
import getServerSideStripe from '@/lib/getServerSideStripe'
const stripe = getServerSideStripe()

async function handleAsSubscription(
  dataObject: Stripe.Subscription,
): Promise<string> {
  const subscription_id = dataObject.id
  const customer = await stripe.customers?.retrieve(
    dataObject.customer as string,
  )
  if (!customer) {
    return 'no customer'
  }

  // Retrieve the payment intent used to pay the subscription
  // const payment_intent = await stripe.paymentIntents.retrieve(
  //   payment_intent_id
  // );
  // console.info(`Retrieved payment intent ${payment_intent_id}`);
  //
  // if (typeof payment_intent.payment_method !== "string") {
  //   throw new Error("Expected payment_intent.payment_method to be a string");
  // }

  const cards = (
    await stripe.paymentMethods?.list({
      customer: dataObject.customer as string,
      type: 'card',
    })
  ).data

  const subscription = await stripe.subscriptions.update(subscription_id, {
    default_payment_method: cards[0].id,
  })
  console.info(`Updated subscription ${subscription_id}`)

  // const invoice = await stripe.invoices?.pay(
  //   subscription.latest_invoice as string,
  //   { payment_method: cards[0].id }
  // );
  // console.info(
  //   "Paid invoice " +
  //     subscription.latest_invoice +
  //     ", new status = " +
  //     invoice.status
  // );
  return await confirmationEmail(subscription, cards[0].id)

  // // Handle the event
  // // Review important events for Billing webhooks
  // // https://stripe.com/docs/billing/webhooks
  // // Remove comment to see the various objects sent for this sample
  // switch (event.type) {
  //   case "invoice.paid":
  //     // Used to provision services after the trial has ended.
  //     // The status of the invoice will show up as paid. Store the status in your
  //     // database to reference when a user accesses your service to avoid hitting rate limits.
  //     break;
  //   case "invoice.payment_failed":
  //     // If the payment fails or the customer does not have a valid payment method,
  //     //  an invoice.payment_failed event is sent, the subscription becomes past_due.
  //     // Use this webhook to notify your user that their payment has
  //     // failed and to retrieve new card details.
  //     break;
  //   case "customer.subscription.deleted":
  //     if (event.request != null) {
  //       // handle a subscription cancelled by your request
  //       // from above.
  //     } else {
  //       // handle subscription cancelled automatically based
  //       // upon your subscription settings.
  //     }
  //     break;
  //   default:
  //   // Unexpected event type
  // }
}

export async function POST(req: NextRequest) {
  let event: Stripe.Event = await req.json()

  // Extract the object from the event.
  if (event.type === 'customer.subscription.created') {
    try {
      const result = await handleAsSubscription(
        event.data.object as Stripe.Subscription,
      )
      return NextResponse.json({
        result: 'Handled as subscription created, result = ' + result,
      })
    } catch (err) {
      return NextResponse.json(
        { err: (err as Error).toString() },
        { status: 500 },
      )
    }
  }
  return NextResponse.json({ result: 'No-op' })
}
