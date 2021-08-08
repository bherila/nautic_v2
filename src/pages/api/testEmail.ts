import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import getStripe from "../../lib/getStripe";
import confirmationEmail from "../../lib/confirmationEmail";

import getServerSideStripe from "../../lib/getServerSideStripe";

// noinspection JSUnusedGlobalSymbols
export default async function testEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stripe = getServerSideStripe();
  const subResponse = await stripe.subscriptions.retrieve("sub_JzhRjRffUnoLqy");
  const emailResult = await confirmationEmail(
    subResponse,
    "test_payment_method_id"
  );

  res.json({ emailResult });
}
