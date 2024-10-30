import React from "react";
import { Button, Container, Modal } from "react-bootstrap";

const Results = (props) => {
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
            Profit Calcularot Results
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className="d-flex flex-column align-items-center justify-content-center">
            <table>
              <tr>
                <th>
                  <strong>Profit : </strong>
                </th>
                <td>{props.profit} $</td>
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

export default Results;
