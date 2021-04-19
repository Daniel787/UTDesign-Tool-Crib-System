import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [row, setRow] = useState({ tool_id: "", name: "" });

  function validID() {
    return row.tool_id > 0 && row.tool_id % 1 === 0;
  }

  function valid(params) {
    return validID() && row.name.length > 0;
  }

  return (
    <div>
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
        <Modal.Body>
          <div>
            <label>Tool ID:</label>{" "}
            <input
              type="number"
              value={row.tool_id}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, tool_id: e.target.value }))
              }
            ></input>
            {!validID() && <h5>Invalid ID</h5>}
          </div>
          <div>
            <label>Name:</label>{" "}
            <input
              type="text"
              value={row.name}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, name: e.target.value }))
              }
            ></input>
            {!row.name.length > 0 && <h5>Invalid Name</h5>}
          </div>
        </Modal.Body>
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
