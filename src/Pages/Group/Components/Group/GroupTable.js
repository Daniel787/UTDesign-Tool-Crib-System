import React, { useState } from "react";
import { Table } from "react-bootstrap";
import GroupInfo from "./GroupInfo";

export default function GroupTable(props) {
  return (
    <React.Fragment key="table">
      <Table striped bordered hover>
        <thead>
          <tr key="header">
            <td> Group ID </td>
            <td> Group Name </td>
            <td> Group Sponsor </td>
          </tr>
        </thead>
        {props.list.group.map((item, i) => {
          return <GroupInfo key={i} liKey={i} item={item} />;
        })}
      </Table>
    </React.Fragment>
  );
}
