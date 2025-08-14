import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import CarouselComponent from "../../components/Carousel/Carousel";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Datas from "../../components/datas/Datas.json";
import Reason from "../../components/Reason";

export default function Culture({ isNavbarHovered }) {
  const SUB = "Culture";
  const SUBTEXT =
    "Cultura lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip.";
  return (
    <>
      <CarouselComponent
        isNavbarHovered={isNavbarHovered}
        title={SUB}
        text={SUBTEXT}
        slides={Datas.carouselSlides.culture}
      />

      <Breadcrumbs breadcrumbsnav="Les projets" breadcrumbssub={SUB} />
      <Reason title={SUB} />
    </>
  );
}
