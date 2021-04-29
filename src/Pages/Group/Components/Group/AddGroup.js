import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

export default function AddMember(props) {
  const [show, setShow] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [groupName, setGroupName] = useState(null);
  const [groupSponsor, setGroupSponsor] = useState(null);

  const [netid1, setNetid1] = useState("");
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");

  const [netid2, setNetid2] = useState("");
  const [name2, setName2] = useState("");
  const [email2, setEmail2] = useState("");

  const [netid3, setNetid3] = useState("");
  const [name3, setName3] = useState("");
  const [email3, setEmail3] = useState("");

  const [netid4, setNetid4] = useState("");
  const [name4, setName4] = useState("");
  const [email4, setEmail4] = useState("");

  const [netid5, setNetid5] = useState("");
  const [name5, setName5] = useState("");
  const [email5, setEmail5] = useState("");

  const [netid6, setNetid6] = useState("");
  const [name6, setName6] = useState("");
  const [email6, setEmail6] = useState("");

  const host = process.env.REACT_APP_SERVER_SITE;
  const route = process.env.REACT_APP_GROUP_INSERT_SHEET;

  // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
  const modifiedRoute = route.replace(/^"(.*)"$/, "$1");

  const url = host + modifiedRoute;

  function refresh() {
    window.location.reload();
  }

  function handleSubmit(event) {
    console.log(url);
    console.log({
      groups: [
        {
          group_id: groupId,
          group_name: groupName,
          group_sponsor: groupSponsor,
          students: [
            { name: name1, net_id: netid1, email: email1 },
            { name: name2, net_id: netid2, email: email2 },
            { name: name3, net_id: netid3, email: email3 },
            { name: name4, net_id: netid4, email: email4 },
            { name: name5, net_id: netid5, email: email5 },
            { name: name6, net_id: netid6, email: email6 },
          ],
        },
      ],
    });
    Axios.post(url, {
      groups: [
        {
          group_id: groupId,
          group_name: groupName,
          group_sponsor: groupSponsor,
          students: [
            { name: name1, net_id: netid1, email: email1 },
            { name: name2, net_id: netid2, email: email2 },
            { name: name3, net_id: netid3, email: email3 },
            { name: name4, net_id: netid4, email: email4 },
            { name: name5, net_id: netid5, email: email5 },
            { name: name6, net_id: netid6, email: email6 },
          ],
        },
      ],
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
            <Form.Group>
              <Form.Label> Student 1 </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName1(e.target.value);
                }}
                placeholder="Enter Name"
              />
              <Form.Control
                onChange={(e) => {
                  setNetid1(e.target.value);
                }}
                placeholder="Enter Net ID"
              />
              <Form.Control
                onChange={(e) => {
                  setEmail1(e.target.value);
                }}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Student 2 </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName2(e.target.value);
                }}
                placeholder="Enter Name"
              />
              <Form.Control
                onChange={(e) => {
                  setNetid2(e.target.value);
                }}
                placeholder="Enter Net ID"
              />
              <Form.Control
                onChange={(e) => {
                  setEmail2(e.target.value);
                }}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Student 3 </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName3(e.target.value);
                }}
                placeholder="Enter Name"
              />
              <Form.Control
                onChange={(e) => {
                  setNetid3(e.target.value);
                }}
                placeholder="Enter Net ID"
              />
              <Form.Control
                onChange={(e) => {
                  setEmail3(e.target.value);
                }}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Student 4 </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName4(e.target.value);
                }}
                placeholder="Enter Name"
              />
              <Form.Control
                onChange={(e) => {
                  setNetid4(e.target.value);
                }}
                placeholder="Enter Net ID"
              />
              <Form.Control
                onChange={(e) => {
                  setEmail4(e.target.value);
                }}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Student 5 </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName5(e.target.value);
                }}
                placeholder="Enter Name"
              />
              <Form.Control
                onChange={(e) => {
                  setNetid5(e.target.value);
                }}
                placeholder="Enter Net ID"
              />
              <Form.Control
                onChange={(e) => {
                  setEmail5(e.target.value);
                }}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Student 6 </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName6(e.target.value);
                }}
                placeholder="Enter Name"
              />
              <Form.Control
                onChange={(e) => {
                  setNetid6(e.target.value);
                }}
                placeholder="Enter Net ID"
              />
              <Form.Control
                onChange={(e) => {
                  setEmail6(e.target.value);
                }}
                placeholder="Enter email"
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
