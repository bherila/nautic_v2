import React from "react";
import Image from "next/image";

const prefix = "https://www.nearshorenetworks.com/";

function route(str: string): string {
  return prefix + str;
}

function SearchBox({}) {
  return null;
  // return (
  //     <form action="/search" className="search w-form">
  //       <input
  //           type="search"
  //           className="search-input w-input"
  //           maxLength={256}
  //           name="query"
  //           placeholder="Search…"
  //           id="search"
  //           required
  //       />
  //       <input
  //           type="submit"
  //           value=""
  //           className="btn-btn-search w-button"
  //       />
  //     </form>
  // )
}

export default function Header() {
  return (
    <nav className="navbar-3">
      <div className="navbar__wrapper">
        <div className="section-top-menu wf-section">
          <div className="navigation-top-menu-container-3 w-container">
            <div className="navigation-top-menu">
              <a href={route("/resources")} className="top-menu-link">
                Resources
              </a>
              <a href={route("/careers")} className="top-menu-link">
                Careers
              </a>
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="navbar__container">
          <div className="navbar__mobile-overlay"></div>
          <a href={route("/")} className="brand w-nav-brand">
            <Image
              src={require("../images/logo.png")}
              alt=""
              className="image-2"
            />
          </a>
          <div className="navbar__navmenu-mobile">
            <div
              data-w-id="352a9767-61f6-16d3-380c-b84ac602e463"
              className="navmenu__button"
            >
              <div
                data-is-ix2-target="1"
                className="navmenu__button-icon"
                data-w-id="352a9767-61f6-16d3-380c-b84ac602e464"
                data-animation-type="lottie"
                data-src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f46317b9b8313d25322731_webflow-button-icon-animation.json"
                data-loop="0"
                data-direction="1"
                data-autoplay="0"
                data-renderer="svg"
                data-default-duration="1.5"
                data-duration="0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_2">
                      <rect width="24" height="24" x="0" y="0"></rect>
                    </clipPath>
                    <clipPath id="__lottie_element_16">
                      <path d="M0,0 L24,0 L24,24 L0,24z"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_2)">
                    <g
                      clipPath="url(#__lottie_element_16)"
                      transform="matrix(1,0,0,1,0,0)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        transform="matrix(1,0,0,1,12,22)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g
                          opacity="1"
                          transform="matrix(1.3328100442886353,0,0,0.9994699954986572,0,0)"
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity="1"
                            d=" M-6,-4 C-6,-4 6,-4 6,-4"
                          ></path>
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity="0"
                            strokeMiterlimit="4"
                            stroke="rgb(0,0,0)"
                            strokeOpacity="1"
                            strokeWidth="2"
                            d=" M-6,-4 C-6,-4 6,-4 6,-4"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,12,16)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g
                          opacity="1"
                          transform="matrix(1.3328100442886353,0,0,0.9994699954986572,0,0)"
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity="1"
                            d=" M-6,-4 C-6,-4 6,-4 6,-4"
                          ></path>
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity="0"
                            strokeMiterlimit="4"
                            stroke="rgb(0,0,0)"
                            strokeOpacity="1"
                            strokeWidth="2"
                            d=" M-6,-4 C-6,-4 6,-4 6,-4"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,12,9.998000144958496)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g
                          opacity="1"
                          transform="matrix(1.3328100442886353,0,0,0.9994699954986572,0,0)"
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity="1"
                            d=" M-6,-4 C-6,-4 6,-4 6,-4"
                          ></path>
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity="0"
                            strokeMiterlimit="4"
                            stroke="rgb(0,0,0)"
                            strokeOpacity="1"
                            strokeWidth="2"
                            d=" M-6,-4 C-6,-4 6,-4 6,-4"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="navbar__navmenu">
            <div className="navmenu__flex-container">
              <ul role="list" className="navmenu__link-list w-list-unstyled">
                <li className="link-list__list-item cc-first">
                  <div
                    data-hover="false"
                    data-delay="0"
                    data-w-id="352a9767-61f6-16d3-380c-b84ac602e469"
                    className="link-list__dropdown-wrapper w-dropdown"
                  >
                    <div
                      className="link-list__dropdown-toggle w-dropdown-toggle"
                      id="w-dropdown-toggle-0"
                      aria-controls="w-dropdown-list-0"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div>About Us</div>
                      <div className="link-list__dropdown-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <g className="nc-icon-wrapper" fill="currentColor">
                            <path
                              d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <nav
                      className="navmenu__dropdown w-dropdown-list"
                      id="w-dropdown-list-0"
                      aria-labelledby="w-dropdown-toggle-0"
                    >
                      <div className="navmenu__dropdown-grid">
                        <div
                          id="w-node-_352a9767-61f6-16d3-380c-b84ac602e470-c602e44f"
                          className="navmenu__dropdown-container cc-mobile"
                        >
                          <div className="navmenu__dropdown-left">
                            <ul role="list" className="navmenu__dropdown-list">
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/about-us")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dcea0370c5ca480d03_about-us-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      About Us
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      We help our customers stay connected and
                                      safe throughout their maritime missions.
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/leadership")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc0b642dc57bfde87c_leadership-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Leadership
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      We have in-house some of the most
                                      innovative professionals in the industry.
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="navmenu__dropdown-block">
                            <div className="w-layout-grid navmenu__dropdown-right">
                              <a
                                id="w-node-_352a9767-61f6-16d3-380c-b84ac602e485-c602e44f"
                                href={route("#")}
                                className="navmenu__dropdown-banner-link w-inline-block"
                                tabIndex={0}
                              >
                                <img
                                  src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f46317b9b831910932272c_NavBanner.jpg"
                                  loading="eager"
                                  srcSet="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f46317b9b831910932272c_NavBanner-p-800.jpeg 800w, https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f46317b9b831910932272c_NavBanner-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f46317b9b831910932272c_NavBanner.jpg 1200w"
                                  sizes="100vw"
                                  alt=""
                                  className="navmenu__banner-image"
                                />
                                <div className="sr-only">Webflow in 2021</div>
                              </a>
                              <ul
                                id="w-node-_352a9767-61f6-16d3-380c-b84ac602e489-c602e44f"
                                role="list"
                                className="navmenu__dropdown-list"
                              >
                                <li className="navmenu__dropdown-section cc-last">
                                  <div className="navmenu__dropdown-section-heading">
                                    ready to get started?
                                  </div>
                                  <ul
                                    role="list"
                                    className="navmenu__col-1-list"
                                  >
                                    <li className="navmenu__dropdown-section-list-item">
                                      <a
                                        href={route("#")}
                                        className="navmenu__section-link-row cc-first w-inline-block"
                                        tabIndex={0}
                                      >
                                        <div className="navmenu__dropdown-section-link-heading">
                                          Find a Template
                                        </div>
                                      </a>
                                    </li>
                                    <li className="navmenu__dropdown-section-list-item">
                                      <a
                                        href={route("#")}
                                        className="navmenu__section-link-row w-inline-block"
                                        tabIndex={0}
                                      >
                                        <div className="navmenu__dropdown-section-link-heading">
                                          Get inspired
                                        </div>
                                      </a>
                                    </li>
                                    <li className="navmenu__dropdown-section-list-item">
                                      <a
                                        href={route("#")}
                                        className="navmenu__section-link-row w-inline-block"
                                        tabIndex={0}
                                      >
                                        <div className="navmenu__dropdown-section-link-heading">
                                          Customer stories
                                        </div>
                                      </a>
                                    </li>
                                    <li className="navmenu__dropdown-section-list-item">
                                      <a
                                        href={route("#")}
                                        className="navmenu__section-link-row w-inline-block"
                                        tabIndex={0}
                                      >
                                        <div className="navmenu__dropdown-section-link-heading">
                                          Contact Support
                                        </div>
                                      </a>
                                    </li>
                                    <li className="navmenu__dropdown-section-list-item">
                                      <a
                                        href={route("#")}
                                        className="navmenu__section-link-row cc-last w-inline-block"
                                        tabIndex={0}
                                      >
                                        <div className="navmenu__dropdown-section-link-heading">
                                          Accessibility at Webflow
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="link-list__list-item cc-first">
                  <div
                    data-hover="false"
                    data-delay="0"
                    data-w-id="352a9767-61f6-16d3-380c-b84ac602e4a4"
                    className="link-list__dropdown-wrapper w-dropdown"
                  >
                    <div
                      className="link-list__dropdown-toggle w-dropdown-toggle"
                      id="w-dropdown-toggle-1"
                      aria-controls="w-dropdown-list-1"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div>Industries</div>
                      <div className="link-list__dropdown-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <g className="nc-icon-wrapper" fill="currentColor">
                            <path
                              d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <nav
                      className="navmenu__dropdown w-dropdown-list"
                      id="w-dropdown-list-1"
                      aria-labelledby="w-dropdown-toggle-1"
                    >
                      <div className="navmenu__dropdown-grid">
                        <div
                          id="w-node-_352a9767-61f6-16d3-380c-b84ac602e4ab-c602e44f"
                          className="navmenu__dropdown-container cc-mobile"
                        >
                          <div className="navmenu__dropdown-left">
                            <ul role="list" className="navmenu__dropdown-list">
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/industries-aquaculture")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc7320163295177721_aquaculture-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Aquaculture
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Offshore 5G Connectivity, Adaptive Video
                                      for monitoring, and more...
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/industries-energy")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc0245da45c95ebfc3_energy-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Energy
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      On shore and Off shore connectivity, IT
                                      solutions for Energy and Oil Industry
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/industries-cruise-and-ferries")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc0b642d4856fde87a_cruise-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Cruise &amp; Ferries
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Connectivity solutions for everyone on
                                      board, guests, crew, and vessel
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/industries-crew-welfare")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc0b642d4856fde87a_cruise-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Crew Welfare
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      A happy crew is a better crew
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="navmenu__dropdown-left">
                            <ul role="list" className="navmenu__dropdown-list">
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/industries-leisure-vessels")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dcff21ca005f5403ee_leisure-vessel-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Leisure Vessel
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Innovative and customer-friendly way to
                                      subscribe to offshore satellite
                                      connectivity
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/industries-shipping")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dd0a4192839f15f449_shipping-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Shipping
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Always-on connectivity so you can have
                                      smarter navigation
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/industries-fishing-vessels")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc844ebdb89a6c866c_fishing-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Fishing
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Maritime communications solutions
                                      optimized for your fishing business
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="link-list__list-item cc-first">
                  <div
                    data-hover="false"
                    data-delay="0"
                    data-w-id="352a9767-61f6-16d3-380c-b84ac602e4e2"
                    className="link-list__dropdown-wrapper w-dropdown"
                  >
                    <div
                      className="link-list__dropdown-toggle w-dropdown-toggle"
                      id="w-dropdown-toggle-2"
                      aria-controls="w-dropdown-list-2"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div>Solutions</div>
                      <div className="link-list__dropdown-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <g className="nc-icon-wrapper" fill="currentColor">
                            <path
                              d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <nav
                      className="navmenu__dropdown w-dropdown-list"
                      id="w-dropdown-list-2"
                      aria-labelledby="w-dropdown-toggle-2"
                    >
                      <div className="navmenu__dropdown-grid">
                        <div
                          id="w-node-_352a9767-61f6-16d3-380c-b84ac602e4e9-c602e44f"
                          className="navmenu__dropdown-container cc-mobile"
                        >
                          <div className="navmenu__dropdown-left">
                            <ul role="list" className="navmenu__dropdown-list">
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-nearshore-5g")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dcea0370c2d5480cfc_energy-production-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      NEARSHORE 5G
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Offshore and near shore 5G connectivity
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-adaptive-video")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dcea03702c88480d07_nearshore-adaptive-video-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      NEARSHORE Adaptive Video
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Real-time definition video over low
                                      bandwidth
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-athena")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dd8b15613bd6972e0e_nearshore-athena-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      NEARSHORE Athena
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Award-winning IT solution
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route(
                                    "/solutions-asset-tracking-and-monitoring"
                                  )}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478da915f950b4c8764ce_asset-tracking-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Asset Tracking and Monitoring
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Always-on connectivity so you can monitor
                                      your asset
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-day-rate-term")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc5f0c0f79e5ae688c_day-rate-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Day Rate + Short Term Solution
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      VSAT, Broadband, Offshore wifi, so you
                                      stay connected as needed
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="navmenu__dropdown-left">
                            <ul role="list" className="navmenu__dropdown-list">
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route(
                                    "/solutions-energy-production-and-pipeline"
                                  )}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc0245da7c8d5ebfc4_nearshore-5g-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Energy Production and Pipeline
                                      Transmission Data
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Communications platform connection
                                      solution that is smart, secure, and
                                      scalable
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-good-speed")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc0b642d404ffde87b_goodspeed-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Goodspeed wifi Hotspots
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Portable hotspots, so you stay connected
                                      everywhere
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-marine-pi-tv")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dcf4c353bfed570fad_marine-ip-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Marine IP Television &amp; Video On-Demand
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      A myriad of applications for
                                      entertainment, training, and more
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-weather-forecasting")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dd8b15615d20972e0d_microclimate-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      MicroClimate Weather Forecasting
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Data from hundreds of millions of global
                                      weather points
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-offshore-internet")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc0245da45c95ebfc3_energy-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Offshore Internet
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Always-on connectivity that switches
                                      seamlessly between VSAT and Cellular
                                      technologies
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="navmenu__dropdown-left">
                            <ul role="list" className="navmenu__dropdown-list">
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route(
                                    "/solutions-out-of-band-management"
                                  )}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478ddf4c3535460570fb0_out-of-band-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Out-of-Band Management
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Always-on backdoor access to your
                                      communications systems
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route(
                                    "/solutions-surface-buoy-monitoring1"
                                  )}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dd0b642db4dcfde896_surface-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Surface Buoy Monitoring
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Monitoring for smarter navigation
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route(
                                    "/solutions-vessel-and-asset-monitoring"
                                  )}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478ddea0370289d480d08_vessel-monitoring-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Vessel Monitoring and Security
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Remote management and security service
                                      connectivity
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={route("/solutions-voice-over-ip")}
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dd8aae02ee208d18cd_voip-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      VoIP &amp; Cellular Voice Solutions
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Always-on connectivity no matter where on
                                      the globe you are
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="link-list__list-item cc-first">
                  <div
                    data-hover="false"
                    data-delay="0"
                    data-w-id="6319ce9e-951c-a1e9-fc64-012404acfea3"
                    className="link-list__dropdown-wrapper w-dropdown"
                  >
                    <div
                      className="link-list__dropdown-toggle w-dropdown-toggle"
                      id="w-dropdown-toggle-3"
                      aria-controls="w-dropdown-list-3"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div>Activate Services</div>
                      <div className="link-list__dropdown-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <g className="nc-icon-wrapper" fill="currentColor">
                            <path
                              d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <nav
                      className="navmenu__dropdown w-dropdown-list"
                      id="w-dropdown-list-3"
                      aria-labelledby="w-dropdown-toggle-3"
                    >
                      <div className="navmenu__dropdown-grid">
                        <div
                          id="w-node-_6319ce9e-951c-a1e9-fc64-012404acfeaa-c602e44f"
                          className="navmenu__dropdown-container cc-mobile"
                        >
                          <div className="navmenu__dropdown-left">
                            <ul role="list" className="navmenu__dropdown-list">
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={'https://www.nearshorenetworks.com/activate-services/adaptive-services-satellite'}
                                  aria-current="page"
                                  className="navmenu_dropdown-section-link w-inline-block w--current"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dd59823ec4c4894d25_satellite-activation-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Satellite Activation
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Robust connectivity for an excellent
                                      onboard experience
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={
                                    "/activate/cellular"
                                  }
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc29171bc71f674365_cellular-activation-menu-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Cellular Activation
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Get super-fast data around the globe
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section">
                                <a
                                  href={
                                    "/activate/nautic-alert"
                                  }
                                  className="navmenu_dropdown-section-link w-inline-block"
                                  tabIndex={0}
                                >
                                  <img
                                    src="https://uploads-ssl.webflow.com/592988ef5514b75886b7269f/62f478dc5f0c0f7eb2ae68ab_nautic-alert-activation-icon.svg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    alt=""
                                    className="navmenu_dropdown-section-icon"
                                  />
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Nautic Alert Activation
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Advanced boat and yacht security, <br />
                                      GPS at affordable rates
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="link-list__list-item">
                  <a
                    href={route("/news")}
                    className="link-list__link w-inline-block"
                  >
                    <div>News</div>
                  </a>
                </li>
                <li className="link-list__list-item link-list__list-item-resources">
                  <a href={route("/resources")} className="link-list__link">
                    Resources
                  </a>
                </li>
                <li className="link-list__list-item link-list__list-item-careers">
                  <a href={route("/careers")} className="link-list__link">
                    Careers
                  </a>
                </li>
                <li className="link-list__list-item link-list__list-item-contact">
                  <a
                    href={route("/contact-us")}
                    className="link-list__link link-list__link-contact"
                  >
                    Contact Us
                  </a>
                  <a
                    href={route("/contact-us")}
                    className="btn btn-menu-contact link-list__list-btn w-button"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
