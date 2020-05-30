import React from "react";
import amd from "../images/amd.jpg";
import avalara from "../images/avalara.png";
import uoft from "../images/uoft.png";

import "./Experience.css";

function Experience() {
  return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h1 className="experience-title display-3">Work Experience</h1>
        {/* AMD */}
        <div className="pt-2 pb-5 row">
          <div className="col-md-3 order-md-1 align-self-center">
            <img className="rounded-circle my-picture" src={amd} alt="amd" />
          </div>
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">AMD</h3>
            <h4 className="text-muted job-subheading display-4">
              Machine Learning Developer
            </h4>
            <h4 className="text-muted job-subheading display-4">
              June 2020 - Present
            </h4>

            <p></p>
          </div>
        </div>

        {/* Avalara */}
        <div className="pb-5 row">
          <div className="col-md-3 order-md-1 align-self-center">
            <img
              className="rounded-circle my-picture"
              src={avalara}
              alt="avalara"
            />
          </div>
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">Avalara</h3>
            <h4 className="text-muted job-subheading display-4">
              Software Engineering Intern
            </h4>
            <h4 className="text-muted job-subheading display-4">
              May - Aug 2019
            </h4>

            <p>
              - Trained a handwritten signature-detection system with
              Tensorboard integration.
              <br />- Automated the creation, manipulation and results
              collection of Human Intelligence Tasks (HIT) using Amazon MTurk
              API for classifying tax forms and mapping their fields.
            </p>
          </div>
        </div>

        {/* UofT */}
        <div className="row">
          <div className="col-md-3 order-md-1 align-self-center">
            <img className="rounded-circle my-picture" src={uoft} alt="uoft" />
          </div>

          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">
              University of Toronto
            </h3>

            {/* TA */}
            <h4 className="text-muted job-subheading display-4">
              Teaching Assistant, Dept of Math
            </h4>
            <h4 className="text-muted job-subheading display-4">
              Jan - Apr 2019
            </h4>

            <p>
              - Under{" "}
              <a
                href="https://www.math.toronto.edu/smt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Sarah Mayes-Tang
              </a>
              <br /> - Held tutorials and office hours.
              <br />- Marked presentations, tests and assignments
            </p>

            {/* RA */}
            <h4 className="text-muted job-subheading display-4">
              Research Assistant, Dept of French
            </h4>
            <h4 className="text-muted job-subheading display-4">
              June - Aug 2018
            </h4>

            <p>
              - Under{" "}
              <a
                href="https://www.french.utoronto.ca/people/directories/all-faculty/fatima-hamlaoui"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Fatima Hamlaoui
              </a>
              <br />- Automated the{" "}
              <a
                href="https://montreal-forced-aligner.readthedocs.io/en/latest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MFA
              </a>{" "}
              text-to-speech alignment process using Python scripts.
              <br />- This included the automatic phonemic recognition of data
              previously unrecorded in the G2P (grapheme-to-phoneme) dictionary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
