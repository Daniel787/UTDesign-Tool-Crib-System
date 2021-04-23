import React, { useState } from "react";
import { Table } from "react-bootstrap";
import GroupInfo from "./GroupInfo";
import AddMember from "./AddMember";

export default function GroupTable(props) {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr key="header2">
            <td> Group ID </td>
            <td> Group Name </td>
            <td> Group Sponsor </td>
            <td> Students </td>
          </tr>
        </thead>
        <tbody></tbody>
        {props.list.map((item, i) => {
          return <GroupInfo key={i} liKey={i} item={item} />;
        })}
      </Table>
      <AddMember />
    </React.Fragment>
  );
}
