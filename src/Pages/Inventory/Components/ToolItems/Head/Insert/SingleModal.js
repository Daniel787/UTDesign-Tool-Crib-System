import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [row, setRow] = useState({ tool_id: "", name: "" });

  // validates id by seeing if its a positive int
  function validID() {
    return row.tool_id > 0 && row.tool_id % 1 === 0;
  }

  // validates all by checking all validating functions
  function valid(params) {
    return validID() && row.name.length > 0;
  }

  return (
    <div>
      {/* modal */}
      <Modal
        show={props.show}
        onHide={() => {
          props.setShow(false);
          setRow({ tool_id: "", name: "" })
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title> Insert </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {/* inputs id and validates */}
          <Form.Group>
            <Form.Label>Tool ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Tool ID"
              value={row.tool_id}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, tool_id: e.target.value }))
              }
            />
          </Form.Group>
          {!validID() && <h5>Enter Valid ID</h5>}
          {/* inputs name and validates */}
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={row.name}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </Form.Group>
          {!row.name.length > 0 && <h5>Enter Valid Name</h5>}
        </Modal.Body>
        {/* options */}
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setRow({ tool_id: "", name: "" })
              props.setShow(false);
            }}
          >
            {" "}
            Cancel{" "}
          </Button>
          {/* processes if its a valid part */}
          <Button
            variant="primary"
            disabled={!valid()}
            onClick={() => {
              props.addTool(row);
              setRow({ tool_id: 0, name: "" });
              props.setShow(false);
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
