import React from "react";
import { useNavigate } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    calculators: [
      {
        name: "Lot Size Calculator",
        path: "/lotsize",
        icon: "bi-pie-chart-fill",
      },
      { name: "Pips Calculator", path: "/pips", icon: "bi-graph-up" },
      {
        name: "Profit Calculator",
        path: "/profit",
        icon: "bi-currency-dollar",
      },
    ],
  };

  return (
    <>
      <footer className="modern-footer">
        <div className="footer-container">
          {/* Animated Background Elements */}
          <div className="footer-bg-elements">
            <div className="bg-element bg-element-1"></div>
            <div className="bg-element bg-element-2"></div>
            <div className="bg-element bg-element-3"></div>
          </div>

          {/* Main Footer Content */}
          <div className="footer-content">
            <div className="d-flex justify-content-between align-items-start">
              {/* Brand Section */}
              <div className="footer-brand w-100">
                <div className="brand-logo">
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
                    <span className="brand-sub">Calculators</span>
                  </div>
                </div>

                <p className="brand-description">
                  Professional trading calculators designed to help forex and
                  CFD traders optimize their risk management and trading
                  strategies.
                </p>

                <div className="social-links-footer">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      rel="noreferrer"
                      target="_blank"
                      href={social.url}
                      className="social-link-footer"
                      aria-label={social.name}
                      style={{ "--social-color": social.color }}
                    >
                      <i className={`bi ${social.icon}`}></i>
                      <div className="social-tooltip">{social.name}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Calculators Links */}
              <div className="footer-section w-100 d-flex flex-column align-items-center">
                <h3 className="section-title">
                  <i className="bi bi-calculator"></i>
                  Calculators
                </h3>
                <ul className="footer-links">
                  {footerLinks.calculators.map((link, index) => (
                    <li key={index}>
                      <button
                        className="footer-link"
                        onClick={() => navigate(link.path)}
                      >
                        <i className={`bi ${link.icon}`}></i>
                        <span>{link.name}</span>
                        <div className="link-hover-effect"></div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Risk Disclaimer */}
            <div className="disclaimer-section mt-3">
              <div className="disclaimer-card">
                <div className="disclaimer-header">
                  <i className="bi bi-exclamation-triangle"></i>
                  <span>Risk Disclaimer</span>
                </div>
                <p className="disclaimer-text">
                  Trading forex and CFDs involves significant risk and may not
                  be suitable for all investors. Past performance is not
                  indicative of future results. Please ensure you fully
                  understand the risks involved and seek independent advice if
                  necessary. Our calculators are for educational purposes only
                  and should not be considered as investment advice.
                </p>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <div className="copyright">
                  <span>
                    © {new Date().getFullYear()} Trading Calculators. All rights
                    reserved.
                  </span>
                </div>
                <div className="footer-credits">
                  <span>Made with </span>
                  <i className="bi bi-heart-fill heart-icon"></i>
                  <span> for traders worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
