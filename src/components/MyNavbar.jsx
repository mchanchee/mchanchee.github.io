import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

function MyNavbar() {
  return (
    <Navbar
      style={{ backgroundColor: "black" }}
      fixed="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand>
        <Link
          className="lead"
          to="index"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a href="#index" style={{ fontSize: "1.5rem", textDecoration: "none", color: "white" }}>
            {"< "}Matthieu{" />"}
          </a>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link
            className="lead section-link"
            activeClass="yeet"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Nav.Link className="lead" eventKey={1}>
              About
            </Nav.Link>
          </Link>

          <Link
            className="lead section-link"
            activeClass="yeet"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Nav.Link className="lead" eventKey={2}>
              Experience
            </Nav.Link>
          </Link>

          <Link
            className="lead section-link"
            activeClass="yeet"
            to="accolades"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Nav.Link className="lead" eventKey={3}>
              Accolades
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  
    /* <nav class="padding-sides fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#title-section">
      Matthieu
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link
            className="lead section-link"
            activeClass="yeet"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#about" class="nav-link">
              About
            </a>
          </Link>
        </li>
        <li class="nav-item">
          <a href="#experience" class="nav-link">
            Experience
          </a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav> */
  
  );
}

export default MyNavbar;