import React from "react";
import ConfirmationDeltete from "./Confirmation_Delete";
import ConfirmationModify from "./Confirmation_Modify";

function DataRow(props) {

  return (
    <tr>
      <td> {props.item.part_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.quantity_available} </td>
      <td> {props.item.current_cost} </td>
      <td>
        <ConfirmationDeltete
          item={props.item}
          removePart={props.removePart}
        />

      </td>
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
