import React, { createElement, useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import StudentInfo from "./StudentInfo";
import GroupSubTable from "./GroupSubTable";
import CreateStudent from "./CreateStudent";

export default function StudentTable(props) {
  const [showStudentModal, setShowStudentModal] = useState(false);

  function showStudent() {
    setShowStudentModal(true);
  }

  function turnOffStudent() {
    setShowStudentModal(false);
  }
  return (
    <React.Fragment key="table">
      <Table striped bordered hover>
        <thead>
          <tr key="header">
            <td> Name </td>
            <td> Net ID </td>
            <td> UTD ID </td>
            <td> Email </td>
            <td> Hold </td>
            <td> Groups </td>
          </tr>
        </thead>
        {props.list.map((item, i) => {
          return (
            <StudentInfo
              key={i}
              liKey={i}
              item={item}
              show={showStudentModal}
              showOn={showStudent}
              showOff={turnOffStudent}
            />
          );
        })}
      </Table>
      <CreateStudent />
    </React.Fragment>
  );
}
