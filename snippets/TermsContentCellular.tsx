import React from "react";
export function CellularTerms() {
  return (
    <ul>
      {[
        "Our Data Sims are designed to connect to multiple carriers in every country with the intent to provide data access around the world.",
        "Connection and Service availability is NOT Guaranteed in any specific country or location within a country or region you may visit or frequent. Your experience may vary location to location.",
        "The subscription rates are US only and International rates may vary. Call us before travelling.",
        "Travel outside the US can result in additional cellular usage charges and are authorized by your subscribing to this service including US territories, Canada and Mexico regardless of carrier presence or governmental jurisdiction commonality with the US.",
        "Cellular Service requires 24 hours to activate, Monday-Friday.",
        "Activation requests received on Friday and on weekends will be processed on Monday.",
        "Activation Fee is $24.95.  First charge will be the Activation Fee plus the first month on a 3 month minimum subscription.",
        "A 3-month minimum applies to any Service Plan subscription, upgrade or downgrade.",
        "Usage above Plan Subscription limits during a month from bill date to bill date will be charged at $9.00 per GB in 1 GB increments.",
        "Unused data does not carry over month to month.",
        "Plan usage charges will be applied and billed the month following the month in which usage charges are incurred.",
        "Termination requires 30 day notification and Subscriber is responsible for all charges through this period.",
        "Complete deactivation of Service will require reactivation and a new Activation Fee will be charged.",
        "All plans are unthrottled and all usage is the responsibility of the Subscriber of Record.",
        "Subscribers are responsible for security surrounding access to their Device and all usage.",
        "High Usage Alert notification is not provided.",
        "Staying within Plan Subscription limits are the sole responsibility of the Subscriber.",
        "All Carrier Coverage Maps are only indicators and not guarantees of coverage or network access.",
        "Connection is NOT guaranteed at any time and conditions based on proximity to cellular towers as well as weather conditions can affect quality of service.",
        "No connectivity is guaranteed or warranted.",
        "Canadian, South American, Mexico, Bahamas, Puerto Rico and all Caribbean Region are areas with varying degrees of connectivity infrastructure in place and as such, connectivity levels will vary.",
        "Subscription to any plan acknowledges agreement to all of the above Terms & Conditions.",
      ].map((term, idx) => (
        <li key={"term" + idx}>{term}</li>
      ))}
    </ul>
  );
}
