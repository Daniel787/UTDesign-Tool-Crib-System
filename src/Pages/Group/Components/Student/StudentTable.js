import React, { useState } from "react";
import { Table } from "react-bootstrap";
import StudentInfo from "./StudentInfo";
import CreateStudent from "./CreateStudent";

export default function StudentTable(props) {
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
          return <StudentInfo key={i} liKey={i} item={item} />;
        })}
      </Table>
      <CreateStudent />
    </React.Fragment>
  );
}
