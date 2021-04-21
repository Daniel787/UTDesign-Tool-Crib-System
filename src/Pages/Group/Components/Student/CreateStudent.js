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
    if (name && netid && utdid && email) {
      Axios.post(url, {
        name: name,
        netid: netid,
        utdid: utdid,
        email: email,
      }).then();
    }
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
            <Form.Label
              onChange={(e) => setNetid(e.target.value)}
              type="number"
            >
              {" "}
              Net ID{" "}
            </Form.Label>
            <Form.Control placeholder="Enter NET ID" />
          </Form.Group>
          <Form.Group>
            <Form.Label
              onChange={(e) => setUtdid(e.target.value)}
              type="number"
            >
              {" "}
              UTD ID{" "}
            </Form.Label>
            <Form.Control placeholder="Enter UTD ID" />
          </Form.Group>
          <Form.Group>
            <Form.Label onChange={(e) => setEmail(e.target.value)} type="email">
              {" "}
              Email{" "}
            </Form.Label>
            <Form.Control placeholder="Enter email" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={createStudentOff}>
            {" "}
            Close{" "}
          </Button>
          <Button variant="primary" type="submit">
            {" "}
            Insert{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
