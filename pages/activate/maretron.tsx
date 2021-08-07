import React from "react";
import { maretronOptions } from "../../lib/PlanOptions";
import RegistrationForm from "../../lib/RegistrationForm";
import TermsContentMaretron from "../../snippets/TermsContentMaretron";
import Image from "next/image";

export default function RegistrationFormPage({}) {
  return (
    <main>
      <div
        className="w-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <div style={{ display: "block" }}>
          <h1>SMS100 Activation Page</h1>
          <p>All fields are mandatory unless indicated</p>
        </div>
        <div style={{ display: "block" }}>
          <Image
            src="/img/Maretron-Logo.png"
            width={300}
            height={69}
            alt="Maretron"
          />
        </div>
      </div>
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
      <div className="container-21 w-container" style={{ textAlign: "center" }}>
        <h1>SMS100 Activation Support</h1>
        <p>
          US Toll Free &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + 1 844 526 2627 ext. 2
        </p>
      </div>
    </main>
  );
}
