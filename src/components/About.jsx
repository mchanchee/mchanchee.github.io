import React from "react";
import "./About.css";
import MyCarousel from "./MyCarousel";

function About() {
  return (
    <div id="about" className="above-particles jumbotron jumbotron-fluid m-0">
      <div className="container">
        <div className="row">
          {/* Picture */}
          <div className="col-md-6 order-md-2 align-self-center">
            <MyCarousel />
          </div>

          {/* Description */}
          <div className="col-md-6 order-md-1">
            <h1 className="title display-4 mb-4 pt-3">Hi! I'm Matthieu,</h1>
            <p className="description">
              an avid learner, hacker and problem-solver. I study{" "}
              <strong>Computer Science, Statistics and Math</strong> at the
              University of Toronto, with a focus on{" "}
              <strong>Artificial Intelligence</strong>. Currently, I'm on a 12-month
              internship at{" "}
              <a
                href="https://www.amd.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AMD
              </a>
              , where I work on Machine Learning and Computer Vision.
              <br />
              <br />

              I'm from Mauritius, a small island in the Indian Ocean. In 2017, I
              had the privilege of being among the 37 worldwide recipients of
              the University of Toronto's{" "}
              <a
                href="https://future.utoronto.ca/pearson/2017-scholars/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pearson Scholarship
              </a>
              {" "}(~$280k). I was also Mauritius' first ever Computer Science Laureate (national top 9 students at Cambridge A Level).
              <br />
              <br />

              When I'm not fiddling with tech, I enjoy practising Kung Fu,
              dragon boat, lion dance, public speaking and debating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
