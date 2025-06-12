import React, { useState } from "react";
import { toast } from "sonner";

import { pairs } from "../data/pairs";

const Pips = () => {
  const [resultsShow, setResultsShow] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formulaire, setFormulaire] = useState({
    pair: "XAU/USD",
    price1: "2700.00",
    price2: "2705.00",
  });
  const [result, setResult] = useState({
    pips: 0,
    difference: 0,
    direction: "up",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire({ ...formulaire, [name]: value });
  };

  const checkFields = () => {
    if (!formulaire.pair) {
      toast.warning("Please select a currency pair!", {
        action: { label: "x" },
      });
      return false;
    }
    if (
      !formulaire.price1 ||
      isNaN(formulaire.price1) ||
      formulaire.price1 <= 0
    ) {
      toast.warning("Please enter a valid Price 1!", {
        action: { label: "x" },
      });
      return false;
    }
    if (
      !formulaire.price2 ||
      isNaN(formulaire.price2) ||
      formulaire.price2 <= 0
    ) {
      toast.warning("Please enter a valid Price 2!", {
        action: { label: "x" },
      });
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (checkFields()) {
      setIsCalculating(true);

      // Simulate calculation delay for better UX
      setTimeout(() => {
        const price1 = parseFloat(formulaire.price1);
        const price2 = parseFloat(formulaire.price2);
        const difference = price2 - price1;
        const direction = difference >= 0 ? "up" : "down";

        let pips;

        if (formulaire.pair === "XAU/USD") {
          pips = Math.abs(Math.round(difference * 10));
        } else if (formulaire.pair === "US100" || formulaire.pair === "US30") {
          pips = Math.abs(Math.round(difference));
        } else if (formulaire.pair === "Forex Pairs") {
          pips = Math.abs(Math.round(difference * 10000));
        } else if (formulaire.pair === "JPY Pairs") {
          pips = Math.abs(Math.round(difference * 100));
        } else {
          // Default forex calculation
          pips = Math.abs(Math.round(difference * 10000));
        }

        setResult({
          pips,
          difference: Math.abs(difference),
          direction,
        });
        setResultsShow(true);
        setIsCalculating(false);
      }, 800);
    }
  };

  const resetForm = () => {
    setFormulaire({
      pair: "XAU/USD",
      price1: "2700.00",
      price2: "2705.00",
    });
    setResultsShow(false);
    setResult({ pips: 0, difference: 0, direction: "up" });
  };

  return (
    <>
      <div className="calculator-container  py-5">
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="floating-icon">💰</div>
          <div className="floating-icon">📊</div>
          <div className="floating-icon">💹</div>
          <div className="floating-icon">🎯</div>
          <div className="floating-icon">⚡</div>
          <div className="floating-icon">🔥</div>
        </div>

        <div className="calculator-wrapper my-5">
          {/* Header Section */}
          <div className="calculator-header pips">
            <div className="header-icon">
              <i className="bi bi-graph-up-arrow"></i>
            </div>
            <div className="header-content">
              <h1 className="calculator-title">Pips Calculator</h1>
              <p className="calculator-subtitle">
                Calculate price movements in pips with precision
              </p>
            </div>
          </div>

          {/* Main Calculator Form */}
          <div className="calculator-content">
            <div className="calculator-form">
              <div className="form-grid">
                {/* Currency Pair Selection */}
                <div className="form-group">
                  <label className="form-label text-light">
                    <i className="bi bi-currency-exchange"></i>
                    Currency Pair
                  </label>
                  <div className="select-wrapper">
                    <select
                      name="pair"
                      value={formulaire.pair}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {pairs.map((pair, i) => (
                        <option key={i} value={pair}>
                          {pair}
                        </option>
                      ))}
                    </select>
                    <i className="bi bi-chevron-down select-arrow"></i>
                  </div>
                </div>

                {/* Price 1 */}
                <div className="form-group">
                  <label className="form-label text-light">
                    <i className="bi bi-arrow-up-circle"></i>
                    Entry Price
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="price1"
                      value={formulaire.price1}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="2700.00"
                      step="0.001"
                    />
                  </div>
                </div>

                {/* Price 2 */}
                <div className="form-group ">
                  <label className="form-label text-light">
                    <i className="bi bi-arrow-down-circle"></i>
                    Exit Price
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="price2"
                      value={formulaire.price2}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="2705.00"
                      step="0.001"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={resetForm}
                >
                  <i className="bi bi-arrow-clockwise"></i>
                  Reset
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleSubmit}
                  disabled={isCalculating}
                >
                  {isCalculating ? (
                    <>
                      <div className="spinner"></div>
                      Calculating...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-calculator"></i>
                      Calculate Pips
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {resultsShow && (
            <div className="results-section">
              <div className="results-header">
                <h3>
                  <i className="bi bi-graph-up-arrow"></i>
                  Pips Calculation Results
                </h3>
                <button
                  className="close-btn"
                  onClick={() => setResultsShow(false)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="results-grid">
                <div className="result-card">
                  <div className="result-header">
                    <i
                      className={`bi ${
                        result.direction === "up"
                          ? "bi-arrow-up-circle-fill text-success"
                          : "bi-arrow-down-circle-fill text-danger"
                      }`}
                    ></i>
                    <span>Pips Movement</span>
                  </div>
                  <div className="result-value">
                    {result.pips.toLocaleString()} pips
                  </div>
                  <div className="result-description">
                    Price moved{" "}
                    {result.direction === "up" ? "upward" : "downward"}
                  </div>
                </div>

                <div className="result-card">
                  <div className="result-header">
                    <i className="bi bi-arrows-expand"></i>
                    <span>Price Difference</span>
                  </div>
                  <div className="result-value">
                    {result.difference.toFixed(5)}
                  </div>
                  <div className="result-description">
                    Absolute price difference
                  </div>
                </div>
              </div>

              <div className="results-summary">
                <div className="summary-header">
                  <i className="bi bi-info-circle"></i>
                  Movement Summary
                </div>
                <div className="summary-content">
                  <div className="summary-row">
                    <span>Pair:</span>
                    <strong>{formulaire.pair}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Entry Price:</span>
                    <strong>{parseFloat(formulaire.price1).toFixed(5)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Exit Price:</span>
                    <strong>{parseFloat(formulaire.price2).toFixed(5)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Direction:</span>
                    <strong
                      className={
                        result.direction === "up"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {result.direction === "up" ? "↗ Bullish" : "↘ Bearish"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Pips;
