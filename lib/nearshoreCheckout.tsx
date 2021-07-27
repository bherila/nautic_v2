import React, { Children, ReactNode, useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import getStripe from "../lib/getStripe";
import RegistrationState from "./RegistrationState";
import {
  findPlanOption,
  getAllPlanOptions,
  nauticAlertPlanOptions,
  PlanOption,
} from "./PlanOptions";
import { fetchPostJSON } from "./jsonHelpers";
import { SubscribeResponse } from "../pages/api/subscribe";
import { validate, validateSync, ValidationError } from "class-validator";

const CARD_OPTIONS = {
  iconStyle: "solid" as const,
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: "500",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#000",
      },
      "::placeholder": {
        color: "#000",
      },
    },
    invalid: {
      iconColor: "#ef2961",
      color: "#ef2961",
    },
  },
};

interface Props {
  checkoutFormState: RegistrationState;
}

function Wrap(props: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "#eee",
        margin: "20px auto",
        padding: "16px",
        width: "400px",
      }}
    >
      {props.children}
    </div>
  );
}

function CheckoutInternal(props: Props) {
  const [payment, setPayment] = useState({ status: "initial" });
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case "processing":
      case "requires_payment_method":
      case "requires_confirmation":
        return <h2>Processing...</h2>;

      case "requires_action":
        return <h2>Authenticating...</h2>;

      case "succeeded":
        return <h2>Payment Succeeded 🥳</h2>;

      case "error":
        return (
          <>
            <h2>Error 😭</h2>
            <p className="error-message">{errorMessage}</p>
          </>
        );

      default:
        return null;
    }
  };

  const planId =
    props.checkoutFormState.selectedPlan[
      props.checkoutFormState.selectedPlan.length - 1
    ];
  const plan = findPlanOption(planId, getAllPlanOptions());
  const finalPrice =
    (plan?.price || 0) + (props.checkoutFormState.broadbandVideo ? 14.99 : 0);

  const apiDetail = {
    planDetails: {
      checkoutId: plan?.checkoutId,
      name: plan?.name,
    },
    formInputs: props.checkoutFormState,
  };
  console.log(apiDetail);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // Abort if form isn't valid
    if (!e.currentTarget.reportValidity()) return;
    setPayment({ status: "processing" });

    // Create a PaymentIntent with the specified amount.
    const response = await fetchPostJSON("/api/subscribe", apiDetail);
    setPayment(response);

    if (response.statusCode === 500) {
      setPayment({ status: "error" });
      setErrorMessage(response.message);
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements!.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentIntent } = await stripe!.confirmCardPayment(
      response.clientSecret,
      {
        payment_method: {
          card: cardElement!,
          // billing_details: { name: input.cardholderName },
        },
      }
    );
    //
    // if (error) {
    //     setPayment({ status: 'error' });
    //     setErrorMessage(error.message ?? 'An unknown error occured');
    // } else if (paymentIntent) {
    //     setPayment(paymentIntent);
    // }

    alert("Success! Someone will contact you soon.");
  };

  return finalPrice <= 0 ? null : (
    <Wrap>
      <form onSubmit={handleSubmit}>
        <h3>Secure checkout with Stripe</h3>
        <p>
          Your card will be charged ${finalPrice.toFixed(2)}/month for{" "}
          {plan?.name}
          {props.checkoutFormState.broadbandVideo
            ? " with broadband video add-on"
            : ""}
          .
        </p>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid gray",
          }}
        >
          <CardElement
            options={CARD_OPTIONS}
            onChange={(e) => {
              if (e.error) {
                setPayment({ status: "error" });
                setErrorMessage(e.error.message ?? "An unknown error occured");
              }
            }}
          />
        </div>
        <button
          type="submit"
          className="buy-button button-icon w-button"
          style={{ marginTop: "20px" }}
        >
          Checkout
        </button>

        <p style={{ marginTop: "20px" }}>
          Nearshorenetworks will not share your information with others. All
          credit card information is stored by our Secure Transaction process
          provider, Stripe.
        </p>
      </form>
    </Wrap>
  );
}

export default function NearshoreCheckout(props: Props) {
  return (
    <Elements stripe={getStripe()}>
      <CheckoutInternal {...props} />
    </Elements>
  );
}
