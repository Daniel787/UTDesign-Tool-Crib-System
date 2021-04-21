import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  function invalid() {
    return props.item.quantity_available < 1 || props.amount < 1 || props.amount.toString().indexOf('.') > -1
  }
  return (
    <div>
      <Button variant="primary" disabled={invalid()} onClick={handleShow}>
        Add To Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          ID : {props.item.part_id} <br />
          Name : {props.item.name} <br />{" "}
          Current Cost : {props.item.current_cost} <br />
          Quantity Selected : {props.amount}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.addToCart(props.item, props.amount);
              props.reset();
              handleClose();
            }}
          >
            {" "}
            Confirm{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Confirmation_Modal;
