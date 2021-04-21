import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

export default function CreateStudent() {
  const [name, setName] = useState(null);
  const [netid, setNetid] = useState(null);
  const [utdid, setUtdid] = useState(null);
  const [email, setEmail] = useState(null);

  const [showCreateStudent, setShowCreateStudent] = useState(false);

  const host = process.env.REACT_APP_SERVER_SITE;
  const route1 = process.env.REACT_APP_STUDENTS;
  const route2 = "/insert";
  const url = host + route1 + route2;

  function handleSubmit(event) {
    Axios.post(url, {
      name: name,
      utd_id: utdid,
      net_id: netid,
      email: email,
    }).then((response) => {
      if (response.body === "SUCCESS") {
        createStudentOff();
        console.log("works");
      }
    });
    event.preventDefault();
  }
  function createStudentOn() {
    setShowCreateStudent(true);
  }

  function createStudentOff() {
    setShowCreateStudent(false);
  }

  return (
    <React.Fragment>
      <Button onClick={createStudentOn}> Create Student </Button>
      <Modal show={showCreateStudent}>
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
          </Form>
          <Form.Group>
            <Form.Label type="number"> Net ID </Form.Label>
            <Form.Control
              onChange={(e) => setNetid(e.target.value)}
              placeholder="Enter NET ID"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label type="number"> UTD ID </Form.Label>
            <Form.Control
              onChange={(e) => setUtdid(e.target.value)}
              placeholder="Enter UTD ID"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label type="email"> Email </Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={createStudentOff}>
            {" "}
            Close{"   "}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {" "}
            Insert{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
