import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";

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
            <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
              <NavLink to="/lotsize" className="mx-3 navTargit">
                LotSize
              </NavLink>
              <NavLink to="/pips" className="mx-3 navTargit">
                Pips
              </NavLink>
              <NavLink to="/profit" className="mx-3 navTargit">
                Profit
              </NavLink>

              <Dropdown className="">
                <Dropdown.Toggle
                  variant="transparent"
                  className="user"
                  style={{ border: "0px", outline: "none" }}
                >
                  <i class="bi bi-person-circle user"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* IG */}
                  <Dropdown.Item
                    href="https://www.instagram.com/nassim__dev/"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-instagram"></i>
                    <span>Instagram</span>
                  </Dropdown.Item>

                  {/* IG (BH) */}
                  <Dropdown.Item
                    href="https://www.instagram.com/bugs_hunting"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-instagram"></i>
                    <span>Instagram (BH)</span>
                  </Dropdown.Item>

                  {/* Github */}
                  <Dropdown.Item
                    href="https://github.com/mziliNassim"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-github"></i>
                    <span>Github</span>
                  </Dropdown.Item>

                  {/* linkedin */}
                  <Dropdown.Item
                    href="https://www.linkedin.com/in/mzilinassim/"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-linkedin"></i>
                    <span>Linkedin</span>
                  </Dropdown.Item>

                  {/* Discord */}
                  {/* <Dropdown.Item
                    href="https://discord.com/invite/wkaYHKT7"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-discord"></i>
                    <span>Discord</span>
                  </Dropdown.Item> */}

                  {/* Youtube */}
                  <Dropdown.Item
                    href="https://www.youtube.com/@bugshunting609"
                    target="_blanc"
                    className="d-flex align-items-center gap-3"
                  >
                    <i class="bi bi-youtube"></i>
                    <span>Youtube</span>
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  {/* Linktr.ee */}
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
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
