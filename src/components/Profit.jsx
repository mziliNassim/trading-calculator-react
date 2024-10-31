import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import ResultsProfit from "./results/ResultsProfit";

import { pairs } from "../db/pairs";

const Profit = () => {
  const [resultsShow, setResultsShow] = useState(false);
  const [profit, setProfit] = useState();
  const [formulaire, setFormulaire] = useState({
    pair: "XAU/USD",
    lotsize: 0.01,
    pips: 50,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire({ ...formulaire, [name]: value });
  };

  const checkFields = () => {
    if (formulaire.pair == "") alert("Invalid Pair!");
    else if (formulaire.lotsize == "") alert("Invalid LotSize!");
    else if (formulaire.pips == "") alert("Invalid Pips!");
    else return true;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkFields()) {
      let profitt;
      if (formulaire.pair == "XAU/USD" || formulaire.pair == "Forex Pairs") {
        profitt = formulaire.lotsize * formulaire.pips * 10;
      } else if (formulaire.pair == "US100" || formulaire.pair == "US30") {
        profitt = formulaire.lotsize * formulaire.pips;
      } else if (formulaire.pair == "JPY Pairs") {
        profitt = formulaire.lotsize * formulaire.pips * 6.53;
      }
      setProfit(profitt);
      setResultsShow(true);
    }
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center main-container">
        <Form className="form" onSubmit={handleSubmit}>
          <h2 className="text-center eria-title">Profit Calculator</h2>
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

          <Form.Group className="mb-3" controlId="formBasicLotSize">
            <Form.Label>LotSize</Form.Label>
            <Form.Control
              type="text"
              placeholder="0.02"
              name="lotsize"
              value={formulaire.lotsize}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPips">
            <Form.Label>Pips</Form.Label>
            <Form.Control
              type="number"
              placeholder="50"
              name="pips"
              value={formulaire.pips}
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

      <ResultsProfit
        formulaire={formulaire}
        profit={profit}
        show={resultsShow}
        onHide={() => setResultsShow(false)}
      />
    </>
  );
};

export default Profit;
