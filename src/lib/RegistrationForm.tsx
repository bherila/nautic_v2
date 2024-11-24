'use client'
import { useState } from 'react'
import { PlanOption } from './PlanOptions'
import isIMEIValid from '../lib/luhn'
import { ValidatingRegistrationState } from '../lib/RegistrationState'
import CheckoutSubmit from './CheckoutSubmit'
import TermsContainer from '../snippets/TermsContainer'
import { validateSync } from 'class-validator'
import IMEIModal from '../snippets/IMEIModal'
import { bodySize } from './styles'
import YellowButtonPlaceholder from './YellowButtonPlaceholder'

const getPlanOptionById: { [key: string]: PlanOption } = {}
const wInput = 'w-input'

const required = <span style={{ color: 'red' }}>*</span>

const linkStyle = {
  color: 'blue',
  textDecoration: 'underline',
  background: 'transparent',
}

interface Props {
  renderInstallDate: boolean
  renderDealerFields: boolean
  renderVesselType: boolean
  broadbandVideoAddOn: any
  planOptions: PlanOption[]
  termsContent: React.ReactNode
  imeiContentOverride?: React.ReactNode
  cc?: string
  defaultPlanText?: string
  defaultFname?: string
  defaultLname?: string
  defaultMi?: string
  defaultEmail?: string
  defaultIMEI?: string
  defaultCellNumber?: string
  defaultVesselName?: string
  defaultIccId?: string
}

export default function RegistrationForm(props: Props) {
  const emailCC = props.cc
  const [ownerFname, setOwnerFname] = useState<string>(props.defaultFname ?? '')
  const [ownerLname, setOwnerLname] = useState<string>(props.defaultLname ?? '')
  const [ownerMi, setOwnerMi] = useState<string>(props.defaultMi ?? '')
  const [email, setEmail] = useState<string>(props.defaultEmail ?? '')
  const [imei, setIMEI] = useState<string>(props.defaultIMEI ?? '')
  const [cellNumber, setCellNumber] = useState<string>(
    props.defaultCellNumber ?? '',
  )
  const [vesselName, setVesselName] = useState<string>(
    props.defaultVesselName ?? '',
  )
  const [iccId, setIccId] = useState<string>(props.defaultIccId ?? '')
  const [selectedPlan, setSelectedPlan] = useState<string[]>([])
  const [broadbandVideo, setBroadbandVideo] = useState(false)
  const [installDate, setInstallDate] = useState<string>('')
  const [vesselType, setVesselType] = useState<string>('')
  const [showImeiModal, setShowImeiModal] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const regState: ValidatingRegistrationState = new ValidatingRegistrationState(
    {
      selectedPlan: selectedPlan,
      broadbandVideo: broadbandVideo,
      installDate: installDate,
      email: email,
      imei: imei,
      ownerFname: ownerFname,
      ownerLname: ownerLname,
      ownerMi: ownerMi,
      vesselName: vesselName,
      cellNumber: cellNumber,
      vesselType: vesselType,
      showImeiModal: showImeiModal,
      agreed: agreed,
      iccId: iccId,
      emailCC: emailCC,
    },
  )

  function renderPlanOptions(
    planOptions: PlanOption[],
    depth: number,
    defaultChoice: string,
  ) {
    const selectedOption = (selectedPlan || [])[depth] || ''
    console.log('selectedOption', selectedOption)
    return (
      <>
        <select
          className={wInput}
          onChange={(e) => {
            const newSelectedPlan = [...selectedPlan.slice(0)]
            while (newSelectedPlan.length <= depth) newSelectedPlan.push('')
            newSelectedPlan[depth] = e.currentTarget.value
            setSelectedPlan(newSelectedPlan)
          }}
          value={selectedOption}
        >
          <option>{defaultChoice || 'Select One'}</option>
          {planOptions.map((opt, ix) => {
            getPlanOptionById[opt.checkoutId || opt.name] = opt
            return (
              <option key={`opt${ix}`} value={opt.checkoutId || opt.name}>
                {opt.name}
                {!!opt.price && opt.price > 0 && ' - $' + opt.price.toFixed(2)}
              </option>
            )
          })}
        </select>
        {/*Render sub-options*/}
        {planOptions
          .filter(
            (opt) =>
              opt.name === selectedOption && (opt.planOptions || []).length > 0,
          )
          .map((opt) => (
            <div key={opt.name}>
              {renderPlanOptions(
                opt.planOptions || [],
                depth + 1,
                opt.nextDefaultChoice || '',
              )}
            </div>
          ))}
      </>
    )
  }

  function renderIccid() {
    if (!broadbandVideo) {
      const sp = selectedPlan
      const plan = getPlanOptionById[sp[sp.length - 1]]
      if (!plan || !plan.enableIccId) {
        return false
      }
    }
    return (
      <div>
        <label>
          ICCID (19 digits) {required}
          <input
            className={wInput}
            type="tel"
            placeholder="Enter SIM ICCID"
            value={iccId}
            onChange={(e) => setIccId(e.currentTarget.value)}
            required={true}
            minLength={19}
            maxLength={20}
          />
        </label>
      </div>
    )
  }

  function renderName() {
    return (
      <div>
        <label>Device Owner’s Full Name {required}</label>
        <input
          className={wInput}
          type="text"
          placeholder="First Name"
          autoComplete="First"
          value={ownerFname || ''}
          onChange={(e) => setOwnerFname(e.currentTarget.value)}
          required={true}
          style={{ width: '60%', display: 'inline-block' }}
        />
        &nbsp;
        <input
          className={wInput}
          type="text"
          placeholder="MI (Optional)"
          value={ownerMi || ''}
          onChange={(e) => setOwnerMi(e.currentTarget.value)}
          style={{ width: '35%', display: 'inline-block' }}
        />
        <input
          className={wInput}
          type="text"
          placeholder="Last Name"
          value={ownerLname || ''}
          onChange={(e) => setOwnerLname(e.currentTarget.value)}
          required={true}
        />
      </div>
    )
  }

  function renderCol1() {
    const { renderInstallDate, broadbandVideoAddOn, planOptions } = props
    return (
      <>
        <div>
          <label>Plan Options {required}</label>
          {renderPlanOptions(
            planOptions,
            0,
            props.defaultPlanText || 'Select Your Plan',
          )}
        </div>

        {!!broadbandVideoAddOn[getBasePlanId()] && (
          <>
            <label>
              <input
                type="checkbox"
                value="true"
                checked={broadbandVideo}
                onChange={(e) => setBroadbandVideo(e.currentTarget.checked)}
              />
              &nbsp; Add Broadband Video + $14.99
            </label>
          </>
        )}
        {renderInstallDate && (
          <div>
            <label>
              Target Install Date {required}
              <input
                className={wInput}
                type="date"
                min={new Date().toISOString() as any}
                placeholder="Target Install Date"
                value={installDate || ''}
                onChange={(e) => setInstallDate(e.currentTarget.value)}
                required={true}
              />
            </label>
          </div>
        )}

        {renderImeiField()}
        {renderIccid()}
      </>
    )
  }

  function renderCol2() {
    const { renderVesselType } = props
    return (
      <>
        {renderName()}

        <div>
          <label>Name of Vessel (if Applicable)</label>
          <input
            className={wInput}
            type="text"
            placeholder="Vessel Name"
            value={vesselName || ''}
            onChange={(e) => setVesselName(e.currentTarget.value)}
          />
        </div>

        <div>
          <label>Device Owner’s Cell Phone Number {required}</label>
          <input
            className={wInput}
            type="tel"
            placeholder="xxx-xxx-xxxx"
            value={cellNumber}
            onChange={(e) => {
              const val = e.currentTarget.value.replace(/\D/g, '')
              if (val.length === 10) {
                setCellNumber(
                  `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`,
                )
              } else {
                setCellNumber(val)
              }
            }}
            required={true}
          />
        </div>

        <div>
          <label>Device Owner’s Email {required}</label>
          <input
            className={wInput}
            type="email"
            placeholder="yourname@domain.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required={true}
          />
        </div>

        {renderVesselType && (
          <div>
            <label>Vessel Type</label>
            {['Sail', 'Powered', 'N/A'].map((typ, ix) => (
              <label key={`lbl${ix}`}>
                <input
                  type="radio"
                  name="vesselType"
                  value={typ}
                  checked={vesselType === typ}
                  onChange={(e) => setVesselType(e.currentTarget.value)}
                />
                &nbsp;
                {typ}
              </label>
            ))}
          </div>
        )}
      </>
    )
  }

  function renderImeiField() {
    return (
      <>
        <div style={{ marginTop: '25px' }}>
          <label>
            Device IMEI Number {required}
            <button
              type="button"
              onClick={() => setShowImeiModal(true)}
              style={linkStyle}
            >
              How do I find my IMEI?
            </button>
            <input
              className={wInput}
              type="tel"
              name="imei"
              autoComplete="off"
              placeholder="IMEI / MEID"
              value={imei}
              onChange={(e) => setIMEI(e.currentTarget.value)}
              required={true}
            />
          </label>
        </div>
        {imei.length > 15 && !isIMEIValid(imei.split('')) && (
          <p style={{ color: 'maroon' }}>
            Please double check IMEI, it is likely invalid :(
          </p>
        )}
      </>
    )
  }

  function renderSubmit() {
    if (!selectedPlan || selectedPlan.length === 0) {
      return (
        <YellowButtonPlaceholder>No plan selected!</YellowButtonPlaceholder>
      )
    }

    const validationErrors = validateSync(regState)
    const isValid = agreed && validationErrors.length === 0
    if (!agreed) {
      return (
        <YellowButtonPlaceholder>
          Accept Terms to Continue
        </YellowButtonPlaceholder>
      )
    }

    if (!isValid) {
      return (
        <div
          style={{
            border: '1px solid maroon',
            padding: '20px',
            margin: '15px auto',
          }}
        >
          One or more inputs above isn’t filled in correctly/completely. Please
          scroll up and make sure all required fields are filled. The continue
          button will appear here when all required fields are completed.
          {validationErrors.length == 0 ? null : (
            <>
              <p>Please correct these errors:</p>
              <ul>
                {validationErrors.map(
                  (err, idx) =>
                    err.constraints && (
                      <li key={`err${idx}`}>
                        {Object.values(err.constraints).join('. ')}
                      </li>
                    ),
                )}
              </ul>
            </>
          )}
        </div>
      )
    }

    return <CheckoutSubmit checkoutFormState={regState} />
  }

  function getBasePlanId() {
    if (!selectedPlan || !selectedPlan[0]) {
      return ''
    }
    return selectedPlan.slice(-1)[0] || ''
  }

  return (
    <div style={{ fontSize: bodySize }}>
      {showImeiModal && (
        <IMEIModal
          contentOverride={props.imeiContentOverride}
          onClose={() => setShowImeiModal(false)}
        />
      )}
      <div className="quote-form-wrapper new-form">
        <div className="w-row">
          <div className="w-col w-col-6">{renderCol1()}</div>
          <div className="w-col w-col-6">{renderCol2()}</div>
        </div>
        <div className="w-row">
          <TermsContainer
            isAgreed={agreed}
            setAgreed={(agreed) => setAgreed(agreed)}
            content={props.termsContent}
          />
        </div>
        {renderSubmit()}
      </div>
    </div>
  )
}
