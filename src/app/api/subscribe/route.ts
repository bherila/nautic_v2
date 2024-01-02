import Stripe from "stripe";
import RegistrationState from "@/lib/RegistrationState";
import {
  DEFAULT_ACTIVATION_FEE,
  findPlanOption,
  getAllPlanOptions,
  PlanOption,
} from "@/lib/PlanOptions";
import getServerSideStripe from "@/lib/getServerSideStripe";
import { NextRequest, NextResponse } from "next/server";
const stripe = getServerSideStripe();

export async function POST(request: NextRequest) {
  const body: any = await request.json();
  console.info(body);
  const planDetails: PlanOption | null = findPlanOption(
    body.planDetails.checkoutId,
    getAllPlanOptions(),
  );
  if (!planDetails) {
    console.error("planDetails is not valid");
    return NextResponse.json(
      { err: "planDetails is not valid" },
      { status: 400 },
    );
  }

  const formInputs: RegistrationState = body.formInputs;
  if (!formInputs) {
    console.error("formInputs is not valid");
    return NextResponse.json(
      { err: "formInputs is not valid" },
      { status: 400 },
    );
  }

  // Format plan name for Stripe "Product"
  const expectedPlanName =
    planDetails.name +
    (formInputs.broadbandVideo
      ? " with broadband video"
      : " without broadband video");

  if (typeof planDetails?.price !== "number") {
    return NextResponse.json(
      { err: "planDetails.price is not valid" },
      { status: 400 },
    );
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
    return NextResponse.json(
      { err: "failed to create customer" },
      { status: 500 },
    );
  }

  // Stripe product & price
  const allProducts = await stripe.products.list({
    limit: 25,
  });
  let product: Stripe.Product | undefined = allProducts.data.find(
    (x) => x.name === expectedPlanName,
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
    return NextResponse.json(
      { err: "failed to get/create product" },
      { status: 500 },
    );
    return;
  }
  if (!price) {
    return NextResponse.json(
      { err: "failed to get/create price" },
      { status: 500 },
    );
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
    return NextResponse.json(
      { err: "failed to charge initiation fee" },
      { status: 500 },
    );
  }

  // Stripe subscription
  const subscription = await stripe.subscriptions?.create({
    customer: customer.id,
    items: [{ price: price.id }],
    payment_behavior: "default_incomplete",
    expand: ["latest_invoice.payment_intent"],
    metadata: {
      emailCC: formInputs.emailCC || "",
      plan_name: planDetails.name,
      plan_activation_fee:
        planDetails.activationFee || (DEFAULT_ACTIVATION_FEE / 100).toFixed(2),
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
  return NextResponse.json({
    subscriptionId: subscription.id,
    invoiceId: invoice.id,
    clientSecret: payment_intent?.client_secret || "",
  } as SubscribeResponse);
}

export interface SubscribeResponse {
  subscriptionId: string;
  clientSecret: string;
}
