import React from "react";
import ConfirmationModal from "./Confirmation_Modal";

function DataRow(props) {

  return (
    <tr>
      <td> {props.item.part_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.quantity_available} </td>
      <td> {props.item.current_cost} </td>
      <td>
        <ConfirmationModal
          item={props.item}
          removePart={props.removePart}
        />
      </td>
    </tr>
  );
}
export default DataRow;
