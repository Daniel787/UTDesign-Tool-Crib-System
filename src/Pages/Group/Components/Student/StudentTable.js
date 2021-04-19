import React from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import StudentInfo from "./StudentInfo";
import GroupSubTable from "./GroupSubTable";

export default function StudentTable(props) {
  return (
    <Table bordered >
      <thead>
        <tr>
          <td> Name </td>
          <td> Net ID </td>
          <td> UTD ID </td>
          <td> Email </td>
          <td> Hold </td>
        </tr>
      </thead>
        {props.list.map((item, i) => {  return (<StudentInfo key={i} item={item} />); } ) }
    </Table>
  );
}
