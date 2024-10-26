import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { pairs } from "../db/pairs";

const Profit = () => {
  const [resultsShow, setResultsShow] = useState(false);
  const [formulaire, setFormulaire] = useState({
    pair: "XAU/USD",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire({ ...formulaire, [name]: value });
  };

  const handleSubmit = () => {};

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

          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Calculate
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Profit;
