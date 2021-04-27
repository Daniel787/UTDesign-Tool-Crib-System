import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ConfirmationModify(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("")
  const handleClose = () => {
    setShow(false);
    setName("")
  };
  const handleShow = () => {
    setShow(true);
    setName(props.item.name)

  };

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
          Name : <input value={name} onChange={(e) => setName(e.target.value)} /><br />
          {!validName(name) && <h3>Invalid Name</h3>}
          ID : {props.item.tool_id} <br />
        </Modal.Body>
        {/* bottom options */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          {/* processes modification with modify part function */}
          <Button
            variant="primary"
            disabled={!validName(name)}
            onClick={() => {
              props.modifyTool({ tool_id: props.item.tool_id, name: name });
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

export default ConfirmationModify;
