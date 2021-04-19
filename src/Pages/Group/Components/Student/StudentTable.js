import React from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import StudentInfo from "./StudentInfo";
import GroupSubTable from "./GroupSubTable";

export default function StudentTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td> Name </td>
          <td> Net ID </td>
          <td> UTD ID </td>
          <td> Email </td>
          <td> Hold </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <StudentInfo />
        </tr>
        <tr>
          <GroupSubTable />
        </tr>
      </tbody>
    </Table>
  );
}
