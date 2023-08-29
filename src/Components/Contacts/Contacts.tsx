function Contacts() {
  return (
    <section className="contacts">
      <div className="hero-container">
        <div className="contacts__content">
          <div className="contacts__content__title">
            <h1>Connect With Me!</h1>
            <h2>Let's Start a Conversation!</h2>
            <p>
              If you're looking for engaging discussions or professional
              inquiries, don't hesitate to get in touch via LinkedIn. And don't
              forget to explore my resume.
            </p>
          </div>
          <div className="contacts__content__buttons">
            <button className="linkedin">
              <a
                href="https://www.linkedin.com/in/aldas-k-2ab99b1b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </button>
            <button className="resume">
              <a href="/" target="_blank">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
