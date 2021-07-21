import React from "react";

export default function Header() {
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
                <div className="drop-down-arrow w-icon-dropdown-toggle"></div>
                <div
                  data-ix="line-navigation-initial-app"
                  className="line-navigation"
                ></div>
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <div className="collection-list-wrapper-3 w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a href="#" className="link-block-15 w-inline-block">
                        <div className="text-block-50"></div>
                      </a>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
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
                <div className="drop-down-arrow w-icon-dropdown-toggle"></div>
                <div
                  data-ix="line-navigation-initial-app"
                  className="line-navigation"
                ></div>
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <div className="w-dyn-list">
                  <div role="list" className="collection-list-3 w-dyn-items">
                    <div role="listitem" className="dropdown-link w-dyn-item">
                      <a href="#" className="link-block-16 w-inline-block">
                        <div className="text-block-49"></div>
                      </a>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
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
                <div className="drop-down-arrow w-icon-dropdown-toggle"></div>
                <div
                  data-ix="line-navigation-initial-app"
                  className="line-navigation"
                ></div>
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
                <div className="drop-down-arrow w-icon-dropdown-toggle"></div>
                <div
                  data-ix="line-navigation-initial-app"
                  className="line-navigation"
                ></div>
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
            <div className="w-icon-nav-menu"></div>
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
