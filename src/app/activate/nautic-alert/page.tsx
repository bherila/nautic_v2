'use client'

import {
  nauticAlertPlanOptions,
  nauticAlertBroadbandVideo,
} from '@/lib/PlanOptions'
import RegistrationForm from '@/lib/RegistrationForm'
import TermsContentNautic from '@/snippets/TermsContentNautic'
import Image from 'next/image'
import Layout from '@/lib/layout'
import HeroUnit from '@/snippets/HeroUnit'

function NauticIMEIModal() {
  return (
    <>
      <ol>
        <li>
          Go to Home Screen, press button in upper right to be taken to System
          Settings
        </li>
        <li>
          At System Settings scroll the bottom bar to the left and press “Info”
          tab. &nbsp;The “MEID” line is the IMEI.
        </li>
      </ol>
      <Image
        src="/img/insight_meid_screenshot.jpg"
        width={429}
        height={323}
        alt="Insight MEID screenshot"
      />
    </>
  )
}

export default function RegistrationFormPage() {
  return (
    <Layout>
      <div className="page-header page-adaptive wf-section">
        <HeroUnit
          title="Nautic Alert"
          img="/images/5a-Activate-Services---nautic-alert.jpg"
        >
          Enable security onboard wherever you travel. NEARSHORE’s 99.5%
          guaranteed uptime connection and affordable rates are perfect for your
          travels.
        </HeroUnit>
      </div>
      <div className="w-container">
        <RegistrationForm
          broadbandVideoAddOn={nauticAlertBroadbandVideo}
          renderInstallDate={false}
          renderDealerFields={true}
          renderVesselType={true}
          planOptions={nauticAlertPlanOptions}
          termsContent={<TermsContentNautic />}
          imeiContentOverride={<NauticIMEIModal />}
          defaultPlanText="Select Your Device"
          cc="nfvelado@nauticalert.com"
        />
      </div>
    </Layout>
  )
}
