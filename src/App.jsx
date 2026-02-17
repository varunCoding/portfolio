import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />

      <div className="resume-section" id="About">
        <div className="container-large">
          <div className="title-left">
            <h1>Resume</h1>
            <img
              alt=""
              className="accent"
              loading="lazy"
              src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a02fd2c65d66_Resume%20Line.svg"
            />
          </div>
          <div className="w-layout-flex resume-grid">
            <div
              className="grid-column"
              id="w-node-_65b7e2c5-5b97-3dd3-5740-fe1e43bbf7aa-09c65d1b"
            >
              <div className="title-wrap-large">
                <h3>Work Experience</h3>
                <img
                  alt=""
                  className="accent"
                  loading="lazy"
                  src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a01478c65d67_Experience%20Line.svg"
                />
              </div>
              <a
                className="item-wrap w-inline-block"
                data-w-id="139987ab-d35c-2913-da02-03664707a08b"
                href="/#"
              >
                <div className="resume-title">
                  <h4 className="resume-heading">Mphasis</h4>
                  <img
                    alt=""
                    className="arrow-right"
                    loading="lazy"
                    src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0a331c65d50_Arrow%20Icon%20(1).svg"
                  />
                </div>
                <div className="resume-type">Sr. Software Developer</div>
                <p>Jun 2023 - Present</p>
              </a>
              <a className="item-wrap w-inline-block" href="/#">
                <div className="resume-title">
                  <h4 className="resume-heading">Dotsquares </h4>
                  <img
                    alt=""
                    className="arrow-right"
                    loading="lazy"
                    src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0a331c65d50_Arrow%20Icon%20(1).svg"
                  />
                </div>
                <div className="resume-type">Sr. Software Developer</div>
                <p>Jun 2019 - Jun 2023</p>
              </a>
              <a className="item-wrap w-inline-block" href="/#">
                <div className="resume-title">
                  <h4 className="resume-heading">BR Softech</h4>
                  <img
                    alt=""
                    className="arrow-right"
                    loading="lazy"
                    src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0a331c65d50_Arrow%20Icon%20(1).svg"
                  />
                </div>
                <div className="resume-type">Software Developer</div>
                <p>Aug 2018 - Jun 2019</p>
              </a>
            </div>
            <div
              className="grid-column"
              id="w-node-ef8a5fc1-a302-4842-47e7-0ddf16846b39-09c65d1b"
            >
              <div className="title-wrap-large">
                <h3>Education</h3>
                <img
                  alt=""
                  className="accent"
                  loading="lazy"
                  src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a02bfdc65d65_Education%20Line.svg"
                />
              </div>
              <a className="item-wrap w-inline-block" href="/#">
                <div className="resume-title">
                  <h4 className="resume-heading">
                    Rajasthan Technical University
                  </h4>
                  <img
                    alt=""
                    className="arrow-right"
                    loading="lazy"
                    src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0a331c65d50_Arrow%20Icon%20(1).svg"
                  />
                </div>
                <div className="resume-type">
                  MCA • Computer Science &amp; Technology
                </div>
                <p>2015 – 2018</p>
              </a>
            </div>

            <div
              className="grid-column"
              id="w-node-e550a814-10d8-7168-7aa3-d0a603429afd-09c65d1b"
            >
              <div className="title-wrap-large">
                <h3>Skills</h3>
                <img
                  alt=""
                  className="accent"
                  loading="lazy"
                  src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a09724c65d6b_Tools%20Line.svg"
                />
              </div>
              <div className="w-layout-grid resume-grid-inner">
                <div>
                  <h4>Mobile Development</h4>
                  <p className="paragraph">React Native</p>
                </div>
                <div>
                  <h4>Frontend Development</h4>
                  <p className="paragraph">HTML/CSS</p>
                  <p className="paragraph">JavaScript/TypeScript</p>
                  <p className="paragraph">React/Next</p>
                  <p className="paragraph">
                    Unit Testing Frameworks (Jest/Mocha)
                  </p>
                </div>
                <div>
                  <h4>DevOps</h4>
                  <p className="paragraph">Version Control System (Git)</p>
                  <p className="paragraph">
                    CI/CD Pipelines (Jenkins/GitHub Actions)
                  </p>
                  <p className="paragraph">Kubernetes</p>
                </div>
              </div>

              <div
                className="cta-wrapper"
                data-w-id="c1070710-9d51-b3bb-df4b-faaefa1bc9df"
                id="w-node-c1070710-9d51-b3bb-df4b-faaefa1bc9df-09c65d1b"
              >
                <div className="cta-text-wrapper" style={{ opacity: 0 }}>
                  <img
                    alt=""
                    className="avatar-special"
                    loading="lazy"
                    src="assets/images/5f99409a4f44a08b35c65d8e_Contact%20Avatar.png"
                  />
                  <div>
                    <div className="cursive-title">Catcha!</div>
                    <h1 className="cta-title">
                      Got an idea?
                      <br />
                      <a
                        className="highlight-span"
                        href="https://www.linkedin.com/in/varun-pareek-5190abb3/"
                      >
                        Let’s Connect
                      </a>
                    </h1>
                  </div>
                </div>
                <div
                  className="cta-circle"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.3, 0.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.3, 0.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0.3, 0.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.3, 0.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                ></div>
                <img
                  alt=""
                  className="cta-circle-large"
                  loading="lazy"
                  src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a055b5c65da2_Large%20Circle%20CTA.svg"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.2, 0.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.2, 0.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0.2, 0.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.2, 0.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="container">
              <div
                className="cta-block"
                data-w-id="c9d26477-efa7-ceff-de63-7d2e48d1e807"
              >
                <h4>Open to frontend and mobile Openings</h4>
                <a
                  className="cta-link-large w-inline-block"
                  data-w-id="c9d26477-efa7-ceff-de63-7d2e48d1e80a"
                  href="https://www.linkedin.com/in/varun-pareek-5190abb3/"
                >
                  <div className="arrow-wrap">
                    <img
                      alt=""
                      className="arrow-yellow"
                      loading="lazy"
                      src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a035a0c65d63_Arrow%20Champagne.svg"
                    />
                    <img
                      alt=""
                      className="arrow-blue"
                      loading="lazy"
                      src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0b4cec65da6_Arrow%20Up%20Blue.svg"
                    />
                  </div>
                </a>
              </div>
            </div>
            <img
              alt=""
              className="circle-asset"
              data-w-id="c9d26477-efa7-ceff-de63-7d2e48d1e80e"
              loading="lazy"
              src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a085a0c65d68_Circle%20Champagne.svg"
            />
            <img
              alt=""
              className="circle-asset-left"
              data-w-id="c9d26477-efa7-ceff-de63-7d2e48d1e80f"
              loading="lazy"
              src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a000e7c65d73_Circle%20Champagne%20(Left).svg"
            />
          </div>
          <div className="footer-section">
            <div className="container">
              <div className="footer-wrap">
                <div className="footer-link-wrap">
                  <div>
                    <div className="w-layout-grid social-grid">
                      <a
                        className="social-link w-inline-block"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a00ed2c65d78_Facebook%20Line.svg"
                        />
                      </a>
                      <a
                        className="social-link w-inline-block"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a05b98c65d79_Instagram%20Line.svg"
                        />
                      </a>
                      <a
                        className="social-link w-inline-block"
                        href="http://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a04766c65d77_Twitter%20Line%20(1).svg"
                        />
                      </a>
                      <a
                        className="social-link w-inline-block"
                        href="https://www.linkedin.com/in/varun-pareek-5190abb3/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0082ec65d76_Linkedin%20Line.svg"
                        />
                      </a>
                    </div>
                  </div>
                  <a
                    aria-current="page"
                    className="footer-brand w-nav-brand w--current"
                    data-w-id="7ad12778-680d-fb1a-cf4b-23af6b9693c9"
                    href="mailto:rahulpareek9250@gmail.com"
                  >
                    <div
                      className="navigation-icon-wrap"
                      data-w-id="7ad12778-680d-fb1a-cf4b-23af6b9693ca"
                    >
                      <img
                        alt=""
                        className="navigation-mail"
                        loading="lazy"
                        src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a01c85c65d53_Mail%20Icon.svg"
                      />
                      {/* <img
                        alt=""
                        className="navigation-arrow"
                        loading="lazy"
                        src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0a331c65d50_Arrow%20Icon%20(1).svg"
                      /> */}
                    </div>
                    <div>varunpareek2015@gmail.com</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
