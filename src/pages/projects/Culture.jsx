import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function Culture() {
  const SUB = "Culture";
  return (
    <>
      <Breadcrumbs breadcrumbsnav="Les projets" breadcrumbssub={SUB} />
      <section className="reason-section">
        <Container className="app-container-padding">
          <Row>
            <Col>
              <h2>{SUB}</h2>
              <p>xxxxx</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
