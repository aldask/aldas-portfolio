import { useState } from "react";

interface NavProp {
  slideNum: number;
}

function Navbar({ slideNum }: NavProp) {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      {/* Nav for mobile */}
      <nav className="navbar__mobile">
        <div className="navbar__mobile__logo">
          <span className="logo-color" onClick={handleMobileNav}>
            &#123; &#125;{" "}
          </span>
        </div>
        <ul className={`navbar__mobile__links ${mobileNav ? "active" : ""}`}>
          <li>
            <a href="/">About Me</a>
          </li>
        </ul>
      </nav>
      {/* Nav for first slide */}
      <nav
        className={`navbar__1slide ${
          slideNum === 0 ? "first-slide" : "other-slide"
        }`}
      >
        <div className="navbar__1slide__logo">
          <a href="/">
            <h1>
              <span className="logo-color">&#123; &#125; </span>Aldas.dev
            </h1>
          </a>
        </div>
        <div className="navbar__1slide__links">
          <div className="navbar__1slide__links--buttons">
            <a href="/">About Me</a>
            <a href="/">Projects</a>
            <a href="/">Contacts</a>
            <a href="/">CV</a>
          </div>
        </div>
        <div className="navbar__1slide__footer">
          <a href="/">Theme</a>
        </div>
      </nav>
      {/* Nav for other slides */}
      <nav className={`navbar__2slide ${slideNum >= 1 ? "two-slides" : ""}`}>
        <div className="navbar__2slide__logo">
          <a href="/">
            <h1>
              <span className="logo-color">&#123; &#125; </span>Aldas.dev
            </h1>
          </a>
        </div>
        <div className="navbar__2slide__links">
          <div className="navbar__2slide__links--buttons">
            <a href="/">About Me</a>
            <a href="/">Projects</a>
            <a href="/">Contacts</a>
            <a href="/">CV</a>
          </div>
        </div>
        <div className="navbar__2slide__footer">
          <a href="/">Theme</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
