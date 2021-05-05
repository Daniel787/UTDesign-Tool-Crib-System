import React from "react";

// Figure out how information is sent in json
function DataRow(props) {
  return (
    <tr>
      <td>{props.item.tool_id}</td>
      <td>{props.item.name}</td>
      <td>{props.item.number_of_rentals}</td>
      <td>{props.item.number_of_unique_renting_groups}</td>
      <td>{props.item.assigned_hours}</td>
      <td>{props.item.actual_hours_without_overdue}</td>
      <td>{props.item.overdue_hours}</td>
      <td>{props.item.total_actual_hours}</td>
    </tr>
  );
}
export default DataRow;
