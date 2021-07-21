import React from "react";
import {
  nauticAlertPlanOptions,
  nauticAlertBroadbandVideo,
} from "../lib/PlanOptions";
import RegistrationForm from "../lib/RegistrationForm";
import Header from "../snippets/header";
import Footer from "../snippets/footer";

export default function RegistrationFormPage({}) {
  return (
      <>
        <Header />
        <RegistrationForm
            broadbandVideoAddOn={nauticAlertBroadbandVideo}
            renderInstallDate={false}
            renderDealerFields={false}
            renderVesselType={false}
            planOptions={nauticAlertPlanOptions}
        />
        <Footer />
      </>
  );
}
