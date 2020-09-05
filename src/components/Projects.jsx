import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import "./Projects.css";
import autoronto from "../images/autoronto.jpg";
import unspoken_words from "../images/unspoken-words.png";
import cwanabee from "../images/cwanabee.JPG";

function Projects() {
  return (
    <div
      id="projects"
      className="above-particles jumbotron jumbotron-fluid m-0"
    >
      <div className="container">
        <h1 className="title display-3 pb-3">Projects</h1>

        <CardDeck className="project-list">
          <Card>
            <Card.Img variant="top" src={autoronto} />
            <Card.Body>
              <Card.Title>aUToronto</Card.Title>
              <Card.Text>
                I'm on the Perception subteam of{" "}
                <a
                  href="https://www.autodrive.utoronto.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aUToronto
                </a>
                , UofT's self-driving car team. We are the 2018 and 2019
                Champions of North America at the{" "}
                <a
                  href="https://www.sae.org/attend/student-events/autodrive-challenge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAE/GM AutoDrive Challenge
                </a>
                .
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={cwanabee} />
            <Card.Body>
              <Card.Title>Cwanabee</Card.Title>
              <Card.Text>
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
              <Card.Text>
                I had the privilege of being invited to give a speech on Machine
                Learning on{" "}
                <a
                  href="https://www.facebook.com/unspokenw404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Unspoken Words
                </a>
                , a public speaking platform in Mauritius. The video (available{" "}
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
        </CardDeck>
      </div>
    </div>
  );
}

export default Projects;
