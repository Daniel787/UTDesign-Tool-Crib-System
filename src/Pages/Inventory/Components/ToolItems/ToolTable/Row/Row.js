import React from "react";
import ConfirmationDeltete from "./ConfirmationDelete";
import ConfirmationModify from "./ConfirmationModify";

// displays current index item
function DataRow(props) {

  return (
    <tr>
      <td> {props.item.tool_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.status} </td>
      {/* if item is not availablr it wont have student info */}
      <td>{props.item.status === "Available" ?
        <> - </> :
        <>
          Net ID: {props.item.net_id} <br />
          Group ID: {props.item.group_id}
        </>}
      </td>
      {/* if item is not available it wont have return info */}
      <td>{props.item.status === "Available" ?
        <> - </> :
        <>
          Out Date: {props.item.checkout_date} <br />
          Due Date: {props.item.due_date}
        </>}
      </td>
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
          modifyTool={props.modifyTool}
        />
      </td>
    </tr>
  );
}
export default DataRow;
