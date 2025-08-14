import React from "react";
import { Carousel } from "react-bootstrap";

import "./Carousel.css";

const CarouselComponent = ({ isNavbarHovered, title, text, slides }) => {
  return (
    <section
      className={`hero-section ${isNavbarHovered ? "navbar-hovered" : ""}`}
    >
      <Carousel controls={true} indicators={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="d-block w-100 hero-image"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="hero-text">
        <div className="hero-title-block">
          <h1>{title}</h1>
        </div>
        <div className="hero-paragraph-block">
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
