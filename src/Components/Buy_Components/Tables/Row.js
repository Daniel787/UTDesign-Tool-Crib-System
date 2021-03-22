import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Confirmation_Modal from "../Modal/Confirmation_Modal";

function DataRow(props) {
  const [amount, setAmount] = useState(1);

  const onChange = (e) => {
    setAmount(e.target.value);
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
        {/* <Confirmation_Modal
          item={props.item}
          addToCart={() => {
            props.addToCart(props.item, amount);
          }}
        /> */}
      </td>
    </tr>
  );
}
export default DataRow;
