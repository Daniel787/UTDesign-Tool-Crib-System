import React from "react";
import { Table } from "react-bootstrap";
import GroupInfo from "./GroupInfo";

export default function GroupSubTable(props) {
  <Table striped bordered hover>
    <thead>
      <tr> Group ID </tr>
      <tr> Group Name </tr>
      <tr> Group Sponsor </tr>
    </thead>
    <tbody> 
        {props.list.map((item) => {<GroupInfo item={item} /> })}
    </tbody>
  </Table>;
}
