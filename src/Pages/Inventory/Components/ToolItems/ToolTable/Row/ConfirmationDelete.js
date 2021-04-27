import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ConfirmationDeltete(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      {/* opens modal */}
      <Button variant="primary" onClick={handleShow}>
        Remove
      </Button>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          Name : {props.item.name} <br />
          ID : {props.item.tool_id}
        </Modal.Body>
        {/* bottom options */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          {/* processes removal by calling remove tool function with tool id */}
          <Button
            variant="primary"
            onClick={() => {
              props.removePart(props.item.tool_id);
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

export default ConfirmationDeltete;
