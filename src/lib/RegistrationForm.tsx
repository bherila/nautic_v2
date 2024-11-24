import * as React from 'react'
import { PlanOption } from './PlanOptions'
import isIMEIValid from '../lib/luhn'
import RegistrationState, {
  ValidatingRegistrationState,
} from '../lib/RegistrationState'
import CheckoutSubmit from './CheckoutSubmit'
import TermsContainer from '../snippets/TermsContainer'
import { validateSync } from 'class-validator'
import IMEIModal from '../snippets/IMEIModal'
import { bodySize } from './styles'

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
}

export default class RegistrationForm extends React.Component<
  Props,
  RegistrationState
> {
  constructor(props: Props, context: any) {
    super(props, context)
    this.state = new ValidatingRegistrationState({ emailCC: props.cc })
  }

  renderPlanOptions(
    planOptions: PlanOption[],
    depth: number,
    defaultChoice: string,
  ) {
    const selectedOption = (this.state.selectedPlan || [])[depth] || ''
    console.log('selectedOption', selectedOption)
    return (
      <React.Fragment>
        <select
          className={wInput}
          onChange={(e) => {
            const selectedPlan = this.state.selectedPlan.slice(0)
            while (selectedPlan.length <= depth) selectedPlan.push('')
            selectedPlan[depth] = e.currentTarget.value
            this.setState({ selectedPlan })
          }}
        >
          <option>{defaultChoice || 'Select One'}</option>
          {planOptions.map((opt, ix) => {
            getPlanOptionById[opt.checkoutId || opt.name] = opt
            return (
              <option
                key={`opt${ix}`}
                value={opt.checkoutId || opt.name}
                selected={opt.name === selectedOption}
              >
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
            <React.Fragment key={opt.name}>
              {this.renderPlanOptions(
                opt.planOptions || [],
                depth + 1,
                opt.nextDefaultChoice || '',
              )}
            </React.Fragment>
          ))}
      </React.Fragment>
    )
  }

  renderIccid() {
    if (!this.state.broadbandVideo) {
      const sp = this.state.selectedPlan
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
            value={this.state.iccId}
            onChange={(e) => this.setState({ iccId: e.currentTarget.value })}
            required={true}
            minLength={19}
            maxLength={20}
          />
        </label>
      </div>
    )
  }

  renderName() {
    return (
      <div>
        <label>Device Owner’s Full Name {required}</label>
        <input
          className={wInput}
          type="text"
          placeholder="First Name"
          autoComplete="First"
          value={this.state.ownerFname || ''}
          onChange={(e) => this.setState({ ownerFname: e.currentTarget.value })}
          required={true}
          style={{ width: '60%', display: 'inline-block' }}
        />
        &nbsp;
        <input
          className={wInput}
          type="text"
          placeholder="MI (Optional)"
          value={this.state.ownerMi || ''}
          onChange={(e) => this.setState({ ownerMi: e.currentTarget.value })}
          style={{ width: '35%', display: 'inline-block' }}
        />
        <input
          className={wInput}
          type="text"
          placeholder="Last Name"
          value={this.state.ownerLname || ''}
          onChange={(e) => this.setState({ ownerLname: e.currentTarget.value })}
          required={true}
        />
      </div>
    )
  }

  renderCol1() {
    const { renderInstallDate, broadbandVideoAddOn, planOptions } = this.props
    return (
      <React.Fragment>
        <div>
          <label>Plan Options {required}</label>
          {this.renderPlanOptions(
            planOptions,
            0,
            this.props.defaultPlanText || 'Select Your Plan',
          )}
        </div>

        {!!broadbandVideoAddOn[this.getBasePlanId()] && (
          <React.Fragment>
            <label>
              <input
                type="checkbox"
                value="true"
                checked={this.state.broadbandVideo}
                onChange={(e) =>
                  this.setState({ broadbandVideo: e.currentTarget.checked })
                }
              />
              &nbsp; Add Broadband Video + $14.99
            </label>
          </React.Fragment>
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
                value={this.state.installDate || ''}
                onChange={(e) =>
                  this.setState({ installDate: e.currentTarget.value })
                }
                required={true}
              />
            </label>
          </div>
        )}

        {this.renderImeiField()}
        {this.renderIccid()}
      </React.Fragment>
    )
  }

  renderCol2() {
    const { renderDealerFields, renderVesselType } = this.props
    return (
      <React.Fragment>
        {this.renderName()}

        <div>
          <label>Name of Vessel (if Applicable)</label>
          <input
            className={wInput}
            type="text"
            placeholder="Vessel Name"
            value={this.state.vesselName || ''}
            onChange={(e) =>
              this.setState({ vesselName: e.currentTarget.value })
            }
          />
        </div>

        <div>
          <label>Device Owner’s Cell Phone Number {required}</label>
          <input
            className={wInput}
            type="tel"
            placeholder="(xxx) xxx-xxxx"
            value={this.state.cellNumber || ''}
            onChange={(e) =>
              this.setState({ cellNumber: e.currentTarget.value })
            }
            required={true}
          />
        </div>

        <div>
          <label>Device Owner’s Email {required}</label>
          <input
            className={wInput}
            type="email"
            placeholder="yourname@domain.com"
            value={this.state.email || ''}
            onChange={(e) => this.setState({ email: e.currentTarget.value })}
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
                  checked={typ === this.state.vesselType}
                  onChange={(e) =>
                    this.setState({ vesselType: e.currentTarget.value })
                  }
                />
                &nbsp;
                {typ}
              </label>
            ))}
          </div>
        )}
      </React.Fragment>
    )
  }

  renderImeiField() {
    return (
      <React.Fragment>
        <div style={{ marginTop: '25px' }}>
          <label>
            Device IMEI Number {required}
            <button
              type="button"
              onClick={(e) => this.setState({ showImeiModal: true })}
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
              value={this.state.imei || ''}
              onChange={(e) => this.setState({ imei: e.currentTarget.value })}
              required={true}
            />
          </label>
        </div>
        {this.state.imei.length > 15 &&
          !isIMEIValid(this.state.imei.split('')) && (
            <p style={{ color: 'maroon' }}>
              Please double check IMEI, it is likely invalid :(
            </p>
          )}
      </React.Fragment>
    )
  }

  render() {
    const validationErrors = validateSync(
      new ValidatingRegistrationState(this.state),
    )
    const isValid = this.state.agreed && validationErrors.length === 0
    return (
      <div style={{ fontSize: bodySize }}>
        {this.state.showImeiModal && (
          <IMEIModal
            contentOverride={this.props.imeiContentOverride}
            onClose={() => this.setState({ showImeiModal: false })}
          />
        )}
        <div className="quote-form-wrapper new-form">
          <div className="w-row">
            <div className="w-col w-col-6">{this.renderCol1()}</div>
            <div className="w-col w-col-6">{this.renderCol2()}</div>
          </div>
          <div className="w-row">
            <TermsContainer
              isAgreed={this.state.agreed}
              setAgreed={(agreed) => this.setState({ agreed })}
              content={this.props.termsContent}
            />
          </div>

          {!this.state.agreed ? (
            <div className="w-row">
              <div className="w-col w-col-12" style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  disabled={true}
                  className={'buy-button button-icon w-button disabled'}
                  style={{ paddingLeft: '20px', paddingRight: '20px' }}
                >
                  Accept Terms to Continue
                </button>
              </div>
            </div>
          ) : !isValid ? (
            <div
              style={{
                border: '1px solid maroon',
                padding: '20px',
                margin: '15px auto',
              }}
            >
              One or more inputs above isn’t filled in correctly/completely.
              Please scroll up and make sure all required fields are filled. The
              continue button will appear here when all required fields are
              completed.
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
          ) : (
            <CheckoutSubmit checkoutFormState={this.state} />
          )}
        </div>
      </div>
    )
  }

  getBasePlanId() {
    if (!this.state.selectedPlan || !this.state.selectedPlan[0]) {
      return ''
    }
    return this.state.selectedPlan.slice(-1)[0] || ''
  }
}
