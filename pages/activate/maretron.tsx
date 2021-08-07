import React from "react";
import { maretronOptions } from "../../lib/PlanOptions";
import RegistrationForm from "../../lib/RegistrationForm";
import TermsContentMaretron from "../../snippets/TermsContentMaretron";

export default function RegistrationFormPage({}) {
  return (
    <main>
      <h1 className="heading-39">Maretron SMS100 Activation Page</h1>
      <div className="w-container">
        <div
          className="container-21 w-container"
          style={{ textAlign: "center" }}
        ></div>
        <RegistrationForm
          broadbandVideoAddOn={[]}
          renderInstallDate={false}
          renderDealerFields={true}
          renderVesselType={true}
          planOptions={maretronOptions}
          termsContent={<TermsContentMaretron />}
        />
      </div>
    </main>
  );
}
