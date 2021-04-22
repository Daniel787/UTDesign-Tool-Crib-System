import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

export default function GroupInfo(props) {
  const [showGroupModal, setShowGroupModal] = useState(false);
  function showGroup() {
    setShowGroupModal(true);
  }
  function turnOffGroup() {
    setShowGroupModal(false);
  }

  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td key={props.item.group_id.toString()}> {props.item.group_id} </td>
          <td key={props.item.group_name.toString()}>
            {" "}
            {props.item.group_name}{" "}
          </td>
          <td key={props.item.group_sponsor.toString()}>
            {" "}
            {props.item.group}{" "}
          </td>
          <td>
            <Button onClick={showGroup}> Show Student </Button>
          </td>
        </tr>
      </tbody>
      <Modal show={showGroupModal}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            Students that are a part of {props.item.group_name}{" "}
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
              {props.item.student.map((item, i) => {
                return (
                  <tr key={i}>
                    <td> {item.name} </td>
                    <td> {item.net_id} </td>
                    <td> {item.utd_id} </td>
                    <td> {item.email} </td>
                    <td> {item.hold} </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={turnOffGroup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
