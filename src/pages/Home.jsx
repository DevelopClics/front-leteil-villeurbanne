import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import CarouselComponent from "../components/Carousel/Carousel";

import Datas from "../components/datas/Datas.json";
import Reason from "../components/ReasonComp";
import PageLayout from "../components/layouts/PageLayout";
import ReasonComp from "../components/ReasonComp";

export default function Culture({ isNavbarHovered }) {
  const SUB = "notre raison d'être";
  const SUBTEXT =
    "Bienvenutta lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip.";
  return (
    <>
      <CarouselComponent
        isNavbarHovered={isNavbarHovered}
        title={SUB}
        text={SUBTEXT}
        slides={Datas.carouselSlides.welcome}
      />
      {/* <ReasonComp title="NOTRE RAISON D'ÊTRE" /> */}
      <PageLayout title={SUB} DescriptionComponent={<ReasonComp />} />
    </>
  );
}
