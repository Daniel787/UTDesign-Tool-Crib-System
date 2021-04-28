import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);
  const [id, setid] = useState("")
  const [result, setResult] = useState(null)

  // adds hold by reseting student hold value and posting a modify call
  function addHold() {
    let newStudent = { ...result, student_hold: 1 }
    axios.post(props.url + "/modify", newStudent).then((response) => {
      console.log(response.data)
    });
  }

  // searches the student with a get call to server with student id
  function search() {
    axios.get(props.url + "/search?net_id=" + id).then((response) => {
      setResult(response.data[0])
    });
  }

  const hide = () => { setResult(null); setShow(false) }
  return (
    <div>
      {/* opens modal */}
      <Button variant="primary" onClick={() => { setShow(true) }} className={props.styles.Container}>
        Add
      </Button>
      {/* modal */}
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title> Add Student Hold By ID </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {/* searches for student to add hold to */}
          <input placeholder="Enter net id" onChange={(e) => setid(e.target.value)} />
          {/* searches on click */}
          <Button onClick={() => search()} disabled={id.length !== 9}>Search</Button>
          {/* displays result if the student exists */}
          {result && <div>
            <h3>Net ID: {result.net_id}</h3>
            <h4>Name: {result.name}</h4>
            <h4>UTD ID: {result.utd_id}</h4>
            <h4>Email: {result.email}</h4>
          </div>}
        </Modal.Body>
        {/* options */}
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Cancel
          </Button>
          {/* processes on click by callong add hold function */}
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
