import Image from 'next/image'

const prefix = 'https://www.nearshorenetworks.com/'

function route(str: string): string {
  if (str.startsWith('http') || str.startsWith('/')) {
    return str
  }
  return (prefix + str).replace('.html', '')
}

export default function Header() {
  return (
    <nav className="navbar-3">
      <div className="navbar__wrapper">
        <div className="section-top-menu wf-section">
          <div className="navigation-top-menu-container w-container">
            <div className="navigation-top-menu-3">
              <a href={route('resources.html')} className="top-menu-link-2">
                Resources
              </a>
              <a href={route('careers.html')} className="top-menu-link-2">
                Careers
              </a>
              <form action="/search" className="search w-form">
                <input
                  type="search"
                  className="search-input w-input"
                  maxLength={256}
                  name="query"
                  placeholder="Search…"
                  id="search"
                  required
                />
                <input
                  type="submit"
                  value=""
                  className="btn-btn-search w-button"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="navbar__container-2">
          <div className="navbar__mobile-overlay-2"></div>
          <a
            href={route('https://www.nearshorenetworks.com')}
            className="brand w-nav-brand"
          >
            <img
              src="/images/logo.png"
              loading="lazy"
              alt=""
              className="image-2"
            />
            <div className="sr-only">Webflow Homepage</div>
          </a>
          <div className="navbar__navmenu-mobile-2">
            <div
              data-w-id="169c075e-bf16-4db1-aa2d-68f37ea9545e"
              className="navmenu__button-2"
            >
              <div
                data-is-ix2-target="1"
                className="navmenu__button-icon"
                data-w-id="169c075e-bf16-4db1-aa2d-68f37ea9545f"
                data-animation-type="lottie"
                data-src="https://uploads-ssl.webflow.com/6316b4306f7b0e56e4f0fefa/6316b4306f7b0e00fcf0ff49_webflow-button-icon-animation.json"
                data-loop="0"
                data-direction="1"
                data-autoplay="0"
                data-renderer="svg"
                data-default-duration="1.5"
                data-duration="1.5"
              ></div>
            </div>
          </div>
          <div className="navbar__navmenu-2">
            <div className="navmenu__flex-container-2">
              <ul role="list" className="navmenu__link-list-2 w-list-unstyled">
                <li className="link-list__list-item-2 cc-first">
                  <div
                    data-hover="false"
                    data-delay="0"
                    data-w-id="169c075e-bf16-4db1-aa2d-68f37ea95464"
                    className="link-list__dropdown-wrapper-2 w-dropdown"
                  >
                    <div className="link-list__dropdown-toggle-3 w-dropdown-toggle">
                      <div className="text-block-3">About Us</div>
                    </div>
                    <nav className="navmenu__dropdown-2 w-dropdown-list">
                      <div className="navmenu__dropdown-grid-3">
                        <div
                          id="w-node-_169c075e-bf16-4db1-aa2d-68f37ea9546a-7ea9544b"
                          className="navmenu__dropdown-container cc-mobile"
                        >
                          <div className="navmenu__dropdown-left-2">
                            <ul
                              role="list"
                              className="navmenu__dropdown-list-2"
                            >
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('about-us.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <img
                                    src="/images/about-us-menu-icon.svg"
                                    loading="lazy"
                                    width="40"
                                    height="40"
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('leadership.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <img
                                    src="/images/leadership-menu-icon.svg"
                                    loading="lazy"
                                    width="40"
                                    height="40"
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
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="link-list__list-item-2">
                  <div
                    data-hover="false"
                    data-delay="0"
                    data-w-id="169c075e-bf16-4db1-aa2d-68f37ea9549d"
                    className="link-list__dropdown-wrapper-2 w-dropdown"
                  >
                    <div className="link-list__dropdown-toggle-3 w-dropdown-toggle">
                      <div>Industries</div>
                    </div>
                    <nav className="navmenu__dropdown-2 w-dropdown-list">
                      <div className="navmenu__dropdown-grid-3">
                        <div
                          id="w-node-_169c075e-bf16-4db1-aa2d-68f37ea954a3-7ea9544b"
                          className="navmenu__dropdown-container cc-mobile"
                        >
                          <div className="navmenu__dropdown-left-2 mb-0">
                            <ul
                              role="list"
                              className="navmenu__dropdown-list-2 pl-0"
                            >
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('industries/energy.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <Image
                                      unoptimized
                                      src="/images/offshore-internet-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('industries/shipping.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <Image
                                      unoptimized
                                      src="/images/shipping-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'industries/cruise-and-ferries.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <Image
                                      unoptimized
                                      src="/images/cruise-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('industries/crew-welfare.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/icon-crew-walfare-2.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                          <div className="navmenu__dropdown-left-2">
                            <ul
                              role="list"
                              className="navmenu__dropdown-list-2 pl-0"
                            >
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'industries/leisure-vessels.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/leisure-vessel-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'industries/fishing-vessels.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/fishing-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('industries/aquaculture.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/aquaculture-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="link-list__list-item-2">
                  <div
                    data-hover="false"
                    data-delay="0"
                    data-w-id="169c075e-bf16-4db1-aa2d-68f37ea954e8"
                    className="link-list__dropdown-wrapper-2 w-dropdown"
                  >
                    <div className="link-list__dropdown-toggle-3 w-dropdown-toggle">
                      <div>Solutions</div>
                    </div>
                    <nav className="navmenu__dropdown-2 w-dropdown-list">
                      <div className="navmenu__dropdown-grid-3">
                        <div
                          id="w-node-_169c075e-bf16-4db1-aa2d-68f37ea954ee-7ea9544b"
                          className="navmenu__dropdown-container cc-mobile"
                        >
                          <div className="navmenu__dropdown-left-2">
                            <ul
                              role="list"
                              className="navmenu__dropdown-list-2"
                            >
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'solutions/solutions-nearshore-vsat.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/satellite-activation-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      NEARSHORE VSAT
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Customize integrated VSAT Solutions for
                                      your ships, passengers and crew
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('solutions/nearshore-5g.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/energy-production-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'solutions/offshore-internet.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/offshore-internet-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('solutions/wifi-hotspots.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/goodspeed-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      nearshore wifi Hotspots
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Portable hotspots, so you stay connected
                                      everywhere
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('solutions/voice-over-ip.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/voip-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                          <div className="navmenu__dropdown-left-2">
                            <ul
                              role="list"
                              className="navmenu__dropdown-list-2"
                            >
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'solutions/out-of-band-management.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/out-of-band-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('solutions/marine-ip-tv.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/marine-ip-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('solutions/day-rate-term.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <Image
                                      unoptimized
                                      src="/images/day-rate-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'solutions/vessel-and-asset-monitoring.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <Image
                                      unoptimized
                                      src="/images/vessel-monitoring-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('solutions/athena-security.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <Image
                                      unoptimized
                                      src="/images/nearshore-athena-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Athena security
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Award-winning IT solution
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="navmenu__dropdown-left-2">
                            <ul
                              role="list"
                              className="navmenu__dropdown-list-2"
                            >
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'solutions/energy-production-and-pipeline.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/nearshore-5g-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('solutions/adaptive-video.html')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/nearshore-adaptive-video-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'solutions/asset-tracking-and-monitoring.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/asset-tracking-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'solutions/weather-forecasting.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/microclimate-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'solutions/surface-buoy-monitoring.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/surface-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="link-list__list-item-2">
                  <div
                    data-hover="false"
                    data-delay="0"
                    data-w-id="169c075e-bf16-4db1-aa2d-68f37ea95574"
                    className="link-list__dropdown-wrapper-2 w-dropdown"
                  >
                    <div className="link-list__dropdown-toggle-3 w-dropdown-toggle">
                      <div>Activate Services</div>
                    </div>
                    <nav className="navmenu__dropdown-2 w-dropdown-list">
                      <div className="navmenu__dropdown-grid-3">
                        <div
                          id="w-node-_169c075e-bf16-4db1-aa2d-68f37ea9557a-7ea9544b"
                          className="navmenu__dropdown-container cc-mobile"
                        >
                          <div className="navmenu__dropdown-left-2">
                            <ul
                              role="list"
                              className="navmenu__dropdown-list-2"
                            >
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route(
                                    'activate-services/adaptive-services-satellite.html',
                                  )}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/satellite-activation-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('/activate/cellular')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/cellular-activation-menu-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
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
                              <li className="navmenu__dropdown-section-2">
                                <a
                                  href={route('/activate/maretron')}
                                  className="navmenu_dropdown-section-link-2 w-inline-block"
                                >
                                  <div className="navmenu_dropdown-section-icon-block">
                                    <img
                                      src="/images/nautic-alert-activation-icon.svg"
                                      loading="lazy"
                                      width="40"
                                      height="40"
                                      alt=""
                                      className="navmenu_dropdown-section-icon"
                                    />
                                  </div>
                                  <div className="navmenu_dropdown-section-content">
                                    <div className="navmenu__dropdown-section-heading">
                                      Maretron SMS200 Activation
                                    </div>
                                    <p className="navmenu_dropdown-section-description">
                                      Let us empower your voyage with
                                      Cutting-Edge Marine Technology
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
                <li className="link-list__list-item-3">
                  <a
                    href={route('news.html')}
                    className="link-list__link-2 w-inline-block"
                  >
                    <div>News</div>
                  </a>
                </li>
                <li className="link-list__list-item-3 link-list__list-item-resources">
                  <a
                    href={route('resources.html')}
                    className="link-list__link-2"
                  >
                    Resources
                  </a>
                </li>
                <li className="link-list__list-item-3 link-list__list-item-careers">
                  <a href={route('careers.html')} className="link-list__link-2">
                    Careers
                  </a>
                </li>
              </ul>
              <div className="navmenu__cta-wrapper-2">
                <a
                  href={route('contact-us.html')}
                  aria-current="page"
                  className="btn-2 btn-cta-mobile w-button w--current"
                >
                  Contact Us
                </a>
                <div className="div-block-11"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
