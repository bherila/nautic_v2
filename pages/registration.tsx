﻿import React from "react";
import {
  nauticAlertPlanOptions,
  nauticAlertBroadbandVideo,
} from "../lib/PlanOptions";
import RegistrationForm from "../lib/RegistrationForm";

export default function RegistrationFormPage({}) {
  return (
    <RegistrationForm
      broadbandVideoAddOn={nauticAlertBroadbandVideo}
      renderInstallDate={false}
      renderDealerFields={false}
      renderVesselType={false}
      planOptions={nauticAlertPlanOptions}
    />
  );
}