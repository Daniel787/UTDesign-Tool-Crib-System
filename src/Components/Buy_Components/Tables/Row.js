import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Confirmation_Modal from "../Modal/Confirmation_Modal";

function DataRow(props) {
  const [amount, setAmount] = useState(1);

  const onChange = (e) => {
    setAmount(e.target.value);
  };

  const resetInput = () => {
    setAmount(1);
  };

  const formStyle = {
    width: "100%",
  };
  return (
    <tr>
      <td> {props.item.part_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.quantity_available} </td>
      <td> {props.item.current_cost} </td>
      <td>
        <Form>
          <Form.Control style={formStyle} value={amount} onChange={onChange} />
        </Form>
      </td>
      <td>
        <Confirmation_Modal
          item={props.item}
          amount={amount}
          addToCart={props.addToCart}
          reset={resetInput}
        />
      </td>
    </tr>
  );
}
export default DataRow;
