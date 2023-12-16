import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="page-footer wf-section">
      <div className="footer-container">
        <div className="footer-wrapper-two">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/images/logo-white.svg"
                loading="lazy"
                width="100"
                height="100"
                alt=""
                className="footer-logo-image"
              />
            </div>
            <h5 className="footer-title">About NEARSHORE</h5>
            <p className="footer-text">
              We empower the maritime industry and remote locations with secure,
              reliable, and tailor-made communications solutions anywhere in the
              world.
            </p>
            <p className="footer-text">
              Call +1 844 526 2627
              <br />
              Email: comms@nearshorenetworks.com
            </p>
          </div>
          <div className="footer-menu-col">
            <a
              href="https://www.nearshorenetworks.com/about-us"
              className="footer-link"
            >
              About Us
            </a>
            <a
              href="https://www.nearshorenetworks.com/solutions/adaptive-video"
              className="footer-link"
            >
              Solutions
            </a>
            <a
              href="https://www.nearshorenetworks.com/industries/aquaculture"
              className="footer-link"
            >
              Industries
            </a>
          </div>
          <div className="footer-menu-col">
            <a
              href="https://www.nearshorenetworks.com/contact-us"
              aria-current="page"
              className="footer-link w--current"
            >
              Contact Us
            </a>
            <a
              href="https://www.nearshorenetworks.com/activate-services/adaptive-services-satellite"
              className="footer-link"
            >
              Activate Services
            </a>
            <a
              href="https://www.nearshorenetworks.com/news"
              className="footer-link"
            >
              Blog
            </a>
          </div>
          <div className="footer-menu-col subscribe-col">
            <div className="footer-form w-form">
              {/*<form id="wf-form-Footer-Form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" className="footer-form-container">*/}
              {/*  <div className="footer-title">Subscribe to our Newsletter</div>*/}
              {/*  <div className="footer-form-block"><input type="email" className="footer-form-field w-input" maxLength="256" name="email-subscribe-2" data-name="Email Subscribe 2" aria-label="Get product updates" placeholder="Enter your email." id="email-subscribe-2" required/><input type="submit" value="Subscribe" data-wait="Please wait..." className="footer-form-submit w-button"/></div>*/}
              {/*</form>*/}
              {/*<div className="w-form-done">*/}
              {/*  <div>Thank you! Your submission has been received!</div>*/}
              {/*</div>*/}
              {/*<div className="w-form-fail">*/}
              {/*  <div>Oops! Something went wrong while submitting the form.</div>*/}
              {/*</div>*/}
            </div>
            <div className="footer-menu-terms">
              <a
                href="https://www.nearshorenetworks.com/terms-conditions"
                className="footer-link link-terms"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="https://www.nearshorenetworks.com/privacy-policy"
                className="footer-link link-terms"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2022 NearShore Networks. All rights reserved.
          </div>
          <div className="footer-social-block-two">
            <a
              href="https://www.linkedin.com/company/nearshorenetworks/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link w-inline-block"
            >
              <img
                src="/images/icon-linkedin.svg"
                loading="lazy"
                width="32"
                height="32"
                alt=""
                className="footer-social-image"
              />
            </a>
            <a
              href="https://www.facebook.com/nearshorenetworks/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link w-inline-block"
            >
              <img
                src="/images/icon-facebook.svg"
                loading="lazy"
                width="32"
                height="32"
                alt=""
                className="footer-social-image"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCYCF59Cgfs53n1m6mZx861Q"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link w-inline-block"
            >
              <img
                src="/images/icon-youtube.svg"
                loading="lazy"
                width="32"
                height="32"
                alt=""
                className="footer-social-image"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailSubscribeForm({}) {
  return null;
  // return <>
  //     <div className="footer-form w-form">
  //         <form id="wf-form-Footer-Form" name="wf-form-Footer-Form" data-name="Footer Form"
  //               method="get" className="footer-form-container" aria-label="Footer Form">
  //             <div className="footer-title">Subscribe to our Newsletter</div>
  //             <div className="footer-form-block">
  //                 <input type="email" className="footer-form-field w-input"
  //                        maxLength={256} name="email-subscribe-2"
  //                        data-name="Email Subscribe 2" aria-label="Get product updates"
  //                        placeholder="Enter your email." id="email-subscribe-2" required/>
  //                 <input type="submit" value="Subscribe" data-wait="Please wait..."
  //                        className="footer-form-submit w-button"/>
  //             </div>
  //         </form>
  //         <div className="w-form-done" tabIndex={-1} role="region"
  //              aria-label="Footer Form success">
  //             <div>Thank you! Your submission has been received!</div>
  //         </div>
  //         <div className="w-form-fail" tabIndex={-1} role="region"
  //              aria-label="Footer Form failure">
  //             <div>Oops! Something went wrong while submitting the form.</div>
  //         </div>
  //     </div>
  // </>
}
