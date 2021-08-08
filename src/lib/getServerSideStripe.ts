import Stripe from "stripe";
export default function getServerSideStripe() {
  return new Stripe(
    process.env.STRIPE_SECRET_KEY || "sk_test_dXH7pAFCTeRjL39fWSwwYcQd",
    { apiVersion: "2020-08-27" }
  );
}
