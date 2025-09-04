import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Stack } from "react-bootstrap";

import facebookIcon from "../../assets/images/icons/facebook-icon.svg";
import linkedinIcon from "../../assets/images/icons/linkedin-icon.svg";
import mailIcon from "../../assets/images/icons/mail-icon.svg";

import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navigation = ({ onDropdownHoverChange, socialIconsTargetRef }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleDropdownToggle = (dropdownId) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
      onDropdownHoverChange(false);
    } else {
      setOpenDropdown(dropdownId);
      onDropdownHoverChange(true);
    }
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
    onDropdownHoverChange(false);
  };

  const handleDropdownOpen = (dropdownId) => {
    setOpenDropdown(dropdownId);
    onDropdownHoverChange(true);
  };

  const handleItemClick = () => {
    setExpanded(false);
    handleDropdownClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
        handleDropdownClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      ref={navbarRef}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="md"
      className="navbar px-0"
    >
      <Container className="app-container-padding px-0">
        <div className="mobile-nav-container">
          <div ref={socialIconsTargetRef} />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ms-auto me-5"
          />
        </div>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="navbar-links">
            <NavDropdown
              title="Qui sommes-nous ?"
              id="nav-dropdown-qui-sommes-nous"
              show={openDropdown === "qui-sommes-nous"}
              onMouseEnter={() => handleDropdownOpen("qui-sommes-nous")}
              onMouseLeave={handleDropdownClose}
              onClick={() => handleDropdownToggle("qui-sommes-nous")}
              className={`nav-element ${
                openDropdown === "qui-sommes-nous" ? "is-hovered" : ""
              } ${
                location.pathname === "/genesis" ||
                location.pathname === "/team" ||
                location.pathname === "/places"
                  ? "active-dropdown-parent"
                  : ""
              }`}
            >
              {/* <NavDropdown.Item href="#action/1.1" onClick={handleItemClick}>
                La génèse
              </NavDropdown.Item> */}
              <NavDropdown.Item
                as={Link}
                to="/genesis"
                onClick={handleItemClick}
              >
                La génèse
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team" onClick={handleItemClick}>
                L'équipe
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/places"
                onClick={handleItemClick}
              >
                Les villes
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Les projets"
              id="nav-dropdown-les-projets"
              show={openDropdown === "les-projets"}
              onMouseEnter={() => handleDropdownOpen("les-projets")}
              onMouseLeave={handleDropdownClose}
              onClick={() => handleDropdownToggle("les-projets")}
              className={`nav-element ${
                openDropdown === "les-projets" ? "is-hovered" : ""
              } ${
                location.pathname === "/all-projects" ||
                location.pathname === "/culture" ||
                location.pathname === "/food" ||
                location.pathname === "/youth" ||
                location.pathname === "/economy"
                  ? "active-dropdown-parent"
                  : ""
              }`}
            >
              <NavDropdown.Item
                as={Link}
                to="/all-projects"
                onClick={handleItemClick}
              >
                Tous les projets
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/cooperation"
                onClick={handleItemClick}
              >
                Coopération
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/culture"
                onClick={handleItemClick}
              >
                Culture
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/food" onClick={handleItemClick}>
                Alimentation
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/youth" onClick={handleItemClick}>
                Jeunesse
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/economy"
                onClick={handleItemClick}
              >
                Économie
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/contact"
                onClick={handleItemClick}
              >
                Déposer un projet
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Nous rejoindre"
              id="nav-dropdown-nous-rejoindre"
              show={openDropdown === "nous-rejoindre"}
              onMouseEnter={() => handleDropdownOpen("nous-rejoindre")}
              onMouseLeave={handleDropdownClose}
              onClick={() => handleDropdownToggle("nous-rejoindre")}
              className={`nav-element ${
                openDropdown === "nous-rejoindre" ? "is-hovered" : ""
              } ${
                location.pathname === "/member" ||
                location.pathname === "/donate" ||
                location.pathname === "/volunteer"
                  ? "active-dropdown-parent"
                  : ""
              }`}
            >
              <NavDropdown.Item
                as={Link}
                to="/member"
                onClick={handleItemClick}
              >
                Devenir membre
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/donate"
                onClick={handleItemClick}
              >
                Faire un don
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/volunteer"
                onClick={handleItemClick}
              >
                Bénévolat
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
