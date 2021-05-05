import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [row, setRow] = useState({
    part_id: "",
    name: "",
    quantity_available: "",
    current_cost: "",
  });

  // validates id by seeing if its a positive int
  function validID() {
    return row.part_id > 0 && row.part_id % 1 === 0;
  }

  // validates id by seeing if its a positive int
  function validQuantity() {
    return row.quantity_available > 0 && row.quantity_available % 1 === 0;
  }

  // validates quantity by seeing if its a positive and in a money format
  function validCost() {
    const dec = row.current_cost.toString().indexOf(".");
    // checks if its a float
    if (dec !== -1) {
      return (
        row.current_cost > 0 && row.current_cost.toString().length - dec <= 3
      );
    }
    return row.current_cost > 0;
  }

  // validates all by checking all validating functions
  function valid(params) {
    return validID() && row.name.length > 0 && validQuantity() && validCost();
  }

  const handleClose = () => {
    props.setShow(false);
    setRow({
      part_id: "",
      name: "",
      quantity_available: "",
      current_cost: "",
    });
  }
  return (
    <div>
      {/* modal */}
      <Modal
        show={props.show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title> Insert </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {/* inputs id and validates */}
          <Form.Group>
            <Form.Label>Part ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Part ID"
              value={row.part_id}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, part_id: e.target.value }))
              }
            />
          </Form.Group>
          {!validID() && <h5>Enter Valid ID</h5>}
          {/* inputs name and validates */}
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={row.name}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </Form.Group>
          {!row.name.length > 0 && <h5>Enter Valid Name</h5>}
          {/* inputs quantity and validates */}
          <Form.Group>
            <Form.Label>Quantity Available</Form.Label>
            <Form.Control
              placeholder="Enter Quantity Available"
              type="number"
              value={row.quantity_available}
              onChange={(e) =>
                setRow((prev) => ({
                  ...prev,
                  quantity_available: e.target.value,
                }))
              }
            />
          </Form.Group>
          {!validQuantity() && <h5>Enter Valid Quantity</h5>}
          {/* inputs cost and validates */}
          <Form.Group>
            <Form.Label>Cost</Form.Label>
            <Form.Control
              placeholder="Enter Cost"
              type="number"
              value={row.current_cost}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, current_cost: e.target.value }))
              }
            />
          </Form.Group>
          {!validCost() && <h5>Enter Valid Cost</h5>}
        </Modal.Body>
        {/* options */}
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            {" "}
            Cancel{" "}
          </Button>
          {/* processes if its a valid part */}
          <Button
            variant="primary"
            disabled={!valid()}
            onClick={() => {
              props.addPart(row);
              setRow({
                part_id: "",
                name: "",
                quantity_available: "",
                current_cost: "",
              });
              props.setShow(false);
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Confirmation_Deltete;
