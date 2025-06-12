import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="modern-nav">
        <div className="nav-container bg-transparent">
          {/* Logo and Brand */}
          <a href="/" className="nav-brand">
            <div className="logo-container">
              <div className="logo-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div className="logo-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
              </div>
            </div>
            <div className="brand-text">
              <span className="brand-main">Trading</span>
              <span className="brand-sub">Calculator</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className={`nav-links ${isMenuOpen ? "nav-links-mobile" : ""}`}>
            <a
              href="#"
              className={`nav-link pointer ${
                location.pathname === "/lotsize" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                navigate("/lotsize");
              }}
            >
              <i className="bi bi-pie-chart-fill"></i>
              <span>Lot Size</span>
              <div className="nav-link-bg"></div>
            </a>

            <a
              href="#"
              className={`nav-link pointer ${
                location.pathname === "/pips" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                navigate("/pips");
              }}
            >
              <i className="bi bi-graph-up"></i>
              <span>Pips</span>
              <div className="nav-link-bg"></div>
            </a>

            <a
              href="#"
              className={`nav-link pointer ${
                location.pathname === "/profit" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                navigate("/profit");
              }}
            >
              <i className="bi bi-currency-dollar"></i>
              <span>Profit</span>
              <div className="nav-link-bg"></div>
            </a>
          </div>

          {/* Developer Profile */}
          <div className="nav-profile">
            <div className="dropdown">
              <button className="profile-btn" onClick={toggleDropdown}>
                <div className="profile-avatar">
                  <i className="bi bi-person-fill"></i>
                </div>
                <div className="profile-info">
                  <span className="profile-name">Nassim MZILI</span>
                  <span className="profile-title">Full Stack Developer</span>
                </div>
                <i
                  className={`bi bi-chevron-down dropdown-arrow ${
                    isDropdownOpen ? "rotated" : ""
                  }`}
                ></i>
              </button>

              <div
                className={`dropdown-menu-custom ${
                  isDropdownOpen ? "show" : ""
                }`}
              >
                <div className="dropdown-header text-light">
                  <i className="bi bi-code-slash"></i>
                  <span>Connect with me</span>
                </div>

                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      style={{ color: link.color }}
                      rel="noopener noreferrer"
                      className="social-link linkedin w-100 d-flex justify-content-start gap-3 px-3"
                    >
                      <i className={`bi ${link.icon}`}></i>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
