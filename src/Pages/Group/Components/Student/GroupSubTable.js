import React from "react";
import { Table } from "react-bootstrap";
import GroupInfo from "./GroupInfo";

export default function GroupSubTable(props) {
  return (
    <tr> 
      <td> Group ID </td>
      <td> Group Name </td>
      <td> Group Sponsor </td>
      {props.list.map((item) => {<GroupInfo item={item} /> })}
    </tr>
  );
}
