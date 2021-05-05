import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ConfirmationDeltete(props) {
  const [show, setShow] = useState(false);

  const [modItem, setModItem] = useState({ part_id: 0, name: "", quantity_available: 0, current_cost: 0 })
  const handleClose = () => {
    setShow(false);
  };

  // resets item when opened
  const handleShow = () => {
    setShow(true);
    setModItem({
      part_id: props.item.part_id,
      name: props.item.name,
      quantity_available: props.item.quantity_available,
      current_cost: props.item.current_cost
    })
  };

  // valid quantity is more than 0 and is not a float
  function validQuantity(input) {
    return parseInt(input) > 0 && input.toString().indexOf(".") === -1;
  }
  // valid cost is more than 0 and in money format
  function validCost(input) {
    const dec = input.toString().indexOf(".");
    if (dec !== -1) {
      return (
        parseFloat(input) > 0 && input.toString().length - dec <= 3
      );
    }
    return parseFloat(input) > 0;
  }
  // valid names are nonempty
  function validName(input) {
    return input.length > 0
  }

  return (
    <div>
      {/* opens modal */}
      <Button variant="primary" onClick={handleShow}>
        Modify
      </Button>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {/* prompts user input for new values */}
          ID
          <h5>{props.item.part_id}</h5>
          <Form.Group>
            <Form.Label>New Name</Form.Label>
            <Form.Control
              placeholder="Enter New Name"
              value={modItem.name}
              onFocus={e => e.target.select()}
              onChange={(e) => setModItem(prev => ({ ...prev, name: e.target.value }))}
            />
          </Form.Group>
          {!validName(modItem.name) && <h5>Invalid Name</h5>}
          <Form.Group>
            <Form.Label>New Quantity</Form.Label>
            <Form.Control
              placeholder="Enter New Quantity"
              type="number"
              onFocus={e => e.target.select()}
              value={modItem.quantity_available}
              onChange={(e) => setModItem(prev => ({ ...prev, quantity_available: e.target.value }))}
            />
          </Form.Group>
          {!validQuantity(modItem.quantity_available) && <h5>Invalid Quantity</h5>}
          <Form.Group>
            <Form.Label>New Price</Form.Label>
            <Form.Control
              placeholder="Enter New Price"
              type="number"
              onFocus={e => e.target.select()}
              value={modItem.current_cost}
              onChange={(e) => setModItem(prev => ({ ...prev, current_cost: e.target.value }))}
            />
          </Form.Group>
          {!validCost(modItem.current_cost) && <h5>Invalid Cost</h5>}
        </Modal.Body>
        {/* bottom options */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {/* processes modification with modify part function */}
          <Button
            variant="primary"
            disabled={!validName(modItem.name) || !validQuantity(modItem.quantity_available) || !validCost(modItem.current_cost)}
            onClick={() => {
              props.modifyPart(modItem);
              handleClose();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmationDeltete;
