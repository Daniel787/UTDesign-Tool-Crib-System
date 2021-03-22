import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add To Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation Modal </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          ID : {props.item.id} <br /> Name : {props.item.name} <br /> Current
          Cost : {props.item.current_cost} <br /> Quantity Selected :{" "}
          {props.amount}{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Close{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.addToCart(props.item, props.amount);
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
