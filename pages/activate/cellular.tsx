import React from "react";
import { cellPlanOptions } from "../../lib/PlanOptions";
import RegistrationForm from "../../lib/RegistrationForm";

export default function RegistrationFormPage({}) {
  return (
    <>
      <h1 className="heading-39">Cellular Plan Activation</h1>
      <div className="w-container">
        <div className="container-21 w-container">
          <p>
            <br />
            <strong>
              <br />
              HAVE A SIM - OR NEED A SIM?
            </strong>
            <br />
            Our Data Sims connect to multiple carriers in every country and give
            you super fast data around the world.
            <br />
            Have your own device and already have one of our sims? Complete the
            following form and we’ll get you activated. If you need us to mail
            you a SIM so you can get connected, just call us US Toll Free at
            844-526-2627 extension 2, or email us at{" "}
            <a href="mailto:comms@nearshorenetworks.com">
              comms@nearshorenetworks.com
            </a>{" "}
            and we’ll get one out to you Priority USPS.
            <strong>
              <br />
            </strong>
            ‍<br />
            <br />
            <strong>All fields are mandatory</strong>
          </p>
        </div>
        <RegistrationForm
          broadbandVideoAddOn={[]}
          renderInstallDate={false}
          renderDealerFields={true}
          renderVesselType={true}
          planOptions={cellPlanOptions}
        />
      </div>
    </>
  );
}
