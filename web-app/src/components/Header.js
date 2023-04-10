import React, { useState, useContext } from "react";
import "../styles.css";
import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "./ThemeContext";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      bg={theme === "light" ? "body-tertiary" : "dark"}
      expand="lg"
      fixed="top"
      className={theme === "dark" ? "navbar-dark" : ""}
      style={{ backgroundColor: theme === "light" ? "white" : "#222" }}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/">TechNews</Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link href="/" active>
              Home
            </Nav.Link>
            <Nav.Link href="/technology" active>
              Technology
            </Nav.Link>
            <Nav.Link href="/science" active>
              Science
            </Nav.Link>
            <Nav.Link href="/business" active>
              Business
            </Nav.Link>
          </Nav>
          <Nav className="me-2">
            <Dropdown alignRight>
              <Dropdown.Toggle as={Nav.Item} id="dropdown-basic">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: theme === "dark" ? "white" : "black" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/login">Sign In</Dropdown.Item>
                <Dropdown.Item onClick={toggleTheme}>
                  {theme === "light" ? (
                    <>
                      <FontAwesomeIcon icon={faMoon} /> Dark Mode
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSun} /> Light Mode
                    </>
                  )}
                </Dropdown.Item>
                <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
