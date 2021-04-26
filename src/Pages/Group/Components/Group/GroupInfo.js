import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import AddGroupMember from "./AddMemberinGroup";

export default function GroupInfo(props) {
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);

  function showGroup() {
    setShowGroupModal(true);
  }
  function turnOffGroup() {
    setShowGroupModal(false);
  }

  function showMember() {
    setShowAddMember(true);
  }
  function turnOffMember() {
    setShowAddMember(false);
  }

  function TableContent(item, i) {
    if (true) {
      return (
        <tr key={i}>
          <td> {item.name} </td>
          <td> {item.net_id} </td>
          <td> {item.utd_id} </td>
          <td> {item.email} </td>
          <td> {item.hold} </td>
        </tr>
      );
    } else {
      return <div> </div>;
    }
  }
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td key={props.item.group.group_id.toString()}>
            {" "}
            {props.item.group.group_id}{" "}
          </td>
          <td key={props.item.group.group_name.toString()}>
            {" "}
            {props.item.group.group_name}{" "}
          </td>
          <td key={props.item.group.group_sponsor.toString()}>
            {" "}
            {props.item.group.group_sponsor}{" "}
          </td>
          <td>
            <Button onClick={showGroup}> Show Student </Button>
          </td>
          <td>
            <AddGroupMember group_id={props.item.group.group_id} />
          </td>
        </tr>
      </tbody>
      <Modal show={showGroupModal}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            Students that are a part of {props.item.group.group_name}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Net ID</td>
                <td> UTD ID</td>
                <td> Email </td>
                <td> Hold </td>
              </tr>
            </thead>
            <tbody>
              {props.item.group.students.map((item, i) => {
                if (item.display == 1) {
                  return (
                    <tr key={i}>
                      <td> {item.name} </td>
                      <td> {item.net_id} </td>
                      <td> {item.utd_id} </td>
                      <td> {item.email} </td>
                      <td> {item.hold} </td>
                    </tr>
                  );
                } else {
                  return <div> </div>;
                }
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setShowAddMember}>
            {" "}
            Add student to this group{" "}
          </Button>
          <Button variant="primary" onClick={turnOffGroup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
