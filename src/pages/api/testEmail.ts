﻿import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import getStripe from "../../lib/getStripe";
import confirmationEmail from "../../lib/confirmationEmail";

export default async function testEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY || "sk_test_dXH7pAFCTeRjL39fWSwwYcQd",
    { apiVersion: "2020-08-27" }
  );

  const subResponse = await stripe.subscriptions.retrieve("sub_JzhRjRffUnoLqy");
  const emailResult = await confirmationEmail(
    subResponse,
    "test_payment_method_id"
  );

  res.json({ emailResult });
}
