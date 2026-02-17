export default function NavBar() {
  return (
    <div
      className="navbar w-nav"
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      data-w-id="d3dbbbfd-783f-ecd5-e9f9-8c081fa475d5"
      id="Navbar"
      role="banner"
    >
      <div className="navigation-container">
        <div className="navigation-left">
          <a
            aria-current="page"
            className="brand w-nav-brand w--current"
            href="mailto:varunpareek2015@gmail.com"
          >
            <div
              className="navigation-icon-wrap"
              data-w-id="d3dbbbfd-783f-ecd5-e9f9-8c081fa475d9"
            >
              {/* <span className="material-symbols-outlined"></span> */}
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
                src="https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0a331c65d50_Arrow Icon (1).svg"
              /> */}
            </div>
            <div>varunpareek2015@gmail.com</div>
          </a>
        </div>
        <div className="navigation-right">
          <nav className="nav-menu w-nav-menu" role="navigation">
            <a className="nav-link w-nav-link" href="index.html#About">
              About
            </a>
            {/* <a
              className="nav-link w-nav-link"
              href="./files/Rahul_Pareek_Resume_j.pdf"
            >
              Resume
            </a> */}
            <a
              className="nav-link w-nav-link"
              href="https://www.linkedin.com/in/varun-pareek-5190abb3/"
            >
              Contact
            </a>
          </nav>
          <div className="menu-button w-nav-button">
            <div className="icon-base w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
