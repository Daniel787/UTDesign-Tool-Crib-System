import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(0)
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0.0)
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setName(props.item.name)
    setQuantity(props.item.quantity_available)
    setPrice(props.item.current_cost)
  };

  function valid() {
    return quantity > 0 && (price > 0 && ((price * 100) % 1) === 0)
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
          Name : <input value={name} onChange={(e) => setName(e.target.value)} /><br />
          ID : {props.item.part_id} <br />
          New Quantity : <input value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br />
          New Price : $<input value={price} onChange={(e) => setPrice(e.target.value)} />
          {!valid() && (!(quantity > 0) ? <h3>Invalid Quantity</h3> : <h3>Invalid Price</h3>)}
          {name.length === 0 && <h3>Needs a Name</h3>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={!(valid()) || name.length === 0}
            onClick={() => {
              props.modifyPart(props.item.part_id, quantity, price, name);
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

export default Confirmation_Deltete;
