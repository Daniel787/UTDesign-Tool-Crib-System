import React from "react";
import ConfirmationModal from "./ConfirmationModal";

function DataRow(props) {
  return (
    <tr>
      <td> {props.item.tool_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.status} </td>
      <td>
        <ConfirmationModal
          item={props.item}
          addToCart={props.addToCart}
        />
      </td>
    </tr>
  );
}
export default DataRow;
