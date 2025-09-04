import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import CarouselComponent from "../../components/Carousel/Carousel";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Datas from "../../components/datas/Datas.json";
import FakeComp from "../../components/FakeComp";
import PageLayout from "../../components/layouts/PageLayout";

export default function Cooperation({ isNavbarHovered }) {
  const SUB = "Coopération";
  const SUBTEXT =
    "Faisons alliance à tous les niveaux (collectivités, associations, entreprises et habitants) pour initier une nouvelle relation ville-campagne qui résout les défis des territoires et combat le repli sur soi.";
  return (
    <>
      <CarouselComponent
        isNavbarHovered={isNavbarHovered}
        title={SUB}
        text={SUBTEXT}
        slides={Datas.carouselSlides.culture}
      />

      <Breadcrumbs breadcrumbsnav="Les projets" breadcrumbssub={SUB} />
      <PageLayout title={SUB} DescriptionComponent={<FakeComp />} />
    </>
  );
}
