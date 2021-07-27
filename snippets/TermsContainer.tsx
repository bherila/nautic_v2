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
        <div>{props.content}</div>
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
