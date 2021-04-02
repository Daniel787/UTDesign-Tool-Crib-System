import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("")
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setName(props.item.name)

  };

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
          ID : {props.item.tool_id} <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.modifyPart({ parrt_id: props.item.tool_id, name: name });
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
