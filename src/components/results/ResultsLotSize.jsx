import React from "react";
import { Button, Container, Modal } from "react-bootstrap";

const ResultsLotSize = (props) => {
  return (
    <>
      <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            LotSize Calcularot Results
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className="d-flex flex-column align-items-center justify-content-center">
            <table>
              <tr>
                <th>
                  <strong>Money To Risk : </strong>
                </th>
                <td>{props.result.moneyRisk} $</td>
              </tr>
              <tr>
                <th>
                  <strong>LoteSize : </strong>
                </th>
                <td>{props.result.loteSize}</td>
              </tr>
            </table>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResultsLotSize;
