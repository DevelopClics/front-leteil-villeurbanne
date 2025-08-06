import React from "react";
import { Carousel } from "react-bootstrap";
import ImageOne from "../../assets/images/photos/AdobeStock_128079957.jpeg";
import ImageTwo from "../../assets/images/photos/AdobeStock_270911862.jpeg";
import ImageThree from "../../assets/images/photos/AdobeStock_347123057.jpeg";
import "./Carousel.css";

const CarouselComponent = ({ isNavbarHovered }) => {
  return (
    <section className={`hero-section ${isNavbarHovered ? 'navbar-hovered' : ''}`}>
      <Carousel controls={true} indicators={true}>
        <Carousel.Item>
          <img
            src={ImageOne}
            alt="Concer"
            className="d-block w-100 hero-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ImageTwo}
            alt="Danse"
            className="d-block w-100 hero-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ImageThree}
            alt="Animation"
            className="d-block w-100 hero-image"
          />
        </Carousel.Item>
      </Carousel>
      <div className="hero-text">
        <div className="hero-title-block">
          <h1>Culture</h1>
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
