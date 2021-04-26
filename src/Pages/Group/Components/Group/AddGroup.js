import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

export default function AddMember(props) {
  const [show, setShow] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [groupName, setGroupName] = useState(null);
  const [groupSponsor, setGroupSponsor] = useState(null);

  const host = process.env.REACT_APP_SERVER_SITE;
  const route = process.env.REACT_APP_GROUP_INSERT;

  // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
  const modifiedRoute = route.replace(/^"(.*)"$/, "$1");

  const url = host + modifiedRoute;

  function handleSubmit(event) {
    console.log(url);
    Axios.post(url, {
      group_id: groupId,
      group_name: groupName,
      group_sponsor: groupSponsor,
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
      <Button onClick={showOn}> Add Group </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title> Add group </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Group ID</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setGroupId(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Group Name </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setGroupName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Group Sponsor </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setGroupSponsor(e.target.value);
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
