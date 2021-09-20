import React from "react";
import amd from "../images/amd.jpg";
import avalara from "../images/avalara.png";
import uoft from "../images/uoft.png";

import "./Experience.css";

function Experience() {
  return (
    <div id="experience" className="above-particles jumbotron jumbotron-fluid m-0">
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
              Machine Learning Engineer Intern
            </h4>
            <h4 className="text-muted job-subheading display-4">
              June 2020 - April 2021
            </h4>

            <p>
            - Developed Deep ConvNets to detect corruption in video games.
            <br />- Improved model’s F1-score from 75.8% to 93.6% and implemented Grad-CAM heatmap generation for model interpretability. Co-authored research paper submitted to the 17th International Conference on Computer Vision Theory and Applications (VISAPP 2022).
            <br />- Implemented features to reduce the customers’ manual effort by 20x.
            <br />- Leveraged AzureML to increase training experiments by 100x.
            <br />- Selected and interviewed incoming Machine Learning interns.
            <br />- Kickstarted AMD’s involvement with the University of Toronto’s MScAC program to welcome three 8-month graduate applied research interns for the first time in May 2021.
            <br />- Organized and hosted professional development speaker series for the intern community.
            </p>
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
              - Trained a handwritten signature-detection system with{" "}
              <a
                href="https://www.tensorflow.org/tensorboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tensorboard
              </a>{" "}
              integration.
              <br />- Automated the creation, manipulation and results
              collection of HITs (Human Intelligence Tasks) using{" "}
              <a
                href="https://www.mturk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon MTurk
              </a>{" "}
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
              <br />- Held tutorials and office hours.
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
