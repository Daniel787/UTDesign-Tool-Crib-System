import React from "react";

// Figure out how information is sent in json
function DataRow(props) {
  return (
    <tr>
      <td>{props.item.group_id}</td>
      <td>{props.item.group_total}</td>
      <td>{props.item.net_id}</td>
      <td>{props.item.student_total}</td>
    </tr>
  );
}
export default DataRow;
