// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import RegistrationState from "../../lib/RegistrationState";
import {
  DEFAULT_ACTIVATION_FEE,
  findPlanOption,
  getAllPlanOptions,
  nauticAlertPlanOptions,
  PlanOption,
} from "../../lib/PlanOptions";
import { withSentry } from "@sentry/nextjs";
import getServerSideStripe from "../../lib/getServerSideStripe";
const stripe = getServerSideStripe();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubscribeResponse | { err: string }>
) {
  const planDetails: PlanOption | null = findPlanOption(
    req.body.planDetails.checkoutId,
    getAllPlanOptions()
  );
  if (!planDetails) {
    res.status(400).json({ err: "planDetails is not valid" });
    return;
  }

  const formInputs: RegistrationState = req.body.formInputs;
  if (!formInputs) {
    res.status(400).json({ err: "formInputs is not valid" });
    return;
  }

  // Format plan name for Stripe "Product"
  const expectedPlanName =
    planDetails.name +
    (formInputs.broadbandVideo
      ? " with broadband video"
      : " without broadband video");

  if (typeof planDetails?.price !== "number") {
    res.status(400).json({ err: "planDetails.price is not valid" });
    return;
  }
  const expectedPrice = Math.round(planDetails.price * 100);

  // Stripe customer
  let customer = (
    await stripe.customers?.list({
      email: formInputs.email,
    })
  ).data.find((customer) => customer.phone === formInputs.cellNumber);
  if (!customer) {
    customer = await stripe.customers.create({
      name: [
        formInputs.ownerFname,
        formInputs.ownerMi,
        formInputs.ownerLname,
      ].join(" "),
      phone: formInputs.cellNumber,
      email: formInputs.email,
    });
  }
  if (!customer) {
    res.status(500).json({ err: "failed to create customer" });
    return;
  }

  // Stripe product & price
  const allProducts = await stripe.products.list({
    limit: 25,
  });
  let product: Stripe.Product | undefined = allProducts.data.find(
    (x) => x.name === expectedPlanName
  );

  let price: Stripe.Price | undefined;
  if (product) {
    price = (
      await stripe.prices?.list({
        product: product.id,
        currency: "usd",
        active: true,
        type: "recurring",
      })
    ).data.find((p) => p.currency === "usd" && p.unit_amount === expectedPrice);
  }
  if (typeof price === "undefined") {
    price = await stripe.prices?.create({
      currency: "usd",
      unit_amount: expectedPrice,
      recurring: {
        interval: "month",
        interval_count: 1,
        usage_type: "licensed",
      },
      product_data: {
        name: expectedPlanName,
        metadata: {
          checkout_id: planDetails.checkoutId || "INVALID",
        },
      },
    });
    if (typeof price.product === "string") {
      product = await stripe.products?.retrieve(price.product);
    } else {
      product = price.product as Stripe.Product;
    }
  }

  if (!product) {
    res.status(500).json({ err: "failed to get/create product" });
    return;
  }
  if (!price) {
    res.status(500).json({ err: "failed to get/create price" });
    return;
  }

  // Use activation fee if specified, else override.
  const activationFeeCents =
    typeof planDetails.activationFee === "number"
      ? Math.round(planDetails.activationFee * 100)
      : DEFAULT_ACTIVATION_FEE;

  // Activation fee -- create as invoice item. When the subscription is created
  // the pending invoice items for the customer will be added to the first payment
  const invoiceItem = await stripe.invoiceItems.create({
    currency: "usd",
    unit_amount: activationFeeCents,
    description: "Activation fee",
    customer: customer.id,
  });
  if (!invoiceItem) {
    res.status(500).json({ err: "failed to charge initiation fee" });
    return;
  }

  // Stripe subscription
  const subscription = await stripe.subscriptions?.create({
    customer: customer.id,
    items: [{ price: price.id }],
    payment_behavior: "default_incomplete",
    expand: ["latest_invoice.payment_intent"],
    metadata: {
      emailCC: formInputs.emailCC || '',
      plan_name: planDetails.name,
      plan_activation_fee: planDetails.activationFee || (DEFAULT_ACTIVATION_FEE / 100).toFixed(2),
      plan_price: planDetails.price,
      broadbandVideo: formInputs.broadbandVideo ? "true" : "false",
      installDate: formInputs.installDate || "",
      email: formInputs.email || "",
      imei: formInputs.imei || "",
      ownerFname: formInputs.ownerFname || "",
      ownerMi: formInputs.ownerMi || "",
      ownerLname: formInputs.ownerLname || "",
      vesselName: formInputs.vesselName || "",
      cellNumber: formInputs.cellNumber || "",
      vesselType: formInputs.vesselType || "",
      dealerName: formInputs.dealerName || "",
      dealerCompany: formInputs.dealerCompany || "",
      iccId: formInputs.iccId || "",
    },
  });

  // We have to do these casts because of the 'expand' just above.
  const invoice = subscription.latest_invoice as Stripe.Invoice;
  const payment_intent = invoice.payment_intent as Stripe.PaymentIntent;

  // Return non-secret values to the client.
  console.info(invoice);
  res.status(200).json({
    subscriptionId: subscription.id,
    invoiceId: invoice.id,
    clientSecret: payment_intent?.client_secret || "",
  } as SubscribeResponse);
}

export interface SubscribeResponse {
  subscriptionId: string;
  clientSecret: string;
}

// noinspection JSUnusedGlobalSymbols
export default withSentry(handler);
