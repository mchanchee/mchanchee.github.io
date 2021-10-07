import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import "./Projects.css";
import autoronto from "../images/autoronto.jpg";
import unspoken_words from "../images/unspoken-words.png";
import cwanabee from "../images/cwanabee.JPG";
import projectx from "../images/projectx.png";

function Projects() {
  return (
    <div
      id="projects"
      className="above-particles jumbotron jumbotron-fluid m-0"
    >
      <div className="container">
        <h1 className="title display-3 pb-3">Projects</h1>

        <CardDeck>
        <Card>
            <Card.Img variant="top" src={projectx} />
            <Card.Body>
              <Card.Title>Multiple predictoR Neural ODE</Card.Title>
              <Card.Text className="project-list">
                Our UofT team was announced World Champion of the{" "}
                <a
                  href="https://www.projectx2020.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ProjectX global ML research competition 2020
                </a>
                . We devised a novel neural ODE architecture to learn the dynamics of time-series data via multiple predictors and demonstrated its efficacy on a plant disease dataset.
                <br />
                <br />
                Our ICML 2021 workshop presentation and paper can be found{" "}
                <a
                  href="https://www.climatechange.ai/papers/icml2021/26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                here
                </a> and a short documentary video{" "}
                <a
                  href="https://www.instagram.com/p/CRegsn9goYp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                here
                </a>.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={autoronto} />
            <Card.Body>
              <Card.Title>aUToronto</Card.Title>
              <Card.Text className="project-list">
                I trained object detection models at{" "}
                <a
                  href="https://www.autodrive.utoronto.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aUToronto
                </a>
                , the University of Toronto's self-driving car team. <br/><br/>We are the quadruple
                Champions of North America at the{" "}
                <a
                  href="https://www.sae.org/attend/student-events/autodrive-challenge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAE International AutoDrive Challenge
                </a>
                {" "}(2018, 2019, 2020, 2021).
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={cwanabee} />
            <Card.Body>
              <Card.Title>Cwanabee</Card.Title>
              <Card.Text className="project-list">
                We made an intelligent plant monitoring system which won{" "}
                <a
                  href="https://devpost.com/software/intelligent-agriculture-analytics-with-iot-edge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Best Use of TELUS Devkit and Network for IoT (Sponsored by
                  TELUS)"
                </a>{" "}
                at MakeUofT 2019, Canada's largest hardware hackathon.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={unspoken_words} />
            <Card.Body>
              <Card.Title>Unspoken Words</Card.Title>
              <Card.Text className="project-list">
                I had the privilege of being invited to give a speech on Machine
                Learning on{" "}
                <a
                  href="https://www.facebook.com/unspokenw404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unspoken Words
                </a>
                , a public speaking platform in my home country Mauritius. 
                <br /><br />The video (available{" "}
                <a
                  href="https://www.facebook.com/unspokenw404/videos/547809832581545/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here
                </a>
                ) has reached 9K views.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Projects;
