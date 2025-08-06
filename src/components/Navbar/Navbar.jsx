import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleDropdownToggle = (dropdownId) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
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
              onMouseEnter={() => setOpenDropdown("qui-sommes-nous")}
              onMouseLeave={handleDropdownClose}
              onClick={() => handleDropdownToggle("qui-sommes-nous")}
              className={`nav-element ${
                openDropdown === "qui-sommes-nous" ? "is-hovered" : ""
              }`}
            >
              <NavDropdown.Item href="#action/1.1" onClick={handleItemClick}>
                La génèse
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2" onClick={handleItemClick}>
                L'équipe
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3" onClick={handleItemClick}>
                Les villes
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Les projets"
              id="nav-dropdown-les-projets"
              show={openDropdown === "les-projets"}
              onMouseEnter={() => setOpenDropdown("les-projets")}
              onMouseLeave={handleDropdownClose}
              onClick={() => handleDropdownToggle("les-projets")}
              className={`nav-element ${
                openDropdown === "les-projets" ? "is-hovered" : ""
              }`}
            >
              <NavDropdown.Item href="#action/2.1" onClick={handleItemClick}>
                Tous les projets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2" onClick={handleItemClick}>
                Culture
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3" onClick={handleItemClick}>
                Alimentation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.4" onClick={handleItemClick}>
                Jeunesse
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.5" onClick={handleItemClick}>
                Économie
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Nous rejoindre"
              id="nav-dropdown-nous-rejoindre"
              show={openDropdown === "nous-rejoindre"}
              onMouseEnter={() => setOpenDropdown("nous-rejoindre")}
              onMouseLeave={handleDropdownClose}
              onClick={() => handleDropdownToggle("nous-rejoindre")}
              className={`nav-element ${
                openDropdown === "nous-rejoindre" ? "is-hovered" : ""
              }`}
            >
              <NavDropdown.Item href="#action/3.1" onClick={handleItemClick}>
                Devenir membre
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={handleItemClick}>
                Faire un don
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={handleItemClick}>
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
