import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import PrivateRoutes from "./utils/PrivateRoutes";
import Navigation from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import TopHeader from "./components/TopHeader/TopHeader";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Team from "./pages/about/Team";
import Genesis from "./pages/about/Genesis";
import Places from "./pages/about/Places";
import AllProj from "./pages/projects/AllProj";
import Culture from "./pages/projects/Culture";
import Food from "./pages/projects/Food";
import Youth from "./pages/projects/Youth";
import Economy from "./pages/projects/Economy";
import Member from "./pages/join-us/Member";
import Donate from "./pages/join-us/Donate";
import Volunteer from "./pages/join-us/Volunteer";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

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
        {screenWidth}px - {getBreakpoint(screenWidth)}
      </div>
      <TopHeader />
      <Navigation onDropdownHoverChange={setIsNavbarHovered} />

      <Routes>
        {/* <Route element={<PrivateRoutes />}>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Route> */}
        <Route path="/" element={<Home isNavbarHovered={isNavbarHovered} />} />
        <Route
          path="/contact"
          element={<Contact isNavbarHovered={isNavbarHovered} />}
        />
        {/* QUI SOMMES NOUS   */}
        <Route
          path="/genesis"
          element={<Genesis isNavbarHovered={isNavbarHovered} />}
        />
        <Route
          path="/team"
          element={<Team isNavbarHovered={isNavbarHovered} />}
        />
        <Route
          path="/places"
          element={<Places isNavbarHovered={isNavbarHovered} />}
        />
        {/* TOUS LES PROJETS   */}
        <Route
          path="/all-projects"
          element={<AllProj isNavbarHovered={isNavbarHovered} />}
        />
        <Route
          path="/culture"
          element={<Culture isNavbarHovered={isNavbarHovered} />}
        />
        <Route
          path="/food"
          element={<Food isNavbarHovered={isNavbarHovered} />}
        />
        <Route
          path="/youth"
          element={<Youth isNavbarHovered={isNavbarHovered} />}
        />
        <Route
          path="/economy"
          element={<Economy isNavbarHovered={isNavbarHovered} />}
        />
        {/* NOUS REJOINDRE  */}
        <Route
          path="/member"
          element={<Member isNavbarHovered={isNavbarHovered} />}
        />
        <Route
          path="/donate"
          element={<Donate isNavbarHovered={isNavbarHovered} />}
        />
        <Route
          path="/volunteer"
          element={<Volunteer isNavbarHovered={isNavbarHovered} />}
        />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />

      <div className="bottom-blue-bar">
        {/* {screenWidth}px - {getBreakpoint(screenWidth)} */}
      </div>
    </>
  );
}

export default App;
