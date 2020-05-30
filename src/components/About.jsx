import React from "react";
import "./About.css";
import PicCarousel from "./PicCarousel";

function About() {
  return (
    <div className="jumbotron jumbotron-fluid m-0 about">
      <div className="container">
        <div className="row">
          {/* Picture */}
          <div className="col-md-6 order-md-2 align-self-center">
            <PicCarousel />
          </div>

          {/* Description */}
          <div className="col-md-6 order-md-1">
            <h1 className="display-4 mb-4 pt-3 text-center">
              Hello world, it's Matthieu!
            </h1>
            <p className="lead text-center">
              {/* I'm from Mauritius, a small island in the Indian Ocean. My long-term goal is to drive to the technological advancement of my country. This drive for progress led me to become one of the 37 worldwide recipients of the Pearson Scholarship from the University of Toronto. My passion for mathematics and problem-solving led me to rank 1st at the National Mathematics Olympiad 2016 and being appointed as Calculus Teaching Assistant during my 2nd year at UofT. */}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
