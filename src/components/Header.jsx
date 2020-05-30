import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import Particles from "react-particles-js";
import Typist from "react-typist";
import "./Header.css";
import matthieu from "../images/matthieu.jpg";

function Header() {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Matthieu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About
            </Nav.Link>
            <Nav.Link href="#experience">Experience
            </Nav.Link>
            <Nav.Link href="#accolades">Accolades
            </Nav.Link>
            <Nav.Link href="#contact">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}

      {/* Cover */}
      <header className="App-header">
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
      <Particles
        className="particles-position"
        params={{
          particles: {
            number: {
              value: Math.floor(
                Math.max(window.innerHeight, window.innerWidth) / 30
              ), // Around 50 on desktop,
            },
            size: {
              value: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Header;
