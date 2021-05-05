import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";

// displays current index item
function DataRow(props) {
  const [amount, setAmount] = useState(1);

  return (
    <tr>
      <td> {props.item.part_id} </td>
      <td> {props.item.name} </td>
      <td> {props.item.quantity_available} </td>
      <td> {props.item.current_cost} </td>
      <td>
        {/* changes quantity of desired item with an input */}
        <Form>
          <Form.Control
            style={{ "width": "4rem" }}
            type="number"
            value={amount}
            onClick={(event) => event.target.select()}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </Form>
      </td>
      <td>
        {/* adds to cart with a modal confirmation */}
        <ConfirmationModal
          item={props.item}
          amount={amount}
          addToCart={props.addToCart}
          reset={() => { setAmount(1) }}
        />
      </td>
    </tr>
  );
}
export default DataRow;
