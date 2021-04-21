import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);
  const [id, setid] = useState("")
  const [result, setResult] = useState(null)

  function addHold() {
    setResult(prev => ({ ...prev, student_hold: 1 }))
    axios.post(props.url + "/modify", result).then((response) => {
      console.log(response.data)
    });
  }

  function search() {
    axios.get(props.url + "/search?net_id=" + id).then((response) => {
      setResult(response.data[0])
    });
  }

  const hide = () => { setResult(null); setShow(false) }
  return (
    <div>
      <Button variant="primary" onClick={() => { setShow(true) }}>
        Add Hold
      </Button>

      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title> Add Student Hold By ID </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input placeholder="Enter student id" onChange={(e) => setid(e.target.value)} />
          <Button onClick={() => search()} disabled={id.length !== 9}>Search</Button>
          {result && <div>
            <h3>Net ID: {result.net_id}</h3>
            <h4>Name: {result.name}</h4>
            <h4>UTD ID: {result.utd_id}</h4>
            <h4>Email: {result.email}</h4>
          </div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={!result}
            onClick={() => {
              addHold()
              setResult(null);
              setShow(false);
            }}
          >
            Add Hold
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Confirmation_Modal;
