import axios from "axios";
import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";

function dataTable() {
  const url = "http://localhost:5000/inventory";

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
      <button onClick={props.refreshList()}> Refresh List </button>
    </Table>
  );
}

export default dataTable;
