import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

export default function AddMember(props) {
  const [show, setShow] = useState(false);
  const [netid, setNetid] = useState(null);
  const [groupid, setGroupid] = useState(null);

  const host = process.env.REACT_APP_SERVER_SITE;
  const route = process.env.REACT_APP_GROUP_INSERT_MEMBER;

  // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
  const modifiedRoute = route.replace(/^"(.*)"$/, "$1");

  const url = host + modifiedRoute;

  function refresh() {
    window.location.reload();
  }

  function handleSubmit(event) {
    console.log(url);
    Axios.post(url, {
      net_id: netid,
      group_id: groupid,
    }).then((response) => {
      refresh();
    });
  }

  function showOff() {
    setShow(false);
  }

  function showOn() {
    setShow(true);
  }

  return (
    <React.Fragment>
      <Button onClick={showOn}> Add Member to Group </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title> Add a member to a group </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Net ID</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setNetid(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Group ID</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setGroupid(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={showOff}>
            {" "}
            Close{"   "}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              showOff();
            }}
          >
            {" "}
            Insert{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
