import React from "react";
import Typist from "react-typist";

import "./Header.css";
import matthieu from "../images/matthieu.jpg";
import MyNavbar from "./MyNavbar";

function Header() {
  return (
    <div>
      {/* Navbar */}
      <MyNavbar />

      {/* Cover */}
      <header id="index" className="App-header">
        <div className="container">
          <div className="row">
            {/* Picture */}
            <div className="col-md-5 align-self-center">
              <img
                className="rounded-circle my-picture"
                src={matthieu}
                alt="mypicture"
              />
            </div>

            {/* Headline */}
            <div className="col-md-7 pt-2 align-self-center">
              <div>
                <h1 className="display-1 my-name">Matthieu Chan Chee</h1>
                <Typist
                  avgTypingDelay={120}
                  cursor={{
                    show: true,
                    blink: true,
                    element: "",
                    hideWhenDone: false,
                    hideWhenDoneDelay: 1000,
                  }}
                >
                  ML Engineer | CompSci @ UofT
                </Typist>
              </div>

              {/* Social network links */}
              <div className="social-networks">
                <a
                  className="social-network-icon fab fa-linkedin fa-2x"
                  href="https://www.linkedin.com/in/matthieu-chan-chee-883624138/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
                <a
                  className="social-network-icon fab fa-github fa-2x"
                  href="https://github.com/mchanchee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
                <a
                  className="social-network-icon fab fa-instagram fa-2x"
                  href="https://www.instagram.com/mattchan21/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
                <a
                  className="social-network-icon fas fa-envelope fa-2x"
                  href="mailto:matthieuchanchee@gmail.com"
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Particles will come on top of the previous component */}
      
    </div>
  );
}

export default Header;
