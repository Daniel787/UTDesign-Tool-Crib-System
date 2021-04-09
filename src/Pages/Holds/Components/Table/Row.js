import React from "react";
import ConfirmationModal from "./ConfirmHold";

function DataRow(props) {

  return (
    <tr>
      <td> {props.item.net_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.email} </td>
      <td> {props.item.utd_id} </td>
      <td> {/* {props.item.rentals.length} */}</td>
      <td> <ConfirmationModal item={props.item} removeHold={props.removeHold} /> </td>
    </tr>
  );
}
export default DataRow;
