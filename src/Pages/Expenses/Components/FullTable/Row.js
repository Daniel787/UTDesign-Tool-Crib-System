import React from "react";

// Figure out how information is sent in json
function DataRow(props) {
  return (
    <tr>
      <td>{props.item.group_id}</td>
      <td>{props.item.group_total}</td>
      <td>{props.item.net_id}</td>
      <td>{props.item.student_total}</td>
      <td>{props.item.part_id}</td>
      <td>{props.item.quantity_purchased}</td>
      <td>{props.item.cost_per_unit}</td>
      <td>{props.item.quantity_purchased * props.item.cost_per_unit}</td>
      <td>{props.item.date}</td>
    </tr>
  );
}
export default DataRow;
