// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import RegistrationState from "../../lib/RegistrationState";
import { PlanOption } from "../../lib/PlanOptions";

const key: string =
  process.env.STRIPE_SECRET_KEY || "sk_test_dXH7pAFCTeRjL39fWSwwYcQd";
const stripe = new Stripe(key, { apiVersion: "2020-08-27" });

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubscribeResponse | { err: string }>
) {
  const planDetails: PlanOption = req.body.planDetails;
  const formInputs: RegistrationState = req.body.formInputs;
  if (!planDetails) {
    res.status(400).json({ err: "planDetails is not valid" });
    return;
  }
  if (!formInputs) {
    res.status(400).json({ err: "formInputs is not valid" });
    return;
  }

  const expectedPlanName =
    planDetails.name +
    (formInputs.broadbandVideo
      ? " with broadband video"
      : " without broadband video");

  // Stripe customer

  const customer = await stripe.customers.create({
    name: [
      formInputs.ownerFname,
      formInputs.ownerMi,
      formInputs.ownerLname,
    ].join(" "),
    phone: formInputs.cellNumber,
    metadata: {
      dealerName: formInputs.dealerName || "",
      dealerCompany: formInputs.dealerCompany || "",
      iccId: formInputs.iccId,
      imei: formInputs.imei,
      vesselName: formInputs.vesselName,
      vesselType: formInputs.vesselType,
      desiredInstallDate: formInputs.installDate,
    },
  });
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
  let price: Stripe.Price;
  if (product) {
    price = (
      await stripe.prices?.list({
        product: product.id,
        currency: "usd",
        active: true,
      })
    ).data[0];
  } else {
    price = await stripe.prices?.create({
      currency: "usd",
      unit_amount_decimal: planDetails.price?.toFixed(2),
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

  // Stripe subscription
  const subscription = await stripe.subscriptions?.create({
    customer: customer.id,
    items: [{ price: price.id }],
    payment_behavior: "default_incomplete",
    expand: ["latest_invoice.payment_intent"],
  });

  // We have to do these casts because of the 'expand' just above.
  const invoice = subscription.latest_invoice as Stripe.Invoice;
  const payment_intent = invoice.payment_intent as Stripe.PaymentIntent;

  // Return non-secret values to the client.
  res.status(200).json({
    subscriptionId: subscription.id,
    clientSecret: payment_intent?.client_secret,
  } as SubscribeResponse);
}

export interface SubscribeResponse {
  subscriptionId: string;
  clientSecret: string;
}

export default handler;
