import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

// Function for adding a member to a group
export default function AddMember(props) {
  const [show, setShow] = useState(false);
  const [groupId, setGroupId] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupSponsor, setGroupSponsor] = useState("");
  const [students, setStudents] = useState([]);

  const host = process.env.REACT_APP_SERVER_SITE;
  const route = process.env.REACT_APP_GROUP_INSERT_SHEET;

  // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
  const modifiedRoute = route.replace(/^"(.*)"$/, "$1");

  const url = host + modifiedRoute;

  // Function for refreshing after every post call
  function refresh() {
    window.location.reload();
  }

  //Post call with form info
  function handleSubmit() {
    Axios.post(url, {
      groups: [
        {
          group_id: groupId,
          group_name: groupName,
          group_sponsor: groupSponsor,
          students: students,
        },
      ],
    }).then((response) => {
      if (response.data.message === "SUCCESS") {
        props.setStatus(null)
        refresh()
      }
      else {
        console.log(response.data)
        props.setStatus(response.data)
      }
    });
  }

  // Functions for managing the show value for the modal
  function showOff() {
    setGroupId("");
    setGroupName("");
    setGroupSponsor("");
    setStudents([]);
    setShow(false);
  }

  function showOn() {
    setShow(true);
  }

  // Function for setting the student values of the form
  function addSudent() {
    let newList = [...students];
    const defaultSudent = { net_id: "", name: "", email: "" };
    newList.push(defaultSudent);
    setStudents(newList);
  }

  // Function for removing student from hooks
  function removeStudent(index) {
    let newList = [...students];
    newList.splice(index, 1);
    setStudents(newList);
  }

  // Function for checking if some of the information is valid or not
  function invalid() {
    if (groupId > 0 && groupName.length > 0) {
      return (
        students.filter((e) => {
          return e.name === "" || !(e.net_id.length > 3);
        }).length > 0
      );
    }
    return true;
  }

  return (
    <React.Fragment>
      <Button onClick={showOn}> Add Group </Button>
      <Modal show={show} onHide={() => showOff()}>
        <Modal.Header>
          <Modal.Title> Add group </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Group ID</Form.Label>
              <Form.Control
                value={groupId}
                onFocus={(e) => e.target.select()}
                type="number"
                onChange={(e) => {
                  setGroupId(e.target.value ? parseInt(e.target.value) : "");
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Group Name </Form.Label>
              <Form.Control
                onFocus={(e) => e.target.select()}
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
                onFocus={(e) => e.target.select()}
                onChange={(e) => {
                  setGroupSponsor(e.target.value);
                }}
              />
            </Form.Group>
            {students.map((current, index) => {
              return (
                <Form.Group key={index}>
                  <Form.Label> Student {index + 1}</Form.Label>{" "}
                  <Button onClick={() => removeStudent(index)}>Remove</Button>
                  <Form.Control
                    value={current.name}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => {
                      let newList = [...students];
                      newList[index].name = e.target.value;
                      setStudents(newList);
                    }}
                    placeholder="Enter Name"
                  />
                  <Form.Control
                    value={current.net_id}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => {
                      let newList = [...students];
                      newList[index].net_id = e.target.value;
                      setStudents(newList);
                    }}
                    placeholder="Enter Net ID"
                  />
                  <Form.Control
                    value={current.email}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => {
                      let newList = [...students];
                      newList[index].email = e.target.value;
                      setStudents(newList);
                    }}
                    placeholder="Enter email"
                  />
                </Form.Group>
              );
            })}
            <Button onClick={() => addSudent()}>Add Student</Button>
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
