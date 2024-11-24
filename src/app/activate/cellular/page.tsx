import { cellPlanOptions } from '@/lib/PlanOptions'
import RegistrationForm from '@/lib/RegistrationForm'
import { CellularTerms } from '@/snippets/TermsContentCellular'
import Layout from '@/lib/layout'
import HeroUnit from '@/snippets/HeroUnit'
import HaveOrNeedASim from './HaveOrNeedASim'

export default function CellularPage() {
  return (
    <Layout>
      <div className="page-header page-adaptive wf-section">
        <HeroUnit
          title="Cellular"
          img={'/images/5a-Activate-Services---cellular.jpg'}
        >
          Stay connected wherever you travel, at affordable rates. It’s EASY
          with NEARSHORE.
        </HeroUnit>
      </div>
      <div className="w-container">
        <div
          className="container-21 w-container"
          style={{ textAlign: 'center' }}
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
          defaultFname={process.env.DEFAULT_FNAME ?? ''}
          defaultLname={process.env.DEFAULT_LNAME ?? ''}
          defaultMi={process.env.DEFAULT_MI ?? ''}
          defaultEmail={process.env.DEFAULT_EMAIL ?? ''}
          defaultIMEI={process.env.DEFAULT_IMEI ?? ''}
          defaultCellNumber={process.env.DEFAULT_CELL_NUMBER ?? ''}
          defaultVesselName={process.env.DEFAULT_VESSEL_NAME ?? ''}
          defaultIccId={process.env.DEFAULT_ICCID ?? ''}
        />
      </div>
    </Layout>
  )
}
