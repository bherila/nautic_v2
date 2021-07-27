import React, { useState } from "react";
import { CoverageMapTerm } from "./tMobileCoverageMap";
import { bodySize, headingSize } from "../lib/RegistrationForm";

export interface TermsProps {
  isAgreed: boolean;
  setAgreed: (isAgreed: boolean) => void;
  content: React.ReactNode;
}

export default function TermsContainer(props: TermsProps) {
  const [showTerms, setShowTerms] = useState(!props.isAgreed);
  return (
    <div style={{ textAlign: "left" }}>
      {!showTerms ? (
        <div>
          <p>
            <a href="#" onClick={() => setShowTerms(true)}>
              Show Terms of Service Again
            </a>
          </p>
        </div>
      ) : (
        <div>
          <h3 style={{ fontSize: headingSize }}>Terms of Service</h3>
          <h3 style={{ fontSize: bodySize, margin: 0 }}>Satellite</h3>
          <ul style={{ fontSize: bodySize }}>
            <li>Usage above Plan selected is billed at $1.89 per kb.</li>
            <li>
              Charges will be applied and billed the month following that in
              which charges are incurred.
            </li>
          </ul>
          <h3 style={{ fontSize: bodySize, margin: 0 }}>
            Cellular and Broadband Video
          </h3>
          {props.content}
        </div>
      )}
      <label style={{ fontSize: bodySize }}>
        <input
          type="checkbox"
          checked={props.isAgreed}
          onChange={(e) => {
            props.setAgreed(e.currentTarget.checked);
            if (e.currentTarget.checked) {
              setShowTerms(false);
            }
          }}
        />
        &nbsp;I agree to the Terms of Service
      </label>
    </div>
  );
}
