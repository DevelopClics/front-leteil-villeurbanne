import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import pct1 from "../../assets/images/photos/AdobeStock_128079957.jpeg";

export default function AllProj() {
  const SUB = "Tous les projets";
  const XS = 12;
  const SM = 12;
  const MD = 6;
  const LG = 4;
  const XL = 3;
  const XXL = 3;

  return (
    <>
      <Breadcrumbs breadcrumbsnav="Les projets" breadcrumbssub={SUB} />
      <section className="reason-section">
        <Container className="app-container-padding">
          <Row>
            <Col>
              <h2>{SUB}</h2>
              <Row>
                <Col
                  xs={XS}
                  sm={SM}
                  md={MD}
                  lg={LG}
                  xl={XL}
                  xxl={XXL}
                  // className="mb-5 mb-sm-5 mb-xl-5"
                >
                  1
                  <img
                    src={pct1}
                    alt="Logo"
                    className="img-fluid"
                    // className="pe-5 me-5 mb-4 logo-tv"
                  />
                </Col>

                <Col
                  xs={XS}
                  sm={SM}
                  md={MD}
                  lg={LG}
                  xl={XL}
                  xxl={XXL}
                  // className="mb-5 mb-sm-5 mb-xl-5"
                >
                  2
                  <img
                    src={pct1}
                    alt="Logo"
                    className="img-fluid"

                    // className="pe-5 me-5 mb-4 logo-tv"
                  />
                </Col>

                <Col
                  xs={XS}
                  sm={SM}
                  md={MD}
                  lg={LG}
                  xl={XL}
                  xxl={XXL}
                  // className="mb-5 mb-sm-5 mb-xl-5"
                >
                  3
                  <img
                    src={pct1}
                    alt="Logo"
                    className="img-fluid"

                    // className="pe-5 me-5 mb-4 logo-tv"
                  />
                </Col>

                <Col
                  xs={XS}
                  sm={SM}
                  md={MD}
                  lg={LG}
                  xl={XL}
                  xxl={XXL}
                  className="mb-5 mb-sm-5 mb-xl-5"
                >
                  {" "}
                  4
                  <img
                    src={pct1}
                    alt="Logo"
                    className="img-fluid"
                    // className="pe-5 me-5 mb-4 logo-tv"
                  />
                </Col>
                <Col
                  xs={XS}
                  sm={SM}
                  md={MD}
                  lg={LG}
                  xl={XL}
                  xxl={XXL}
                  // className="mb-5 mb-sm-5 mb-xl-5"
                  className=""
                >
                  5
                  <img
                    src={pct1}
                    alt="Logo"
                    className="img-fluid"
                    // className="pe-5 me-5 mb-4 logo-tv"
                  />
                </Col>
                <Col
                  xs={XS}
                  sm={SM}
                  md={MD}
                  lg={LG}
                  xl={XL}
                  xxl={XXL}
                  // className="mb-5 mb-sm-5 mb-xl-5"
                >
                  6
                  <img
                    src={pct1}
                    alt="Logo"
                    className="img-fluid"

                    // className="pe-5 me-5 mb-4 logo-tv"
                  />
                </Col>
                <Col
                  xs={XS}
                  sm={SM}
                  md={MD}
                  lg={LG}
                  xl={XL}
                  xxl={XXL}
                  // className="mb-5 mb-sm-5 mb-xl-5"
                >
                  7
                  <img
                    src={pct1}
                    alt="Logo"
                    className="img-fluid"

                    // className="pe-5 me-5 mb-4 logo-tv"
                  />
                </Col>
                <Col
                  xs={XS}
                  sm={SM}
                  md={MD}
                  lg={LG}
                  xl={XL}
                  xxl={XXL}
                  // className="mb-5 mb-sm-5 mb-xl-5"
                >
                  8
                  <img
                    src={pct1}
                    alt="Logo"
                    className="img-fluid"

                    // className="pe-5 me-5 mb-4 logo-tv"
                  />
                </Col>
              </Row>
              <p>xxxxx</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
