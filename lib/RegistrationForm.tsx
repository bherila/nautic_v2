import * as React from "react";
import { PlanOption } from "./PlanOptions";
import isIMEIValid from "../lib/luhn";
import RegistrationState, {
  defaultRegistrationState,
} from "../lib/RegistrationState";
import { saveToLocalStorage } from "./localStorage";
import { FormEvent } from "react";
import { CoverageMapTerm } from "../snippets/tMobileCoverageMap";
import Image from "next/image";
import NearshoreCheckout from "./nearshoreCheckout";
import Terms from "../snippets/terms";

const getPlanOptionById: { [key: string]: PlanOption } = {};
export const headingSize = "15pt";
export const bodySize = "10pt";
const wInput = "w-input";

const required = <span style={{ color: "red" }}>*</span>;

const linkStyle = {
  color: "blue",
  textDecoration: "underline",
  background: "transparent",
};

interface Props {
  renderInstallDate: boolean;
  renderDealerFields: boolean;
  renderVesselType: boolean;
  broadbandVideoAddOn: any;
  planOptions: PlanOption[];
}

export default class RegistrationForm extends React.Component<
  Props,
  RegistrationState
> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = { ...defaultRegistrationState };
  }

  renderPlanOptions(
    planOptions: PlanOption[],
    depth: number,
    defaultChoice: string
  ) {
    const selectedOption = (this.state.selectedPlan || [])[depth] || "";
    console.log("selectedOption", selectedOption);
    return (
      <React.Fragment>
        <select
          className={wInput}
          onChange={(e) => {
            const selectedPlan = this.state.selectedPlan.slice(0);
            while (selectedPlan.length <= depth) selectedPlan.push("");
            selectedPlan[depth] = e.currentTarget.value;
            this.setState({ selectedPlan });
          }}
        >
          <option>{defaultChoice || "Select One"}</option>
          {planOptions.map((opt, ix) => {
            getPlanOptionById[opt.checkoutId || opt.name] = opt;
            return (
              <option
                key={`opt${ix}`}
                value={opt.checkoutId || opt.name}
                selected={opt.name === selectedOption}
              >
                {opt.name}
                {!!opt.price && opt.price > 0 && " - $" + opt.price.toFixed(2)}
              </option>
            );
          })}
        </select>
        {/*Render sub-options*/}
        {planOptions
          .filter(
            (opt) =>
              opt.name === selectedOption && (opt.planOptions || []).length > 0
          )
          .map((opt) =>
            this.renderPlanOptions(
              opt.planOptions || [],
              depth + 1,
              opt.nextDefaultChoice || ""
            )
          )}
      </React.Fragment>
    );
  }

  renderIccid() {
    if (!this.state.broadbandVideo) {
      const sp = this.state.selectedPlan;
      const plan = getPlanOptionById[sp[sp.length - 1]];
      if (!plan || !plan.enableIccId) {
        return false;
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
    );
  }

  renderName() {
    return (
      <div>
        <label>Vessel Owner&apos;s Full Name {required}</label>
        <input
          className={wInput}
          type="text"
          placeholder="First Name"
          autoComplete="First"
          value={this.state.ownerFname || ""}
          onChange={(e) => this.setState({ ownerFname: e.currentTarget.value })}
          required={true}
          style={{ width: "60%", display: "inline-block" }}
        />
        &nbsp;
        <input
          className={wInput}
          type="text"
          placeholder="MI (Optional)"
          value={this.state.ownerMi || ""}
          onChange={(e) => this.setState({ ownerMi: e.currentTarget.value })}
          style={{ width: "35%", display: "inline-block" }}
        />
        <input
          className={wInput}
          type="text"
          placeholder="Last Name"
          value={this.state.ownerLname || ""}
          onChange={(e) => this.setState({ ownerLname: e.currentTarget.value })}
          required={true}
        />
      </div>
    );
  }

  renderCol1() {
    const { renderInstallDate, broadbandVideoAddOn, planOptions } = this.props;
    return (
      <React.Fragment>
        <div>
          <label>Plan Options {required}</label>
          {this.renderPlanOptions(planOptions, 0, "Select Your Device")}
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
                value={this.state.installDate || ""}
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
    );
  }

  renderCol2() {
    const { renderDealerFields, renderVesselType } = this.props;
    return (
      <React.Fragment>
        {this.renderName()}

        <div>
          <label>Name of Vessel (if Applicable)</label>
          <input
            className={wInput}
            type="text"
            placeholder="Vessel Name"
            value={this.state.vesselName || ""}
            onChange={(e) =>
              this.setState({ vesselName: e.currentTarget.value })
            }
          />
        </div>

        <div>
          <label>Cell Phone Number {required}</label>
          <input
            className={wInput}
            type="tel"
            placeholder="(xxx) xxx-xxxx"
            value={this.state.cellNumber || ""}
            onChange={(e) =>
              this.setState({ cellNumber: e.currentTarget.value })
            }
            required={true}
          />
        </div>

        {renderVesselType && (
          <div>
            <label>Vessel Type</label>
            {["Sail", "Powered", "N/A"].map((typ, ix) => (
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
        {renderDealerFields && (
          <React.Fragment>
            <div>
              <label>Dealer or Installer Name (optional)</label>
              <input
                className={wInput}
                type="text"
                placeholder="Installer Name"
                value={this.state.dealerName || ""}
                onChange={(e) =>
                  this.setState({ dealerName: e.currentTarget.value })
                }
              />
            </div>

            <div>
              <label>Dealer or Installer Company (optional)</label>
              <input
                className={wInput}
                type="text"
                placeholder="Installer Company"
                value={this.state.dealerCompany || ""}
                onChange={(e) =>
                  this.setState({ dealerCompany: e.currentTarget.value })
                }
              />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

  renderImeiField() {
    return (
      <React.Fragment>
        <div style={{ marginTop: "25px" }}>
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
              value={this.state.imei || ""}
              onChange={(e) => this.setState({ imei: e.currentTarget.value })}
              required={true}
            />
          </label>
        </div>
        {this.state.imei.length > 15 &&
          !isIMEIValid(this.state.imei.split("")) && (
            <p style={{ color: "maroon" }}>
              Please double check IMEI, it is likely invalid :(
            </p>
          )}
      </React.Fragment>
    );
  }

  renderImeiModal() {
    return (
      <div
        id="modal-nautic-imei"
        className="modal"
        style={{
          display: "block",
          position: "fixed",
          boxShadow: "-3px 2px 3px 7px #ccc",
          top: "20%",
          left: "30%",
          right: "30%",
          zIndex: 1000,
          background: "#fff",
          padding: "4rem",
          fontSize: bodySize,
        }}
      >
        <button
          style={{ float: "right", fontWeight: "bold", fontSize: headingSize }}
          onClick={(e) => this.setState({ showImeiModal: false })}
        >
          X
        </button>
        <h3 style={{ marginTop: 0 }}>How do I find my IMEI?</h3>
        <ol>
          <li>
            Go to Home Screen, press button in upper right to be taken to System
            Settings
          </li>
          <li>
            At System Settings scroll the bottom bar to the left and press
            “Info” tab. &nbsp;The “MEID” line is the IMEI.
          </li>
        </ol>
        <Image
          src="/img/insight_meid_screenshot.jpg"
          width={429}
          height={323}
        />
        {/*<img*/}
        {/*    src="https://assets.website-files.com/5a29d8f7c76e0b0001d9eac5/5b463af08b30b647f3f575f0_Insight%20MEID%20Screenshot.JPG"*/}
        {/*    srcSet="https://assets.website-files.com/5a29d8f7c76e0b0001d9eac5/5b463af08b30b647f3f575f0_Insight%20MEID%20Screenshot-p-800.jpeg 800w, https://assets.website-files.com/5a29d8f7c76e0b0001d9eac5/5b463af08b30b647f3f575f0_Insight%20MEID%20Screenshot.JPG 982w"*/}
        {/*    sizes="(max-width: 479px) 79vw, (max-width: 767px) 84vw, (max-width: 991px) 323px, 429px"*/}
        {/*    alt=""*/}
        {/*    style={{*/}
        {/*        paddingTop: "10px",*/}
        {/*        marginLeft: "auto",*/}
        {/*        marginRight: "auto",*/}
        {/*    }}*/}
        {/*/>*/}
      </div>
    );
  }

  render() {
    const isValid = this.isPlanValid() && this.state.agreed;
    return (
      <div style={{ fontSize: bodySize }}>
        {this.state.showImeiModal && this.renderImeiModal()}
        <div className="quote-form-wrapper new-form">
          <div className="w-row">
            <div className="w-col w-col-6">{this.renderCol1()}</div>
            <div className="w-col w-col-6">{this.renderCol2()}</div>
          </div>
          <div className="w-row">
            <Terms
              isAgreed={this.state.agreed}
              setAgreed={(agreed) => this.setState({ agreed })}
            />
          </div>
          {/*<div className="w-row">*/}
          {/*  <div className="w-col w-col-12" style={{ textAlign: "center" }}>*/}
          {/*    <button*/}
          {/*      type="submit"*/}
          {/*      disabled={!isValid}*/}
          {/*      className={*/}
          {/*        "buy-button button-icon w-button " + (!isValid && "disabled")*/}
          {/*      }*/}
          {/*    >*/}
          {/*      Proceed*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {this.state.agreed && !isValid && (
            <div>
              One or more inputs above isn&apos;t filled in
              correctly/completely. Please scroll up and make sure all required
              fields are filled. The continue button will appear here when all
              required fields are completed.
            </div>
          )}
          {isValid && <NearshoreCheckout plan={this.state} />}
        </div>
      </div>
    );
  }

  getBasePlanId() {
    return this.state.selectedPlan.slice(-1)[0] || "";
  }

  isPlanValid() {
    const { broadbandVideoAddOn } = this.props;
    return !!broadbandVideoAddOn[this.getBasePlanId()];
  }
}
