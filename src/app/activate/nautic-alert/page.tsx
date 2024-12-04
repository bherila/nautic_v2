import {
  nauticAlertPlanOptions,
  nauticAlertBroadbandVideo,
} from '@/lib/PlanOptions'
import RegistrationForm from '@/lib/RegistrationForm'
import TermsContentNautic from '@/snippets/TermsContentNautic'
import Layout from '@/lib/layout'
import HeroUnit from '@/snippets/HeroUnit'
import NauticIMEIModal from './NauticIMEIModal'

export default function RegistrationFormPage() {
  return (
    <Layout>
      <div className="page-header page-adaptive wf-section">
        {/* <HeroUnit
          title="Nautic Alert"
          img="/images/5a-Activate-Services---nautic-alert.jpg"
        >
          Enable security onboard wherever you travel. NEARSHORE’s 99.5%
          guaranteed uptime connection and affordable rates are perfect for your
          travels.
        </HeroUnit> */}
      </div>
      <div className="w-container">
        <h1>Not available</h1>
        <p>We're sorry, this service is no longer available.</p>
        {/* <RegistrationForm
          broadbandVideoAddOn={nauticAlertBroadbandVideo}
          renderInstallDate={false}
          renderDealerFields={true}
          renderVesselType={true}
          planOptions={nauticAlertPlanOptions}
          termsContent={<TermsContentNautic />}
          imeiContentOverride={<NauticIMEIModal />}
          defaultPlanText="Select Your Device"
          cc="nfvelado@nauticalert.com"
          defaultFname={process.env.DEFAULT_FNAME ?? ''}
          defaultLname={process.env.DEFAULT_LNAME ?? ''}
          defaultMi={process.env.DEFAULT_MI ?? ''}
          defaultEmail={process.env.DEFAULT_EMAIL ?? ''}
          defaultIMEI={process.env.DEFAULT_IMEI ?? ''}
          defaultCellNumber={process.env.DEFAULT_CELL_NUMBER ?? ''}
          defaultVesselName={process.env.DEFAULT_VESSEL_NAME ?? ''}
          defaultIccId={process.env.DEFAULT_ICCID ?? ''}
        /> */}
      </div>
    </Layout>
  )
}
