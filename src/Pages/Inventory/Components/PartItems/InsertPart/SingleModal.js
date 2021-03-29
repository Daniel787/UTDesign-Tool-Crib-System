import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [show, setShow] = useState(false);
  const [row, setRow] = useState({ part_id: 0, name: '', quantity_available: 0, current_cost: 0 })

  function validID() {
    return row.part_id > 0 && row.part_id % 1 === 0
  }

  function validQuantity() {
    return row.quantity_available > 0 && row.quantity_available % 1 === 0
  }
  function validCost() {
    return row.current_cost > 0 && ((row.current_cost * 100) % 1) === 0
  }
  function valid(params) {
    return (validID()) && row.name.length > 0 && (validQuantity()) && (validCost())
  }

  return (
    <div>
      <Button variant="primary" onClick={() => { setShow(true) }}>
        Insert One
      </Button>

      <Modal show={show} onHide={() => { setShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title> Insert </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Part ID:</label> <input type="number" value={row.part_id} onChange={e => setRow(prev => ({ ...prev, part_id: (e.target.value) }))}></input>
            {!validID() && <h5>Enter Valid ID</h5>}
          </div>
          <div>
            <label>Name:</label> <input type="text" value={row.name} onChange={e => setRow(prev => ({ ...prev, name: e.target.value }))}></input>
            {!row.name.length > 0 && <h5>Enter Valid Name</h5>}
          </div>
          <div>
            <label>Quantity Available:</label> <input type="number" value={row.quantity_available} onChange={e => setRow(prev => ({ ...prev, quantity_available: (e.target.value) }))}></input>
            {!validQuantity() && <h5>Enter Valid Quantity</h5>}
          </div>
          <div>
            <label>Cost:</label> <input type="number" value={row.current_cost} onChange={e => setRow(prev => ({ ...prev, current_cost: (e.target.value) }))}></input>
            {!validCost() && <h5>Enter Valid Cost</h5>}
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={!valid()}
            onClick={() => {
              props.addPart(row)
              setRow({ part_id: 0, name: '', quantity_available: 0, current_cost: 0 })
              setShow(false);
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