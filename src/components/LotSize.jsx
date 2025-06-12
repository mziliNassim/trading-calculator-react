import React, { useState } from "react";
import { toast } from "sonner";

import { pairs } from "../data/pairs";

const LotSize = () => {
  const [resultsShow, setResultsShow] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formulaire, setFormulaire] = useState({
    pair: "XAU/USD",
    balance: 1000,
    risk: 1,
    sl: 50,
  });
  const [result, setResult] = useState({
    moneyRisk: 0,
    loteSize: 0,
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
    if (!formulaire.balance || formulaire.balance <= 0) {
      toast.warning("Please enter a valid account balance!", {
        action: { label: "x" },
      });
      return false;
    }
    if (!formulaire.risk || formulaire.risk <= 0) {
      toast.warning("Please enter a valid risk percentage!", {
        action: { label: "x" },
      });
      return false;
    }
    if (!formulaire.sl || formulaire.sl <= 0) {
      toast.warning("Please enter a valid stop-loss value!", {
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
        const moneyRisk = (formulaire.balance * formulaire.risk) / 100;
        let calculatedResult;

        if (formulaire.pair === "XAU/USD") {
          calculatedResult = {
            moneyRisk,
            loteSize: moneyRisk / (formulaire.sl * 10),
          };
        } else if (formulaire.pair === "US100" || formulaire.pair === "US30") {
          calculatedResult = {
            moneyRisk,
            loteSize: moneyRisk / formulaire.sl,
          };
        } else if (formulaire.pair === "Forex Pairs") {
          calculatedResult = {
            moneyRisk,
            loteSize: moneyRisk / formulaire.sl / 10,
          };
        } else if (formulaire.pair === "JPY Pairs") {
          calculatedResult = {
            moneyRisk,
            loteSize: moneyRisk / (formulaire.sl * 6.53),
          };
        } else {
          // Default forex calculation
          calculatedResult = {
            moneyRisk,
            loteSize: moneyRisk / (formulaire.sl * 10),
          };
        }

        setResult(calculatedResult);
        setResultsShow(true);
        setIsCalculating(false);
      }, 800);
    }
  };

  const resetForm = () => {
    setFormulaire({
      pair: "XAU/USD",
      balance: 1000,
      risk: 1,
      sl: 50,
    });
    setResultsShow(false);
    setResult({ moneyRisk: 0, loteSize: 0 });
  };

  return (
    <>
      <div className="calculator-container lotsize  py-5">
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="floating-icon">💰</div>
          <div className="floating-icon">📊</div>
          <div className="floating-icon">💹</div>
          <div className="floating-icon">🎯</div>
          <div className="floating-icon">⚡</div>
          <div className="floating-icon">🔥</div>
        </div>

        <div className="calculator-wrapper  my-5">
          {/* Header Section */}
          <div className="calculator-header lotsize">
            <div className="header-icon">
              <i className="bi bi-pie-chart-fill"></i>
            </div>
            <div className="header-content">
              <h1 className="calculator-title">Lot Size Calculator</h1>
              <p className="calculator-subtitle">
                Calculate your optimal position size with precision
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

                {/* Account Balance */}
                <div className="form-group">
                  <label className="form-label text-light">
                    <i className="bi bi-wallet2"></i>
                    Account Balance
                  </label>
                  <div className="input-wrapper">
                    <span className="input-prefix">$</span>
                    <input
                      type="number"
                      name="balance"
                      value={formulaire.balance}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="100000"
                      min="1"
                    />
                  </div>
                </div>

                {/* Risk Ratio */}
                <div className="form-group">
                  <label className="form-label text-light">
                    <i className="bi bi-percent"></i>
                    Risk Ratio
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="risk"
                      value={formulaire.risk}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="1"
                      min="0.1"
                      max="100"
                      step="0.1"
                    />
                    <span className="input-suffix text-light">%</span>
                  </div>
                </div>

                {/* Stop Loss */}
                <div className="form-group">
                  <label className="form-label text-light">
                    <i className="bi bi-shield-x"></i>
                    Stop-Loss
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="sl"
                      value={formulaire.sl}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="50"
                      min="1"
                    />
                    <span className="input-suffix text-light">pips</span>
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
                  className="btn-primary"
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
                      Calculate
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
                  Calculation Results
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
                    <i className="bi bi-exclamation-triangle-fill"></i>
                    <span>Money at Risk</span>
                  </div>
                  <div className="result-value">
                    ${result.moneyRisk.toFixed(2)}
                  </div>
                  <div className="result-description">
                    Amount you could lose on this trade
                  </div>
                </div>

                <div className="result-card">
                  <div className="result-header">
                    <i className="bi bi-pie-chart-fill"></i>
                    <span>Optimal Lot Size</span>
                  </div>
                  <div className="result-value">
                    {result.loteSize.toFixed(4)}
                  </div>
                  <div className="result-description">
                    Recommended position size
                  </div>
                </div>
              </div>

              <div className="results-summary">
                <div className="summary-header">
                  <i className="bi bi-info-circle"></i>
                  Trade Summary
                </div>
                <div className="summary-content">
                  <div className="summary-row">
                    <span>Pair:</span>
                    <strong>{formulaire.pair}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Account Balance:</span>
                    <strong>${formulaire.balance.toLocaleString()}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Risk Percentage:</span>
                    <strong>{formulaire.risk}%</strong>
                  </div>
                  <div className="summary-row">
                    <span>Stop Loss:</span>
                    <strong>{formulaire.sl} pips</strong>
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

export default LotSize;
