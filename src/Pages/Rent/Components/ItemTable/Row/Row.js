import React from "react";
import ConfirmationModal from "./ConfirmationModal";

// displays current index item
function DataRow(props) {
  return (
    <tr>
      <td> {props.item.tool_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.status} </td>
      {/* adds to cart with a modal confirmation */}
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
