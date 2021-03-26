import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ConfirmationModal from "../Modal/Confirmation_Modal";

function DataRow(props) {
  const [amount, setAmount] = useState(1);

  const resetInput = () => {
    setAmount(1);
  };

  const formStyle = {
    width: "100%",
  };
  return (
    <tr>
      <td> {props.item.net_id} </td>
      <td> {props.item.email} </td>
      {/* Add button for removing hold */}
    </tr>
  );
}
export default DataRow;
