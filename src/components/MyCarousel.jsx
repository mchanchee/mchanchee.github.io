import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./MyCarousel.css";
import dragonBoat from "../images/dragon-boat.jpg";
import laureate from "../images/laureate.jpg";
import lionDance from "../images/lion-dance.jpg";
import munGA from "../images/mun-ga.jpg";
import mauritius from "../images/mauritius.jpg";

function MyCarousel() {
  return (
    <Carousel interval={3000}>
    <Carousel.Item>
      <img className="d-block w-100" src={mauritius} alt="Mauritius" />
      <Carousel.Caption>
        <span className="lead label">Mauritius</span>
      </Carousel.Caption>
    </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={dragonBoat} alt="National Dragon Boat Competition" />
        <Carousel.Caption>
          <span className="lead label">National Dragon Boat Competition</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={laureate} alt="Laureate celebration" />
        <Carousel.Caption>
          <span className="lead label">Laureate celebration</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={munGA} alt="National Model UN" />
        <Carousel.Caption>
          <span className="lead label">National Model UN</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={lionDance} alt="Lion dance" />
        <Carousel.Caption>
          <span className="lead label">Lion dance</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
