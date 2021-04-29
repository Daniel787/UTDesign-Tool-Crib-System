import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import styles from '../Head.module.css'

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
  const head = ["Net ID", "Name", "UTD ID", "Email"]
  const hide = () => { setResult(null); setShow(false) }
  return (
    <div>
      {/* opens modal */}
      <Button variant="primary" onClick={() => { setShow(true) }} className={props.styles.Container}>
        Add
      </Button>
      {/* modal */}
      <Modal show={show} onHide={hide} dialogClassName={styles.MyModal}>
        <Modal.Header closeButton>
          <Modal.Title> Add Student Hold By ID </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {/* searches for student to add hold to */}
          <Form.Group>
            <Form.Label>Net ID</Form.Label>
            <Form.Control
              value={id}
              placeholder="Enter Net ID"
              onFocus={(e) => e.target.select()}
              onChange={(e) => setid(e.target.value)}
            />
          </Form.Group>
          {/* searches on click */}
          <Button onClick={() => search()} disabled={id.length !== 9}>Search</Button>
          {/* displays result if the student exists */}
          {result &&
            <Table responsive hover>
              {/* maps array of headers to table header  */}
              <thead>
                <tr>
                  {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                </tr>
              </thead>
              {/* displays rows by mapping the list to row components */}
              <tbody>
                <tr>
                  <td>{result.net_id}</td>
                  <td>{result.name}</td>
                  <td>{result.utd_id}</td>
                  <td>{result.email}</td>
                </tr>
              </tbody>
            </Table>}
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
