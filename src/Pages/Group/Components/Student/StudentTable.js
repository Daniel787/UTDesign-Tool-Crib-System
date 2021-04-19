import React from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import StudentInfo from "./StudentInfo";
import GroupSubTable from "./GroupSubTable";

export default function StudentTable(props) {
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
        {props.list.map((item) => {<StudentInfo item={item} />})}

        <GroupSubTable list={props.list} />
      </tbody>
    </Table>
  );
}
