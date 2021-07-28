import React from "react";
import {
  nauticAlertPlanOptions,
  nauticAlertBroadbandVideo,
} from "../../lib/PlanOptions";
import RegistrationForm from "../../lib/RegistrationForm";
import TermsContentNautic from "../../snippets/TermsContentNautic";

export default function RegistrationFormPage({}) {
  return (
    <>
      <h1 className="heading-39">Nautic Alert Plan Activation</h1>
      <div className="w-container">
        <RegistrationForm
          broadbandVideoAddOn={nauticAlertBroadbandVideo}
          renderInstallDate={false}
          renderDealerFields={false}
          renderVesselType={false}
          planOptions={nauticAlertPlanOptions}
          termsContent={<TermsContentNautic />}
          cc="nfvelado@nauticalert.com"
        />
      </div>
    </>
  );
}
