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
      <td> {props.item.tool_id} </td>
      <td> {props.item.name} </td>
      <td>
        <ConfirmationModal
          item={props.item}
          amount={parseInt(amount)}
          addToCart={props.addToCart}
          reset={resetInput}
        />
      </td>
    </tr>
  );
}
export default DataRow;
