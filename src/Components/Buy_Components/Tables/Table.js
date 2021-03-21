import React from "react";
import { Table, Button } from "react-bootstrap";

function dataTable() {
  const [items, setItems] = props.items.map((item) => {
    return (
      <tr key={item.part_id}>
        <th scope="row"> {item.part_id} </th>
        <td> {item.part_id} </td>
        <td> {item.quantity_available} </td>
        <td> {item.current_cost} </td>
      </tr>
    );
  });

  return (
    <Table responsive hover>
      <Thread>
        <tr>
          <th>ID</th>
          <th>Quantity</th>
          <th>Cost</th>
        </tr>
      </Thread>
      <tbody>{items}</tbody>
    </Table>
  );
}
