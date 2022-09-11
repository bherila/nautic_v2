import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="light-gray-bg wf-section">
      <div className="page-footer">
        <div className="footer-container">
          <div className="footer-wrapper-two">
            <div className="footer-brand">
              <div className="footer-logo">
                <Image
                  src={require("../images/logo-white.svg")}
                  width="180"
                  height="100"
                  alt=""
                  className="footer-logo-image"
                />
              </div>
              <h5 className="footer-title">About NEARSHORE</h5>
              <p className="footer-text">
                We empower the maritime industry and remote locations with
                secure, reliable, and tailor-made communications solutions
                anywhere in the world.
              </p>
              <p className="footer-text">
                Call +1 844 526 2627
                <br />
                Email: comms@nearshorenetworks.com
              </p>
            </div>
            <div className="footer-menu-col">
              <a href="#" className="footer-link">
                About Us
              </a>
              <a href="#" className="footer-link">
                Solutions
              </a>
              <a href="#" className="footer-link">
                Industries
              </a>
            </div>
            <div className="footer-menu-col">
              <a href="#" className="footer-link">
                Contact Us
              </a>
              <a href="#" className="footer-link">
                Activate Services
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
            </div>
            <div className="footer-menu-col subscribe-col">
              <EmailSubscribeForm />
              <div className="footer-menu-terms">
                <a href="#" className="footer-link link-terms">
                  Terms &amp; Conditions
                </a>
                <a href="#" className="footer-link link-terms">
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
              <a href="#" className="footer-social-link w-inline-block">
                <Image
                  src={require("../images/icon-linkedin.svg")}
                  height="50"
                  alt=""
                  className="footer-social-image"
                />
              </a>
              <a href="#" className="footer-social-link w-inline-block">
                <Image
                  src={require("../images/icon-facebook.svg")}
                  loading="lazy"
                  width="50"
                  height="50"
                  alt=""
                  className="footer-social-image"
                />
              </a>
              <a href="#" className="footer-social-link w-inline-block">
                <Image
                  src={require("../images/icon-youtube.svg")}
                  width="50"
                  height="50"
                  alt=""
                  className="footer-social-image"
                />
              </a>
            </div>
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
