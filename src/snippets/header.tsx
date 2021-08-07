import React from "react";

export default function Header() {
  let lastTabIndex = 0;
  return (
    <div
      data-collapse="medium"
      data-animation="over-right"
      data-duration="400"
      role="banner"
      className="navigation-style-2 w-nav"
    >
      <div className="covid-special">
        <div className="w-container">
          <p className="covid-special-p">
            Read Our Latest Press Releases.{" "}
            <a
              href="https://www.nearshorenetworks.com/who-we-are/press-releases"
              className="covid-special-link"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
      <div className="w-container">
        <div className="container-22">
          <a
            href="https://www.nearshorenetworks.com/index.html"
            className="link-block-11 w-inline-block"
          >
            <img
              src="/img/nearshorenetworks-logo.png"
              width="170"
              id="header-logo"
              alt=""
            />
          </a>
          <nav role="navigation" className="nav-menu-2 w-nav-menu">
            <div
              data-hover="1"
              data-delay="0"
              data-ix="slide-in-line-navigation-on-hover"
              className="header-item w-dropdown"
            >
              <div className="header-dd w-dropdown-toggle">
                <div className="text-block-2">Industries</div>
                <div className="drop-down-arrow w-icon-dropdown-toggle" />
                <div
                  data-ix="line-navigation-initial-app"
                  className="line-navigation"
                />
              </div>
              <nav
                className="dropdown-list w-dropdown-list"
                id="w-dropdown-list-0"
                aria-labelledby="w-dropdown-toggle-0"
              >
                <div className="collection-list-wrapper-3 w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/industries/leisure-vessels"
                        className="link-block-15 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-50">Leisure Vessels</div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/industries/fishing-aquaculture"
                        className="link-block-15 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-50">
                          Fishing &amp; Aquaculture
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/industries/passenger-vessels"
                        className="link-block-15 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-50">Passenger Vessels</div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/industries/shipping"
                        className="link-block-15 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-50">Shipping</div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/industries/energy"
                        className="link-block-15 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-50">Energy</div>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div
              data-hover="1"
              data-delay="0"
              data-ix="slide-in-line-navigation-on-hover"
              className="header-item w-dropdown"
            >
              <div className="header-dd w-dropdown-toggle">
                <div className="text-block-2">Solutions</div>
                <div className="drop-down-arrow w-icon-dropdown-toggle" />
                <div
                  data-ix="line-navigation-initial-app"
                  className="line-navigation"
                />
              </div>
              <nav
                className="dropdown-list w-dropdown-list"
                id="w-dropdown-list-1"
                aria-labelledby="w-dropdown-toggle-1"
              >
                <div className="w-dyn-list">
                  <div role="list" className="collection-list-3 w-dyn-items">
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/aquaculture"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">Aquaculture</div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/asset-tracking-monitoring"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          Asset Tracking &amp; Monitoring
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/day-rate-short-term-solutions"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          Day Rate &amp; Short-Term Solutions
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/energy"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          Energy Production and Pipeline Transmission Data
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/goodspeed-wifi-hotspots"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          Goodspeed WiFi Hotspots
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/it-networking-security"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          IT, Networking &amp; Security
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/marine-ip-television-video-on-demand"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          Marine IP Television &amp; Video-On-Demand
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/microclimate-weather-forecasting"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          MicroClimate Weather Forecasting
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/offshore-internet"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">Offshore Internet</div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/out-of-band-management"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          Out-of-Band Management
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/surface-buoy-monitoring"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          Surface Buoy Monitoring
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/vessel-monitoring-and-security"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          Vessel Monitoring and Security
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a
                        href="https://www.nearshorenetworks.com/solutions/voip-cellular-voice-solutions"
                        className="link-block-16 w-inline-block"
                        tabIndex={lastTabIndex++}
                      >
                        <div className="text-block-49">
                          VoIP &amp; Cellular Voice Solutions
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div
              data-hover="1"
              data-delay="0"
              data-ix="slide-in-line-navigation-on-hover"
              className="header-item w-dropdown"
            >
              <div className="header-dd w-dropdown-toggle">
                <div className="text-block-2">Who We Are</div>
                <div className="drop-down-arrow w-icon-dropdown-toggle" />
                <div
                  data-ix="line-navigation-initial-app"
                  className="line-navigation"
                />
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <a
                  href="https://www.nearshorenetworks.com/who-we-are/our-guarantee"
                  className="dropdown-link w-dropdown-link"
                >
                  Our Guarantee
                </a>
                <a
                  href="https://www.nearshorenetworks.com/who-we-are/our-team"
                  className="dropdown-link w-dropdown-link"
                >
                  Our Team
                </a>
                <a
                  href="https://www.nearshorenetworks.com/who-we-are/network-partners"
                  className="dropdown-link w-dropdown-link"
                >
                  Our Network Partners
                </a>
                <a
                  href="https://www.nearshorenetworks.com/who-we-are/case-studies"
                  className="dropdown-link w-dropdown-link"
                >
                  Cases Studies
                </a>
                <a
                  href="https://www.nearshorenetworks.com/who-we-are/press-releases"
                  className="dropdown-link w-dropdown-link"
                >
                  Press Releases
                </a>
              </nav>
            </div>
            <div
              data-hover="1"
              data-delay="0"
              data-ix="slide-in-line-navigation-on-hover"
              className="header-item w-dropdown"
            >
              <div className="header-dd w-dropdown-toggle">
                <div className="text-block-2">Activate Services</div>
                <div className="drop-down-arrow w-icon-dropdown-toggle" />
                <div
                  data-ix="line-navigation-initial-app"
                  className="line-navigation"
                />
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <a
                  href="https://www.nearshorenetworks.com/menu/activate-services/satellite-plan-activation"
                  className="dropdown-link w-dropdown-link"
                >
                  Satellite
                </a>
                <a
                  href="https://www.nearshorenetworks.com/menu/activate-services/cellular-subscription-activation-v2"
                  aria-current="page"
                  className="dropdown-link w-dropdown-link w--current"
                >
                  Cellular
                </a>
                <a
                  href="https://www.nearshorenetworks.com/menu/activate-services/nautic-alerts-activation"
                  className="dropdown-link w-dropdown-link"
                >
                  Nautic Alert
                </a>
                <a
                  href="https://www.nearshorenetworks.com/menu/activate-services/ww-activation"
                  className="dropdown-link w-dropdown-link"
                >
                  Wave Wifi Cellular Plan{" "}
                </a>
              </nav>
            </div>
            <a
              href="https://www.nearshorenetworks.com/contact-us.html"
              className="button-10 w-button"
            >
              Talk to an Expert
            </a>
          </nav>
          <div className="menu-button-2 w-nav-button">
            <div className="w-icon-nav-menu" />
          </div>
        </div>
      </div>
      <div className="search-bar">
        <form
          action="https://www.nearshorenetworks.com/search"
          className="search w-clearfix w-form"
        >
          <input
            type="submit"
            value="Search"
            className="search-button w-button"
          />
          <input
            type="search"
            className="search-input w-input"
            maxLength={256}
            name="query"
            placeholder="Search…"
            id="search"
            required
          />
        </form>
      </div>
    </div>
  );
}
