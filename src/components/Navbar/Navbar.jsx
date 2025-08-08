import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navigation = ({ onDropdownHoverChange }) => {
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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto me-5"
        />
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
              }`}
            >
              {/* <NavDropdown.Item href="#action/1.1" onClick={handleItemClick}>
                La génèse
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/genesis" onClick={handleItemClick}>
                La génèse
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team" onClick={handleItemClick}>
                L'équipe
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/places" onClick={handleItemClick}>
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
              }`}
            >
              <NavDropdown.Item
                as={Link}
                to="/all-projects"
                onClick={handleItemClick}
              >
                Tous les projets
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/culture" onClick={handleItemClick}>
                Culture
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/food" onClick={handleItemClick}>
                Alimentation
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/youth" onClick={handleItemClick}>
                Jeunesse
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/economy" onClick={handleItemClick}>
                Économie
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
              }`}
            >
              <NavDropdown.Item as={Link} to="/member" onClick={handleItemClick}>
                Devenir membre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/donate" onClick={handleItemClick}>
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
