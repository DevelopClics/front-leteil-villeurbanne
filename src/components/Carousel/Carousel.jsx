import React from "react";
import { Carousel } from "react-bootstrap";
import heroImage from "../../assets/images/visuel-lol.jpg";
import alaturkaImage from "../../assets/images/alaturka.png";
import "./Carousel.css";

const CarouselComponent = () => {
  return (
    <section className="hero-section">
      <Carousel controls={true} indicators={true}>
        <Carousel.Item>
          <img
            src={heroImage}
            alt="Culture"
            className="d-block w-100 hero-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={alaturkaImage}
            alt="Alaturka"
            className="d-block w-100 hero-image"
          />
        </Carousel.Item>
      </Carousel>
      <div className="hero-text">
        <div className="hero-title-block">
          <h1>CULTURE</h1>
        </div>
        <div className="hero-paragraph-block">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
