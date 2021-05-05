import React from "react";
import ConfirmationDeltete from "./ConfirmationDelete";
import ConfirmationModify from "./ConfirmationModify";

// displays current index item
function DataRow(props) {

  return (
    <tr>
      <td> {props.item.part_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.quantity_available} </td>
      <td> {props.item.current_cost} </td>
      {/* removes item with a modal confirmation */}
      <td>
        <ConfirmationDeltete
          item={props.item}
          removePart={props.removePart}
        />

      </td>
      {/* modifies item with a modal confirmation */}
      <td>
        <ConfirmationModify
          item={props.item}
          modifyPart={props.modifyPart}
        />
      </td>
    </tr>
  );
}
export default DataRow;
