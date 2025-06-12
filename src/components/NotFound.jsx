import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(30);
  const [isHovered, setIsHovered] = useState(false);

  // Auto redirect countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const quickActions = [
    {
      icon: "bi-pie-chart-fill",
      title: "Lot Size",
      description: "Calculate position size",
      path: "/lotsize",
      color: "success",
    },
    {
      icon: "bi-graph-up",
      title: "Pips Calculator",
      description: "Measure price movements",
      path: "/pips",
      color: "warning",
    },
    {
      icon: "bi-currency-dollar",
      title: "Profit Calculator",
      description: "Estimate P&L",
      path: "/profit",
      color: "info",
    },
  ];

  const handleQuickAction = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="notfound-container">
        {/* Animated Background */}
        <div className="background-animation">
          <div className="floating-element element-1">
            <i className="bi bi-graph-down-arrow"></i>
          </div>
          <div className="floating-element element-2">
            <i className="bi bi-question-circle"></i>
          </div>
          <div className="floating-element element-3">
            <i className="bi bi-exclamation-triangle"></i>
          </div>
          <div className="floating-element element-4">
            <i className="bi bi-search"></i>
          </div>
          <div className="floating-element element-5">
            <i className="bi bi-arrow-left-circle"></i>
          </div>
        </div>

        <div className="notfound-content py-5 py-md-3">
          {/* Main 404 Section */}
          <div className="error-section">
            <div className="error-visual">
              <div className="error-number">
                <span className="digit">4</span>
                <div
                  className="digit-container"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className={`digit zero ${isHovered ? "spinning" : ""}`}>
                    0
                  </span>
                  <div className="zero-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                  </div>
                </div>
                <span className="digit">4</span>
              </div>

              <div className="error-chart">
                <div className="chart-container">
                  <div className="chart-bar bar-1"></div>
                  <div className="chart-bar bar-2"></div>
                  <div className="chart-bar bar-3"></div>
                  <div className="chart-bar bar-4"></div>
                  <div className="chart-bar bar-5"></div>
                </div>
                <div className="chart-line">
                  <div className="line-point point-1"></div>
                  <div className="line-point point-2"></div>
                  <div className="line-point point-3"></div>
                </div>
              </div>
            </div>

            <div className="error-message">
              <h1 className="error-title">Oops! Page Not Found</h1>
              <p className="error-description">
                Looks like this trading position doesn't exist in our portfolio.
                The page you're looking for might have been moved, deleted, or
                never existed in the first place.
              </p>

              <div className="error-stats">
                <div className="stat-item">
                  <i className="bi bi-bar-chart-line"></i>
                  <span>Error Rate: 0.01%</span>
                </div>
                <div className="stat-item">
                  <i className="bi bi-clock"></i>
                  <span>Auto-redirect in: {countdown}s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h2 className="actions-title">
              <i className="bi bi-lightning-fill"></i>
              Quick Actions
            </h2>
            <div className="actions-grid">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className={`action-card ${action.color}`}
                  onClick={() => handleQuickAction(action.path)}
                >
                  <div className="action-icon">
                    <i className={`bi ${action.icon}`}></i>
                  </div>
                  <div className="action-content">
                    <h3 className="action-title">{action.title}</h3>
                    <p className="action-description">{action.description}</p>
                  </div>
                  <div className="action-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                  <div className="action-hover-effect"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Help */}
          <div className="help-actions">
            <button className="help-btn primary" onClick={() => navigate("/")}>
              <i className="bi bi-house"></i>
              Go Home
            </button>
            <button
              className="help-btn secondary"
              onClick={() => window.history.back()}
            >
              <i className="bi bi-arrow-left"></i>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
