import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Deltete(props) {
  const [show, setShow] = useState(false);
  const [sheet, setSheet] = useState(null)

  return (
    <div>
      <Button variant="primary" onClick={() => { setShow(true) }}>
        Insert Sheet
      </Button>

      <Modal show={show} onHide={() => { setShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title> Insert Sheet </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Import a sheet</h3>
          <input type="file" accept=".xlsx,.xls,.csv" onChange={(e) => setSheet(e.target.files[0])} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false)
              props.addParts(sheet)
              setSheet(null)
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
