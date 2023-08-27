interface NavProp {
  slideNum: number;
}

function Navbar({ slideNum }: NavProp) {
  return (
    <nav className={`navbar ${slideNum === 0 ? "first-slide" : ""}`}>
      <div className="navbar__logo">
        <a href="/">
          <h1>
            <span className="logo-color">&#123; &#125; </span>Aldas.dev
          </h1>
        </a>
      </div>
      <div className="navbar__links">
        <div className="navbar__links--buttons">
          <a href="/">About Me</a>
          <a href="/">Projects</a>
          <a href="/">Contacts</a>
          <a href="/">CV</a>
        </div>
      </div>
      <div className="navbar__footer">
        <a href="/">Theme</a>
      </div>
    </nav>
  );
}

export default Navbar;
