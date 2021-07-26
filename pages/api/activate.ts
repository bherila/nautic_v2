// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import RegistrationState from "../../lib/RegistrationState";
import { PlanOption } from "../../lib/PlanOptions";

const key: string =
  process.env.STRIPE_SECRET_KEY || "sk_test_dXH7pAFCTeRjL39fWSwwYcQd";
const stripe = new Stripe(key, { apiVersion: "2020-08-27" });

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers["stripe-signature"] || "",
      key
    );
  } catch (err) {
    console.error(err);
    console.error(`⚠️  Webhook signature verification failed.`);
    console.error(
      `⚠️  Check the env file and enter the correct webhook secret.`
    );
    res.status(400);
    return;
  }

  // Extract the object from the event.
  const dataObject = event.data.object as Record<string, string>;
  if (dataObject["billing_reason"] == "subscription_create") {
    const subscription_id = dataObject["subscription"];
    const payment_intent_id = dataObject["payment_intent"];

    // Retrieve the payment intent used to pay the subscription
    const payment_intent = await stripe.paymentIntents.retrieve(
      payment_intent_id
    );

    if (typeof payment_intent.payment_method !== "string") {
      throw new Error("Expected payment_intent.payment_method to be a string");
    }
    const subscription = await stripe.subscriptions.update(subscription_id, {
      default_payment_method: payment_intent.payment_method,
    });
  }

  // Handle the event
  // Review important events for Billing webhooks
  // https://stripe.com/docs/billing/webhooks
  // Remove comment to see the various objects sent for this sample
  switch (event.type) {
    case "invoice.paid":
      // Used to provision services after the trial has ended.
      // The status of the invoice will show up as paid. Store the status in your
      // database to reference when a user accesses your service to avoid hitting rate limits.
      break;
    case "invoice.payment_failed":
      // If the payment fails or the customer does not have a valid payment method,
      //  an invoice.payment_failed event is sent, the subscription becomes past_due.
      // Use this webhook to notify your user that their payment has
      // failed and to retrieve new card details.
      break;
    case "customer.subscription.deleted":
      if (event.request != null) {
        // handle a subscription cancelled by your request
        // from above.
      } else {
        // handle subscription cancelled automatically based
        // upon your subscription settings.
      }
      break;
    default:
    // Unexpected event type
  }
  res.status(200);
}
