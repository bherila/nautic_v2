import { bodySize } from "../lib/RegistrationForm";
import { CoverageMapTerm } from "./tMobileCoverageMap";
import React from "react";

export default function TermsContentNautic() {
  return (
    <ul style={{ columnCount: 1, fontSize: bodySize }}>
      {[
        "Cellular Service requires 24 hours to activate, Monday-Friday.  Activation requests received on Friday activate on Monday.",
        "Activation Fee is $24.95.  First charge will be the Activation Fee plus the first month on a 3 month minimum subscription.",
        "A 3-month minimum applies to any Service Plan subscription, upgrade or downgrade.",
        "Usage above Plan Subscription limits during a month from bill date to bill date will be charged at $ 9.00 per GB in 1 GB increments.",
        "Unused data does not carry over month to month.",
        "Plan usage charges will be applied and billed the month following the month in which usage charges are incurred.",
        "Termination requires 30 day notification and Subscriber is responsible for all charges through this period.",
        "Complete deactivation of Service will require reactivation and a new Activation Fee will be charged.",
        "All plans are unthrottled and all usage is the responsibility of the Subscriber of Record.",
        "Subscribers are responsible for security surrounding access to their Device and all usage.",
        "High Usage Alert notification is not provided.  Staying within Plan Subscription limits are the sole responsibility of the Subscriber.",
        "Subscription to any plan acknowledges the above and agreement to these Terms and Conditions.",
        <CoverageMapTerm key="coverage_map" />,
        "Broadband video includes 2 GB of data. Unused data does not carry over.",
        "Additional cellular usage above plan is billed in GB increments at $9 per GB.",
        "Travel outside the US and Canada can result in additional cellular usage charges and are authorized by subscribing to this service.",
        "Connection is NOT guaranteed at any time and conditions based on proximity to cellular towers as well as weather conditions affect quality of service.",
        "Travel outside the US and Canada can result in additional charges and are authorized by subscribing to this service.",
        "No connectivity outside the US is guaranteed or warranted.",
      ].map((term, ix) => (
        <li key={`term${ix}`} style={{ fontSize: bodySize }}>
          {term}
        </li>
      ))}
    </ul>
  );
}
