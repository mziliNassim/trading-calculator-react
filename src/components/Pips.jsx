import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { pairs } from "../db/pairs";
import ResultsPips from "./results/ResultsPips";

const Pips = () => {
  const [resultsShow, setResultsShow] = useState(false);
  const [formulaire, setFormulaire] = useState({
    pair: "XAU/USD",
    price1: "2700.00",
    price2: "2705.00",
    pips: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire({ ...formulaire, [name]: value });
  };

  const checkFields = () => {
    if (formulaire.pair == "") alert("Invalid Pair!");
    else if (formulaire.price1 == "") alert("Invalid Price 1!");
    else if (formulaire.price2 == "") alert("Invalid Price 2!");
    else return true;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkFields()) {
      let pips;
      if (formulaire.pair == "XAU/USD") {
        pips = Math.abs(
          Math.round((formulaire.price1 - formulaire.price2) * 10)
        );
      } else if (formulaire.pair == "US100" || formulaire.pair == "US30") {
        pips = Math.abs(Math.round(formulaire.price1 - formulaire.price2));
      } else if (formulaire.pair == "Forex Pairs") {
        pips = Math.abs(
          Math.round((formulaire.price1 - formulaire.price2) * 10000)
        );
      } else if (formulaire.pair == "JPY Pairs") {
        pips = Math.abs(
          Math.round((formulaire.price1 - formulaire.price2) * 100)
        );
      }
      setFormulaire({ ...formulaire, pips });
      setResultsShow(true);
    }
  };

  return (
    <>
      <>
        <div className="d-flex flex-column align-items-center justify-content-center main-container">
          <Form className="form" onSubmit={handleSubmit}>
            <h2 className="text-center eria-title">Pips Calculator</h2>
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

            <Form.Group className="mb-3" controlId="formBasicPrice1">
              <Form.Label>Price 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="6543.897"
                name="price1"
                value={formulaire.price1}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice2">
              <Form.Label>Price 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="6543.897"
                name="price2"
                value={formulaire.price2}
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

        <ResultsPips
          result={formulaire.pips}
          show={resultsShow}
          onHide={() => setResultsShow(false)}
        />
      </>
    </>
  );
};

export default Pips;
