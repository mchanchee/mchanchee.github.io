import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="contact" className="jumbotron jumbotron-fluid m-0">
      <div className="container mb-4">
        <h1 className="display-3 contact-title">Contact me</h1>
        <div className="social-networks">
          <a
            className="social-network-icon fab fa-linkedin fa-3x"
            href="https://www.linkedin.com/in/matthieu-chan-chee-883624138/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="social-network-icon fab fa-github fa-3x"
            href="https://github.com/mchanchee"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="social-network-icon fab fa-instagram fa-3x"
            href="https://www.instagram.com/mattchan21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="social-network-icon fas fa-envelope fa-3x"
            href="mailto:matthieuchanchee@gmail.com"
          >
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
