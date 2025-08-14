import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import "./Team.css";
import CarouselComponent from "../../components/Carousel/Carousel";

import TeamCard from "../../components/Cards/TeamCard";
import Datas from "../../components/datas/Datas.json";

export default function Team({ isNavbarHovered }) {
  const XS = 12;
  const SM = 12;
  const MD = 6;
  const LG = 4;
  const XL = 3;
  const XXL = 2;

  const SUB = "L'équipe";
  const SUBTEXT =
    "Equipia lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip.";
  return (
    <>
      <CarouselComponent
        isNavbarHovered={isNavbarHovered}
        title={SUB}
        text={SUBTEXT}
        slides={Datas.carouselSlides.team}
      />
      <Breadcrumbs breadcrumbsnav="Qui sommes-nous ?" breadcrumbssub={SUB} />
      <section className="reason-section ">
        <Container
          className="app-container-padding"
          style={{ paddingBottom: "80px" }}
        >
          <Row>
            <Col>
              <h2>{SUB}</h2>
              {/* OFFICE */}
              <div style={{ marginBottom: "8vh" }}>
                <h4>Bureau</h4>
                <hr />
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit.
                </p>
                <Row className="g-4">
                  <TeamCard items={Datas.teammembers.office} />
                </Row>
              </div>
              {/* END OFFICE */}
              {/* ADMINISTRATION ADVISOR */}
              <div style={{ marginBottom: "8vh" }}>
                <h4>conseil d'administration</h4>
                <hr />
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit.
                </p>
                <Row className="g-4">
                  <TeamCard items={Datas.teammembers.administration} />
                </Row>
              </div>
              {/* END ADMINISTRATION ADVISOR*/}
              {/* INSTRUCTION COMITY */}
              <div style={{ marginBottom: "8vh" }}>
                <h4>comité d'instruction</h4>
                <hr />
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit.
                </p>
                <Row className="g-4">
                  <TeamCard items={Datas.teammembers.instruction} />
                </Row>
              </div>
              {/* END INSTRUCTION COMITY */}
              {/* SCIENTIFIC ADVISOR */}
              <div style={{ marginBottom: "8vh" }}>
                <h4>conseil scientifique</h4>
                <hr />
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit.
                </p>
                <Row className="g-4">
                  <TeamCard items={Datas.teammembers.scientific} />
                </Row>
              </div>
              {/* END SCIENTIFIC ADVISOR*/}
              {/* OFFICE */}
              <div style={{ marginBottom: "8vh" }}>
                <h4>Bureau</h4>
                <hr />
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit.
                </p>
                <Row className="g-4">
                  <TeamCard items={Datas.teammembers.office} />
                </Row>
              </div>
              {/* END OFFICE */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
