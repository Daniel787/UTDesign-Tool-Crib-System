import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);
  const [hours, setHours] = useState(2)

  const handleClose = () => {
    setHours(2)
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <Button variant="primary"
        disabled={props.item.status !== "Available"}
        onClick={handleShow}>
        Add To Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          ID : {props.item.tool_id} <br />
          Name : {props.item.name} <br />{" "}
          Hours for Rental : <input
            type="number"
            onFocus={(e) => e.target.select()}
            value={hours}
            onChange={(e) => setHours(e.target.value ? parseInt(e.target.value) : "")} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={hours < 1}
            onClick={() => {
              props.addToCart(props.item, hours);
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

export default Confirmation_Modal;
