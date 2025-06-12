import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Mock navigation function for demo
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
    alert(`Would navigate to: ${path}`);
  };

  const features = [
    {
      icon: "bi-pie-chart-fill",
      title: "Lot Size Calculator",
      description:
        "Calculate optimal position size based on your risk parameters",
      path: "/lotsize",
      color: "info",
      gradient: "linear-gradient(135deg, #0d6efd, #6f42c1)",
    },
    {
      icon: "bi-graph-up",
      title: "Pips Calculator",
      description: "Measure price movements in pips between two price points",
      path: "/pips",
      color: "success",
      gradient: "linear-gradient(135deg, #198754, #20c997)",
    },
    {
      icon: "bi-currency-dollar",
      title: "Profit Calculator",
      description: "Estimate potential profit/loss from your trades",
      path: "/profit",
      color: "warning",
      gradient: "linear-gradient(135deg, #fd7e14, #dc3545)",
    },
  ];

  return (
    <>
      <div className="modern-trading-app">
        {/* Animated Background */}
        <div className="bg-animated">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        {/* Hero Section */}
        <section className="hero-section position-relative py-5 py-md-3">
          <div className="container py-5 py-md-3">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="hero-content text-center text-lg-start">
                  <h1 className="display-3 fw-bold text-white mb-4 hero-title">
                    Precision Trading{" "}
                    <span className="text-gradient animated-gradient">
                      Calculators
                    </span>
                  </h1>
                  <p className="lead text-light mb-5 fs-4">
                    Optimize your trading strategy with our suite of
                    professional calculators designed for forex and CFD traders.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                    <Link
                      to="/lotsize"
                      className="btn btn-primary btn-lg px-5 py-3 modern-btn primary-btn"
                    >
                      <span className="btn-text">Start Calculating</span>
                      <i className="bi bi-arrow-right ms-2 btn-icon"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-graphic-container">
                  <div className="hero-graphic">
                    {/* Central Calculator */}
                    <div className="graphic-main">
                      <i className="bi bi-calculator"></i>
                    </div>

                    {/* Floating Elements */}
                    <div className="graphic-element element-1">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="graphic-element element-2">
                      <i className="bi bi-currency-exchange"></i>
                    </div>
                    <div className="graphic-element element-3">
                      <i className="bi bi-cash-stack"></i>
                    </div>
                    <div className="graphic-element element-4">
                      <i className="bi bi-trending-up"></i>
                    </div>

                    {/* Animated Rings */}
                    <div className="animated-ring ring-1"></div>
                    <div className="animated-ring ring-2"></div>
                    <div className="animated-ring ring-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section py-3 position-relative">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold text-white mb-4">
                Our Trading Tools
              </h2>
              <p className="lead text-light fs-3">
                Professional-grade calculators for every trading need
              </p>
            </div>

            <div className="row g-4">
              {features.map((feature, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <Link
                    to={feature.path}
                    className="card feature-card h-100 border-0 shadow-lg"
                    style={{ "--feature-gradient": feature.gradient }}
                  >
                    <div className="card-body p-5 text-center">
                      <div className={`icon-wrapper mb-4 bg-${feature.color}`}>
                        <i className={`bi ${feature.icon}`}></i>
                      </div>

                      <h3 className="h4 fw-bold mb-3 text-light">
                        {feature.title}
                      </h3>

                      <p className="text-light fs-6">{feature.description}</p>

                      <button
                        className={`btn btn-${feature.color} modern-btn feature-btn`}
                      >
                        <span>Try Now</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </button>
                    </div>
                    <div className="card-gradient-overlay"></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="steps-section py-3 position-relative">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold text-white mb-4">
                How It Works
              </h2>
              <p className="lead text-light fs-3">
                Get accurate calculations in just 3 simple steps
              </p>
            </div>

            <div className="row g-4">
              {[
                {
                  step: "1",
                  title: "Select Your Instrument",
                  description:
                    "Choose from forex pairs, commodities, or indices to get precise calculations.",
                  icon: "bi-bullseye",
                },
                {
                  step: "2",
                  title: "Enter Your Parameters",
                  description:
                    "Input your account balance, risk percentage, and other trade details.",
                  icon: "bi-gear-fill",
                },
                {
                  step: "3",
                  title: "Get Instant Results",
                  description:
                    "Receive precise calculations to optimize your trading strategy.",
                  icon: "bi-lightning-fill",
                },
              ].map((step, index) => (
                <div className="col-md-4" key={index}>
                  <div className="step-card position-relative">
                    {/* Connecting Line */}
                    {index < 2 && (
                      <div className="connecting-line d-none d-md-block"></div>
                    )}

                    <div className="step-content text-center">
                      <div className="step-number mb-4">{step.step}</div>

                      <div className="step-icon mb-4">
                        <i className={`bi ${step.icon}`}></i>
                      </div>

                      <h3 className="h4 fw-bold text-white mb-3">
                        {step.title}
                      </h3>

                      <p className="text-light">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-card text-center d-flex flex-column justify-content-center align-items-center p-5">
                  <h2 className="display-5 fw-bold text-white mb-4">
                    Ready to Optimize Your Trading?
                  </h2>
                  <p className="lead text-light mb-5 fs-4">
                    Join thousands of traders who trust our calculators for
                    precise risk management.
                  </p>
                  <Link
                    to="/lotsize"
                    className="btn btn-primary btn-lg px-5 py-3 modern-btn cta-btn"
                    style={{ width: "fit-content" }}
                  >
                    <span className="btn-text">Get Started Free</span>
                    <i className="bi bi-arrow-right ms-2 btn-icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      
    </>
  );
};

export default Home;
