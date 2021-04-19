import React, { useState } from "react";
import GroupInfo from "./GroupInfo";
import { Button, Modal, Table } from "react-bootstrap";

export default function StudentInfo(props) {
  const [showStudentModal, setShowStudentModal] = useState(false);

  function showStudent() {
    setShowStudentModal(true);
  }

  function turnOffStudent() {
    setShowStudentModal(false);
  }
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td> {props.item.student.name} </td>
          <td> {props.item.student.net_id} </td>
          <td> {props.item.student.utd_id} </td>
          <td> {props.item.student.email} </td>
          <td> {props.item.student.hold} </td>
          <td>
            {" "}
            <Button onClick={showStudent}> Show Group</Button>{" "}
          </td>
        </tr>
      </tbody>
      <Modal show={showStudentModal}>
        <Modal.Header>
          <Modal.Title> {props.item.student.name} + "groups"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <td> Group ID</td>
                <td> Group Name </td>
                <td> Group Sponsor </td>
              </tr>
            </thead>
            <tbody>
              {props.item.student.groups.map((item, i) => {
                return (
                  <tr>
                    <td> {item.group_id}</td>
                    <td> {item.group_name} </td>
                    <td> {item.group_sponsor} </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={turnOffStudent}>
            {" "}
            Close{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
