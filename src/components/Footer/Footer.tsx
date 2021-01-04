import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Let's work together...</h2>
      </div>
      <div className="contact-links">
        <a
          id="profile-link-facebook"
          href="https://www.facebook.com/nakrytvp"
          className="btn contact-details"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          id="profile-link"
          href="https://github.com/nakryt"
          className="btn contact-details"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          id="profile-mail"
          href="mailto:pestov.v@yahoo.com"
          className="btn contact-details"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send a mail
        </a>
        <a
          id="profile-phone"
          href="tel:+38-097-00-97-343"
          className="btn contact-details"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call me
        </a>
      </div>
    </section>
  );
};

export default Footer;
