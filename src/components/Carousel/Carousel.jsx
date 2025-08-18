import React from "react";
import { Carousel } from "react-bootstrap";

import "./Carousel.css";

const CarouselComponent = ({ isNavbarHovered, title, text, slides }) => {
  return (
    <section
      className={`hero-section ${isNavbarHovered ? "navbar-hovered" : ""} ${
        slides.length === 0 ? "empty-carousel-background" : ""
      }`}
    >
      {/* Content for small screens */}
      <div className="p-3 pb-0 d-block d-md-none hero-text-small-screen">
        <div className="hero-title-block">
          <h1>{title}</h1>
        </div>
        <div className="hero-paragraph-block">
          <p>{text}</p>
        </div>
      </div>

      {/* Carousel for medium and larger screens */}
      <div className="d-none d-md-block">
        <Carousel controls={true} indicators={true}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                src={`${import.meta.env.BASE_URL}${slide.src}`}
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
      </div>
    </section>
  );
};

export default CarouselComponent;
