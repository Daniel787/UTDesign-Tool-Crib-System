import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

export default function AddMember(props) {
  const [show, setShow] = useState(false);

  const host = process.env.REACT_APP_SERVER_SITE;
  const route = process.env.REACT_APP_GROUP_REMOVE_MEMBER;

  // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
  const modifiedRoute = route.replace(/^"(.*)"$/, "$1");

  const url = host + modifiedRoute;

  function handleSubmit(event) {
    console.log(url);
    Axios.post(url, {
      net_id: props.net_id,
      group_id: props.group_id,
    }).then((response) => {});
  }

  function showOff() {
    setShow(false);
  }

  function showOn() {
    setShow(true);
  }

  return (
    <React.Fragment>
      <Button onClick={showOn}> Remove </Button>
      <Modal
        show={show}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title> Remove a member from group </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label> Please confirm removal </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={showOff}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              showOff();
            }}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
