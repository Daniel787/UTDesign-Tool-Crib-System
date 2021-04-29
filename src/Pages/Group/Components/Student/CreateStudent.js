import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

export default function CreateStudent() {
  const [name, setName] = useState("");
  const [netid, setNetid] = useState("");
  const [email, setEmail] = useState("");

  const [showCreateStudent, setShowCreateStudent] = useState(false);

  const host = process.env.REACT_APP_SERVER_SITE;
  const route1 = process.env.REACT_APP_STUDENTS;
  const route2 = "/insert";
  const url = host + route1 + route2;

  function refresh() {
    window.location.reload();
  }

  function handleSubmit(event) {
    Axios.post(url, {
      name: name,
      net_id: netid,
      email: email,
    }).then((response) => {
      refresh();
    });
    event.preventDefault();
  }
  function createStudentOn() {
    setShowCreateStudent(true);
  }

  function createStudentOff() {
    setName("")
    setNetid("")
    setEmail("")
    setShowCreateStudent(false);
  }

  function invalid() {
    return (name.length === 0 || netid.length !== 9 || email.length === 0)
  }

  return (
    <React.Fragment>
      <Button onClick={createStudentOn}> Create Student </Button>
      <Modal show={showCreateStudent} onHide={() => createStudentOff()}>
        <Modal.Title> Create Student </Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label> Name </Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label type="number"> Net ID </Form.Label>
              <Form.Control
                onChange={(e) => setNetid(e.target.value)}
                placeholder="Enter NET ID"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label type="email"> Email </Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={createStudentOff}>
            {" "}
            Close{"   "}
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={invalid()}>
            {" "}
            Insert{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
