import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import Breadcrumbscontact from "../components/breadcrumbs/Breadcrumbscontact";

export default function Contact() {
  const TITLE = "Nous rejoindre";
  return (
    <>
      <Breadcrumbscontact breadcrumbsnav={TITLE} />
      <section className="reason-section">
        <Container className="app-container-padding">
          <Row>
            <Col>
              <h2>{TITLE}</h2>
              <p>xxxxx</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
