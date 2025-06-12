import React, { useState } from "react";
import { toast } from "sonner";

import { pairs } from "../data/pairs";

const Profit = () => {
  const [resultsShow, setResultsShow] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formulaire, setFormulaire] = useState({
    pair: "XAU/USD",
    lotsize: 0.01,
    pips: 50,
  });
  const [result, setResult] = useState({
    profit: 0,
    profitPerPip: 0,
    totalValue: 0,
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
      !formulaire.lotsize ||
      isNaN(formulaire.lotsize) ||
      formulaire.lotsize <= 0
    ) {
      toast.warning("Please enter a valid lot size!", {
        action: { label: "x" },
      });
      return false;
    }
    if (!formulaire.pips || isNaN(formulaire.pips) || formulaire.pips <= 0) {
      toast.warning("Please enter a valid number of pips!", {
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
        const lotsize = parseFloat(formulaire.lotsize);
        const pips = parseFloat(formulaire.pips);
        let profit;
        let profitPerPip;

        if (
          formulaire.pair === "XAU/USD" ||
          formulaire.pair === "Forex Pairs"
        ) {
          profit = lotsize * pips * 10;
          profitPerPip = lotsize * 10;
        } else if (formulaire.pair === "US100" || formulaire.pair === "US30") {
          profit = lotsize * pips;
          profitPerPip = lotsize;
        } else if (formulaire.pair === "JPY Pairs") {
          profit = lotsize * pips * 6.53;
          profitPerPip = lotsize * 6.53;
        } else {
          // Default calculation
          profit = lotsize * pips * 10;
          profitPerPip = lotsize * 10;
        }

        setResult({
          profit: profit,
          profitPerPip: profitPerPip,
          totalValue: Math.abs(profit),
        });
        setResultsShow(true);
        setIsCalculating(false);
      }, 800);
    }
  };

  const resetForm = () => {
    setFormulaire({
      pair: "XAU/USD",
      lotsize: 0.01,
      pips: 50,
    });
    setResultsShow(false);
    setResult({ profit: 0, profitPerPip: 0, totalValue: 0 });
  };

  return (
    <>
      <div className="calculator-container py-5">
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
          <div className="calculator-header profit">
            <div className="header-icon">
              <i className="bi bi-cash-coin"></i>
            </div>
            <div className="header-content">
              <h1 className="calculator-title">Profit Calculator</h1>
              <p className="calculator-subtitle">
                Calculate your potential profit and loss with precision
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

                {/* Lot Size */}
                <div className="form-group ">
                  <label className="form-label text-light">
                    <i className="bi bi-layers"></i>
                    Lot Size
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="lotsize"
                      value={formulaire.lotsize}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="0.01"
                      step="0.001"
                      min="0.001"
                    />
                    <span className="input-suffix text-light">lots</span>
                  </div>
                </div>

                {/* Pips */}
                <div className="form-group ">
                  <label className="form-label text-light">
                    <i className="bi bi-graph-up"></i>
                    Pips Movement
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="pips"
                      value={formulaire.pips}
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
                      Calculate Profit
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
                  Profit Calculation Results
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
                        result.profit >= 0
                          ? "bi-arrow-up-circle-fill text-success"
                          : "bi-arrow-down-circle-fill text-danger"
                      }`}
                    ></i>
                    <span>Total Profit/Loss</span>
                  </div>
                  <div
                    className={`result-value ${
                      result.profit >= 0 ? "text-success" : "text-danger"
                    }`}
                  >
                    {result.profit >= 0 ? "+" : ""}${result.profit.toFixed(2)}
                  </div>
                  <div className="result-description">
                    {result.profit >= 0 ? "Potential profit" : "Potential loss"}{" "}
                    from this trade
                  </div>
                </div>

                <div className="result-card">
                  <div className="result-header">
                    <i className="bi bi-currency-dollar"></i>
                    <span>Profit Per Pip</span>
                  </div>
                  <div className="result-value">
                    ${result.profitPerPip.toFixed(4)}
                  </div>
                  <div className="result-description">
                    Value per pip movement
                  </div>
                </div>
              </div>

              <div className="profit-visualization">
                <div className="visualization-header">
                  <i className="bi bi-bar-chart"></i>
                  <span>Profit Breakdown</span>
                </div>
                <div className="profit-bar-container">
                  <div className="profit-bar">
                    <div
                      className={`profit-fill ${
                        result.profit >= 0
                          ? "profit-positive"
                          : "profit-negative"
                      }`}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="profit-labels">
                    <span className="profit-label-left">$0</span>
                    <span
                      className={`profit-label-right ${
                        result.profit >= 0 ? "text-success" : "text-danger"
                      }`}
                    >
                      ${Math.abs(result.profit).toFixed(2)}
                    </span>
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
                    <span>Lot Size:</span>
                    <strong>
                      {parseFloat(formulaire.lotsize).toFixed(3)} lots
                    </strong>
                  </div>
                  <div className="summary-row">
                    <span>Pips Movement:</span>
                    <strong>{formulaire.pips} pips</strong>
                  </div>
                  <div className="summary-row">
                    <span>Profit Per Pip:</span>
                    <strong>${result.profitPerPip.toFixed(4)}</strong>
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

export default Profit;
