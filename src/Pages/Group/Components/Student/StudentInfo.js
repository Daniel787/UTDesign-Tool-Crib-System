import React, { useState } from "react";
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
          <td key={props.item.student.name.toString()}>
            {" "}
            {props.item.student.name}{" "}
          </td>
          <td key={props.item.student.net_id.toString()}>
            {" "}
            {props.item.student.net_id}{" "}
          </td>
          <td key={props.item.student.utd_id.toString()}>
            {" "}
            {props.item.student.utd_id}{" "}
          </td>
          <td key={props.item.student.email.toString()}>
            {" "}
            {props.item.student.email}{" "}
          </td>
          <td> {props.item.student.hold} </td>
          <td>
            {" "}
            <Button onClick={showStudent}> Show Group</Button>{" "}
          </td>
        </tr>
      </tbody>
      <Modal show={showStudentModal} onHide={() => setShowStudentModal()}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            Groups that {props.item.student.name} is a part of{" "}
          </Modal.Title>
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
                if (item.group_id != 0)
                  return (
                    <tr key={i}>
                      <td> {item.group_id}</td>
                      <td> {item.group_name} </td>
                      <td> {item.group_sponsor} </td>
                    </tr>
                  );
                else {
                  return <div> </div>;
                }
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={turnOffStudent}>
            Close{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
