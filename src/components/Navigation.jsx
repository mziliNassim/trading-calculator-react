import React, { useEffect, useState } from "react";

import { Form, Link, NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Offcanvas,
  Button,
  NavDropdown,
} from "react-bootstrap";

const Navigation = () => {
  const expand = "md";
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="bg-body-tertiary mb-4 navBar"
      >
        <Container>
          <Navbar.Brand className="brand">
            <Link to="/" className="Brand brand">
              Trading Calculator
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="Brand brand"
                id={`offcanvasNavbarLabel-expand-${expand}`}
              >
                Trading Calculator
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="align-items-center justify-content-end flex-grow-1 pe-3">
                <NavLink to="/lotsize" className="mx-3 navTargit">
                  LotSize
                </NavLink>
                <NavLink to="/pips" className="mx-3 navTargit">
                  Pips
                </NavLink>
                <NavLink to="/profit" className="mx-3 navTargit">
                  Profit
                </NavLink>
              </Nav>

              <Dropdown className="text-center">
                <Dropdown.Toggle
                  variant="transparent"
                  className="user"
                  style={{ border: "0px", outline: "none" }}
                >
                  <i class="bi bi-person-circle user"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="">
                  <Dropdown.Item
                    href="https://www.instagram.com/nassim__dev/"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-instagram"></i>
                    <span>Instagram</span>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="https://www.instagram.com/bugs_hunting"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-instagram"></i>
                    <span>Instagram (BH)</span>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="https://github.com/mziliNassim"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-github"></i>
                    <span>Github</span>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="https://www.linkedin.com/in/mzilinassim/"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-linkedin"></i>
                    <span>Linkedin</span>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="https://www.youtube.com/@bugshunting609"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-youtube"></i>
                    <span>Youtube</span>
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item
                    href="https://linktr.ee/mzilinassim"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-share-fill"></i>
                    <span>All Links</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
