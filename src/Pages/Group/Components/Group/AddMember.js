import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

// Function for adding members to an existing group
export default function AddMember(props) {
  const [show, setShow] = useState(false);
  const [netid, setStudent] = useState("");
  const [groupid, setGroupid] = useState(props.group_id ? props.group_id : "");

  const host = process.env.REACT_APP_SERVER_SITE;
  const route = process.env.REACT_APP_GROUP_INSERT_MEMBER;

  // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
  const modifiedRoute = route.replace(/^"(.*)"$/, "$1");

  const url = host + modifiedRoute;

  // Refresh that is called after information is sent in POST
  function refresh() {
    window.location.reload();
  }

  // Function that handles form information and sends post
  function handleSubmit(event) {
    console.log(url);
    const newStudent = {
      group_id: groupid,
      net_id: netid,
    };
    Axios.post(url, newStudent).then((response) => {
      refresh();
    });
  }

  // Function for managing the show value of the modal
  function showOff() {
    setStudent("");
    setGroupid(props.group_id ? props.group_id : "");
    setShow(false);
  }

  function showOn() {
    setShow(true);
  }

  // Does error-checking
  function invalid() {
    return !(groupid > 0 && netid.length > 3);
  }

  return (
    <React.Fragment>
      <Button onClick={showOn} style={{ marginLeft: "1%" }}>
        {" "}
        Add Member to Group{" "}
      </Button>
      <Modal show={show} onHide={() => showOff()}>
        <Modal.Header>
          <Modal.Title> Add a member to a group </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label> Group ID</Form.Label>
              <Form.Control
                placeholder="Enter group id"
                disabled={props.group_id}
                type="number"
                onFocus={(e) => e.target.select()}
                value={groupid}
                onChange={(e) => {
                  setGroupid(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Net ID</Form.Label>
              <Form.Control
                value={netid}
                onFocus={(e) => e.target.select()}
                onChange={(e) => {
                  setStudent(e.target.value);
                }}
                placeholder="Enter Net ID"
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
            disabled={invalid()}
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
