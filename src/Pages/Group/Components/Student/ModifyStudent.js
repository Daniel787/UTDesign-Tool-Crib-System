import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

export default function ModifyStudent(props) {
  const [name, setName] = useState("");
  // const [netid, setNetid] = useState("");
  const [email, setEmail] = useState("");

  const [showCreateStudent, setShowCreateStudent] = useState(false);

  const host = process.env.REACT_APP_SERVER_SITE;
  const route1 = process.env.REACT_APP_STUDENTS;
  const route2 = "/modify";
  const url = host + route1 + route2;

  function refresh() {
    window.location.reload();
  }

  function handleSubmit(event) {
    const modStudent = {
      name: name,
      net_id: props.student.net_id,
      email: email,
    }
    Axios.post(url, modStudent).then((response) => {
      refresh();
    });
    createStudentOff()
    event.preventDefault();
  }
  function createStudentOn() {
    setShowCreateStudent(true);
    setEmail(props.student.email)
    setName(props.student.name)
  }

  function createStudentOff() {
    setShowCreateStudent(false);
  }

  function invalid() {
    return (name.length === 0 || email.length === 0)
  }

  return (
    <React.Fragment>
      <Button onClick={createStudentOn}>  Modify </Button>
      <Modal show={showCreateStudent} onHide={() => createStudentOff()}>
        <Modal.Title> Modify Student </Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label type="number"> Net ID: {props.student.net_id} </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label> Name </Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label type="email"> Email </Form.Label>
              <Form.Control
                value={email}
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
            Confirm{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
