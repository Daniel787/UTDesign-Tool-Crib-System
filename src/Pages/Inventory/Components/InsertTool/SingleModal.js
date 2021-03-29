import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [show, setShow] = useState(false);
  const [row, setRow] = useState({ tool_id: 0, name: '' })
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);

  };

  function validID() {
    return row.tool_id > 0 && row.tool_id % 1 === 0
  }


  function valid(params) {
    return (validID()) && row.name.length > 0
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Insert One
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Insert </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Tool ID:</label> <input type="number" value={row.tool_id} onChange={e => setRow(prev => ({ ...prev, tool_id: (e.target.value) }))}></input>
            {!validID() && <h5>Enter Valid ID</h5>}
          </div>
          <div>
            <label>Name:</label> <input type="text" value={row.name} onChange={e => setRow(prev => ({ ...prev, name: e.target.value }))}></input>
            {!row.name.length > 0 && <h5>Enter Valid Name</h5>}
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={!valid()}
            onClick={() => {
              props.addPart(row)
              setRow({ tool_id: 0, name: '' })
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
