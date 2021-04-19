import React from "react";

export default function GroupInfo(props) {
  return (
      <tr>
        <td> {props.item.group_id} </td>
        <td> {props.item.group_name} </td>
        <td> {props.item.group_sponsor} </td>
      </tr>
  );
}
