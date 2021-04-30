import React from "react";
import { Table } from "react-bootstrap";
import StudentInfo from "./StudentInfo";
import CreateStudent from "./CreateStudent";

// Student table where each row is a student info component
export default function StudentTable(props) {
  return (
    <React.Fragment key="table">
      <Table striped bordered hover>
        <thead>
          <tr key="header">
            <td> Name </td>
            <td> Net ID </td>
            <td> Email </td>
            <td> Hold </td>
            <td> Modify </td>
            <td> Groups </td>
          </tr>
        </thead>
        {props.list.map((item, i) => {
          return <StudentInfo key={i} item={item} />;
        })}
      </Table>
      <CreateStudent />
    </React.Fragment>
  );
}
