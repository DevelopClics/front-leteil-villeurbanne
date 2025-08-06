import React, { useState, useEffect } from "react";
import Navigation from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TopHeader from "./components/TopHeader/TopHeader";
import CarouselComponent from "./components/Carousel/Carousel";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBreakpoint = (width) => {
    if (width < 576) {
      return "XS";
    } else if (width >= 576 && width < 768) {
      return "sm";
    } else if (width >= 768 && width < 992) {
      return "md";
    } else if (width >= 992 && width < 1200) {
      return "lg";
    } else if (width >= 1200 && width < 1400) {
      return "xl";
    } else {
      return "xxl";
    }
  };

  return (
    <>
      <div className="top-blue-bar">
        {/* {screenWidth}px - {getBreakpoint(screenWidth)} */}
      </div>
      <TopHeader />
      <Navigation />
      <CarouselComponent />

      <section className="reason-section">
        <Container className="app-container-padding">
          <Row>
            <Col>
              <h2>NOTRE RAISON D'ÊTRE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

      <div className="bottom-blue-bar">
        {/* {screenWidth}px - {getBreakpoint(screenWidth)} */}
      </div>
    </>
  );
}

export default App;
