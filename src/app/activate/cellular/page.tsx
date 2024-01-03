"use client";
import React from "react";
import { cellPlanOptions } from "@/lib/PlanOptions";
import RegistrationForm from "@/lib/RegistrationForm";
import { CellularTerms } from "@/snippets/TermsContentCellular";
import Layout from "@/lib/layout";
import HeroUnit from "@/snippets/HeroUnit";

function HaveOrNeedASim() {
  return (
    <>
      <h3 style={{ textTransform: "uppercase" }}>Have a SIM? Or Need a SIM?</h3>
      <p>
        Our Data SIMs connect to multiple carriers in every country and give you
        super fast data around the world.
      </p>
      <p>
        Have your own device and already have one of our sims? Complete the
        following form and we’ll get you activated. If you need us to mail you a
        SIM so you can get connected, just call us US Toll Free at 844-526-2627
        extension 2, or email us at{" "}
        <a href="mailto:comms@nearshorenetworks.com">
          comms@nearshorenetworks.com
        </a>{" "}
        and we’ll get one out to you Priority USPS.
      </p>
    </>
  );
}

export default function CellularPage() {
  return (
    <Layout>
      <div className="page-header page-adaptive wf-section">
        <HeroUnit
          title="Cellular"
          img={"/images/5a-Activate-Services---cellular.jpg"}
        >
          Stay connected wherever you travel, at affordable rates. It’s EASY
          with NEARSHORE.
        </HeroUnit>
      </div>
      <div className="w-container">
        <div
          className="container-21 w-container"
          style={{ textAlign: "center" }}
        >
          <HaveOrNeedASim />
        </div>
        <RegistrationForm
          broadbandVideoAddOn={[]}
          renderInstallDate={false}
          renderDealerFields={true}
          renderVesselType={true}
          planOptions={cellPlanOptions}
          termsContent={<CellularTerms />}
        />
      </div>
    </Layout>
  );
}
