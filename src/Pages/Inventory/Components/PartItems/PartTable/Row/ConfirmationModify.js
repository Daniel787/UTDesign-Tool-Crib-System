import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ConfirmationDeltete(props) {
  const [show, setShow] = useState(false);

  const [modItem, setModItem] = useState({ part_id: 0, name: "", quantity_available: 0, current_cost: 0 })
  const handleClose = () => {
    setModItem({ part_id: 0, name: "", quantity_available: 0, current_cost: 0 })
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setModItem({
      part_id: props.item.part_id,
      name: props.item.name,
      quantity_available: props.item.quantity_available,
      current_cost: props.item.current_cost
    })
  };

  function validQuantity(input) {
    return parseInt(input) > 0 && input.toString().indexOf(".") === -1;
  }
  function validCost(input) {
    const dec = input.toString().indexOf(".");
    if (dec !== -1) {
      return (
        parseFloat(input) > 0 && input.length - dec <= 3
      );
    }
    return parseFloat(input) > 0;

  }
  function validName(input) {
    return input.length > 0
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Modify
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          ID : {props.item.part_id} <br />
          Name : <input value={modItem.name} onChange={(e) => setModItem(prev => ({ ...prev, name: e.target.value }))} /> <br />
          {!validName(modItem.name) && <h3>Invalid Name</h3>}
          New Quantity : <input value={modItem.quantity_available} onChange={(e) => setModItem(prev => ({ ...prev, quantity_available: e.target.value }))} /><br />
          {!validQuantity(modItem.quantity_available) && <h3>Invalid Quantity</h3>}
          New Price : $<input value={modItem.current_cost} onChange={(e) => setModItem(prev => ({ ...prev, current_cost: e.target.value }))} />
          {!validCost(modItem.current_cost) && <h3>Invalid Cost</h3>}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
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
