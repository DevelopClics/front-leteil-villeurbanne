import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function Donate() {
  const SUB = "Faire un don";
  return (
    <>
      <Breadcrumbs breadcrumbsnav="Nous rejoindre" breadcrumbssub={SUB} />

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
