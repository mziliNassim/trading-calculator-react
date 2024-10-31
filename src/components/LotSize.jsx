import React, { useState } from "react";
import { pairs } from "../db/pairs.js";
import { Button, Form } from "react-bootstrap";
import ResultsLotSize from "./results/ResultsLotSize";

const LotSize = () => {
  const [resultsShow, setResultsShow] = useState(false);
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
    if (formulaire.pair == "") alert("Invalid Pair!");
    else if (formulaire.balance == "") alert("Invalid Balnce!");
    else if (formulaire.risk == "") alert("Invalid Risk!");
    else if (formulaire.sl == "") alert("Invalid Sl!");
    else return true;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let resultt;
    if (checkFields()) {
      const moneyRisk = (formulaire.balance * formulaire.risk) / 100;
      if (formulaire.pair === "XAU/USD") {
        resultt = {
          moneyRisk,
          loteSize: moneyRisk / (formulaire.sl * 10),
        };
      } else if (formulaire.pair === "US100" || formulaire.pair === "US30") {
        resultt = {
          moneyRisk,
          loteSize: moneyRisk / formulaire.sl,
        };
      } else if (formulaire.pair === "Forex Pairs") {
        resultt = {
          moneyRisk,
          loteSize: moneyRisk / formulaire.sl / 10,
        };
      } else if (formulaire.pair === "JPY Pairs") {
        resultt = {
          moneyRisk,
          loteSize: moneyRisk / (formulaire.sl * 6.53),
        };
      }
      setResult(resultt);
      setResultsShow(true);
    }
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center main-container">
        <Form className="form" onSubmit={handleSubmit}>
          <h2 className="text-center eria-title">LotSize Calculator</h2>
          <Form.Group className="mb-3" controlId="formBasicCurrency">
            <Form.Label>Currency Pair</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="pair"
              value={formulaire.pair}
              onChange={handleChange}
            >
              <option selected disabled>
                select Currency Or Pair
              </option>
              {pairs.length > 0 &&
                pairs.map((pair, i) => {
                  return (
                    <option key={i} value={pair}>
                      {pair}
                    </option>
                  );
                })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBalance">
            <Form.Label>Account Balance, $</Form.Label>
            <Form.Control
              type="number"
              placeholder="100000"
              name="balance"
              value={formulaire.balance}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRisk">
            <Form.Label>Risk Ratio, % </Form.Label>
            <Form.Control
              type="number"
              placeholder="1"
              name="risk"
              value={formulaire.risk}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicStop">
            <Form.Label>Stop-Loss, pips</Form.Label>
            <Form.Control
              type="number"
              placeholder="50"
              name="sl"
              value={formulaire.sl}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Calculate
            </Button>
          </div>
        </Form>
      </div>

      <ResultsLotSize
        formulaire={formulaire}
        result={result}
        show={resultsShow}
        onHide={() => setResultsShow(false)}
      />
    </>
  );
};

export default LotSize;
