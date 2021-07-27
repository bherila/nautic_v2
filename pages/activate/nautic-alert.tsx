import React from "react";
import {
  nauticAlertPlanOptions,
  nauticAlertBroadbandVideo,
} from "../../lib/PlanOptions";
import RegistrationForm from "../../lib/RegistrationForm";

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
        />
      </div>
    </>
  );
}
