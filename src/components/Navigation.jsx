import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary mb-5 navBar">
        <Container>
          <Navbar.Brand className="brand">
            <Link to="/" className="Brand brand">
              Trading Calculator
            </Link>
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Nav className="justify-content-end flex-grow-1 pe-3">
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
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
