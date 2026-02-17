export default function Header() {
  return (
    <div className="header">
      <div className="header-title-wrap">
        <div
          className="avatar-circle"
          data-w-id="c0ace092-5304-6e3e-5c55-a06e2aaff4e4"
          style={{
            WebkitTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
        >
          {/* http://localhost:3000/assets/images/profile.png */}
          <img
            alt="Varun Pareek"
            className="avatar"
            loading="lazy"
            sizes="160px"
            src="assets/images/profile.png"
          />
        </div>
        <div
          className="title-wrapper"
          data-w-id="7fa333be-aad9-679c-1477-d9f98a58db93"
          style={{
            WebkitTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
        >
          <h3 className="title title-flex">
            <span className="title-flex--item">Hi, I’m Varun</span>
            <span className="title-flex--item">
              Pareek
              <img
                alt=""
                className="emoji-icon"
                loading="lazy"
                src="assets/images/5f99409a4f44a06588c65d57_Hand%20Emoji.png"
              />
            </span>
          </h3>
        </div>
        <h1
          className="hero-display"
          data-w-id="f8e28b59-9e5f-0990-ce20-32058bafa547"
          style={{
            WebkitTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
        >
          <span className="heading">Learn, Code, Repeat</span>
          <br />
          <span className="heading--sub">
            ( with lot of coffee{" "}
            <img
              className="coffee--mug"
              src="assets/images/coffee.png"
              alt="Coffee Mug"
            />
            )
          </span>
        </h1>
        <p
          className="paragraph-display"
          data-w-id="8e82238d-82ae-fb81-44ac-81a2648ba4bc"
          style={{
            WebkitTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
        >
          <strong>Software Developer</strong> with 4+ years of experience
          working in Software Development. Proficient in
          Javascript(Node.js,Express.js,React), Java(Springboot),
          Python(Django,Streamlit,Flask), PostgreSQL etc. Passionate about every
          aspect of software development
        </p>
        <a
          className="button w-button"
          data-w-id="a77ce566-82ce-3690-e9ea-6dbaca8e0288"
          href="https://www.linkedin.com/in/rahulpareekdev/"
          style={{
            WebkitTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
        >
          Connect With Me
        </a>
      </div>
    </div>
  );
}
