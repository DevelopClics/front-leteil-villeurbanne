import React from "react";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import logoTzc from "../../assets/images/logo-le-teil-villeurbanne.svg";
import facebookIcon from "../../assets/images/icons/facebook-icon.svg";
import linkedinIcon from "../../assets/images/icons/linkedin-icon.svg";
import mailIcon from "../../assets/images/icons/mail-icon.svg";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header pt-3 p-md-5">
      <Container>
        <Row className="align-items-center ">
          <Col xl={4} className="d-none d-xl-block"></Col>
          <Col
            xs={12}
            md={6}
            xl={4}
            className="text-center text-md-start text-xl-center mb-3 mb-md-0"
          >
            <Image src={logoTzc} alt="Logo TZC" className="main-logo" fluid />
          </Col>

          <Col xs={12} md={6} xl={3}>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-center justify-content-md-end"
            >
              <a href="#facebook" className="social-icon-circle facebook-icon">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#linkedin" className="social-icon-circle linkedin-icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <div className="social-icon-separator"></div>
              <a href="#mail" className="social-icon-circle">
                <img src={mailIcon} alt="Mail" />
              </a>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
