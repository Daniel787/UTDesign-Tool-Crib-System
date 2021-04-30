import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

// Function for modifying group information
export default function ModifyMember(props) {
  const [show, setShow] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupSponsor, setGroupSponsor] = useState("");

  const host = process.env.REACT_APP_SERVER_SITE;
  const route = process.env.REACT_APP_GROUP;

  // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
  const modifiedRoute = route.replace(/^"(.*)"$/, "$1");

  const url = host + modifiedRoute;

  // Function for refreshing on POST
  function refresh() {
    window.location.reload();
  }

  // Function for sending the post call for modifying
  function handleSubmit() {
    console.log(url + "/modify");
    const modGroup = {
      group_id: props.group.group_id,
      group_name: groupName,
      group_sponsor: groupSponsor,
    };
    Axios.post(url + "/modify", modGroup).then((response) => {
      refresh();
    });
  }

  // Function for modifying modal show value
  function showOff() {
    setShow(false);
  }

  function showOn() {
    setGroupName(props.group.group_name);
    setGroupSponsor(props.group.group_sponsor);
    setShow(true);
  }

  // Error checking
  function invalid() {
    return !(groupSponsor.length > 0 && groupName.length > 0);
  }

  return (
    <React.Fragment>
      <Button onClick={showOn}> Modify </Button>
      <Modal show={show} onHide={() => showOff()}>
        <Modal.Header>
          <Modal.Title> Modify Group </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Group ID: {props.group.group_id}</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label> Group Name </Form.Label>
              <Form.Control
                value={groupName}
                onChange={(e) => {
                  setGroupName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Group Sponsor </Form.Label>
              <Form.Control
                value={groupSponsor}
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
            disabled={invalid()}
            onClick={() => {
              handleSubmit();
              showOff();
            }}
          >
            {" "}
            Confirm{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
