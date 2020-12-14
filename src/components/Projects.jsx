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
            <Card.Img variant="top" src={autoronto} />
            <Card.Body>
              <Card.Title>aUToronto</Card.Title>
              <Card.Text className="project-list">
                I'm on the Perception subteam of{" "}
                <a
                  href="https://www.autodrive.utoronto.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aUToronto
                </a>
                , the University of Toronto's self-driving car team. <br/><br/>We are the 2018, 2019 and 2020
                Champions of North America at the{" "}
                <a
                  href="https://www.sae.org/attend/student-events/autodrive-challenge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAE International AutoDrive Challenge
                </a>
                .
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
                , a public speaking platform in my home country Mauritius. The
                video (available{" "}
                <a
                  href="https://www.facebook.com/unspokenw404/videos/547809832581545/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here
                </a>
                ) has reached ~9K views.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={projectx} />
            <Card.Body>
              <Card.Title>Multiple predictoR Neural ODE</Card.Title>
              <Card.Text className="project-list">
                I was part of the 6-student team representing the University of Toronto at{" "}
                <a
                  href="https://www.projectx2020.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ProjectX 2020
                </a>
                , a global Machine Learning research competition. Our team devised a novel neural ODE architecture to learn the dynamics of time-series data via multiple predictors.{" "}
                <a
                  href="https://arxiv.org/abs/2012.00752"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [arxiv]
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Projects;
