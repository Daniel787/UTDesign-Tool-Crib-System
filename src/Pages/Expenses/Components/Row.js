import React, { useState } from "react";
import { Form } from "react-bootstrap";

// Figure out how information is sent in json
function DataRow(props) {
  return (
    <tr>
      <td> {props.item.part_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.quantity_available} </td>
      <td> {props.item.current_cost} </td>
    </tr>
  );
}
export default DataRow;
