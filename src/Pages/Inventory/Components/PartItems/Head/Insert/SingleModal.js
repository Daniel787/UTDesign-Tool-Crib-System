import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [row, setRow] = useState({
    part_id: "",
    name: "",
    quantity_available: "",
    current_cost: "",
  });

  function validID() {
    return row.part_id > 0 && row.part_id % 1 === 0;
  }

  function validQuantity() {
    return row.quantity_available > 0 && row.quantity_available % 1 === 0;
  }
  function validCost() {
    const dec = row.current_cost.toString().indexOf(".");
    if (dec !== -1) {
      return (
        row.current_cost > 0 && row.current_cost.toString().length - dec <= 3
      );
    }
    return row.current_cost > 0;
  }
  function valid(params) {
    return validID() && row.name.length > 0 && validQuantity() && validCost();
  }

  const handleClose = () => {
    props.setShow(false);
    setRow({
      part_id: "",
      name: "",
      quantity_available: "",
      current_cost: "",
    });
  }
  return (
    <div>
      <Modal
        show={props.show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title> Insert </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Part ID:</label>{" "}
            <input
              type="number"
              value={row.part_id}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, part_id: e.target.value }))
              }
            ></input>
            {!validID() && <h5>Enter Valid ID</h5>}
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
            {!row.name.length > 0 && <h5>Enter Valid Name</h5>}
          </div>
          <div>
            <label>Quantity Available:</label>{" "}
            <input
              type="number"
              value={row.quantity_available}
              onChange={(e) =>
                setRow((prev) => ({
                  ...prev,
                  quantity_available: e.target.value,
                }))
              }
            ></input>
            {!validQuantity() && <h5>Enter Valid Quantity</h5>}
          </div>
          <div>
            <label>Cost:</label>{" "}
            <input
              type="number"
              value={row.current_cost}
              onChange={(e) =>
                setRow((prev) => ({ ...prev, current_cost: e.target.value }))
              }
            ></input>
            {!validCost() && <h5>Enter Valid Cost</h5>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={!valid()}
            onClick={() => {
              props.addPart(row);
              setRow({
                part_id: "",
                name: "",
                quantity_available: "",
                current_cost: "",
              });
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
