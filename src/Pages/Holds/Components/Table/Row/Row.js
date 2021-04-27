import React from "react";
import ConfirmationModal from "./ConfirmHold";

// displays current index item
function DataRow(props) {

  return (
    <tr>
      <td> {props.item.net_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.email} </td>
      <td> {props.item.utd_id} </td>
      <td> {props.item.tools.length}</td>
      {/* removes hold with a modal confirmation */}
      <td> <ConfirmationModal item={props.item} removeHold={props.removeHold} styles={props.styles} /> </td>
    </tr>
  );
}
export default DataRow;
