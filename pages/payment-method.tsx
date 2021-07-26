import React from "react";
import {
  nauticAlertPlanOptions,
  nauticAlertBroadbandVideo,
} from "../lib/PlanOptions";
import PaymentMethodForm from "../lib/PaymentMethodForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

export default function PaymentMethodFormPage({}) {
  return (
    <Elements stripe={stripePromise}>
      <PaymentMethodForm />
    </Elements>
  );
}
