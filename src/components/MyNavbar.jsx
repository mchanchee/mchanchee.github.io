import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

import "./MyNavbar.css";

function MyNavbar() {
  const offset = -50;
  return (
    <Navbar
      className="black-navbar"
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
          offset={0}
          duration={500}
        >
          <a href="#index" className="navbar-title">
            {"< "}Matthieu{" />"}
          </a>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link
            className="lead section-link"
            activeClass="my-active"
            to="about"
            spy={true}
            smooth={true}
            offset={offset}
            duration={500}
          >
            <Nav.Link className="lead navbar-option" eventKey={1}>
              About
            </Nav.Link>
          </Link>

          <Link
            className="lead section-link"
            activeClass="my-active"
            to="experience"
            spy={true}
            smooth={true}
            offset={offset}
            duration={500}
          >
            <Nav.Link className="lead navbar-option" eventKey={2}>
              Experience
            </Nav.Link>
          </Link>

          <Link
            className="lead section-link"
            activeClass="my-active"
            to="accolades"
            spy={true}
            smooth={true}
            offset={offset}
            duration={500}
          >
            <Nav.Link className="lead navbar-option" eventKey={3}>
              Accolades
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
