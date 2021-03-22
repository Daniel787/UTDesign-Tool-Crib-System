import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import Confirmation_Modal from "../Modal/Confirmation_Modal";

function DataTable(props) {
  const [list, setList] = useState([]);
  const formStyle = {
    width: "100%",
  };
  function refreshItem() {
    props.refreshList();
    setList(() =>
      props.list.map((item) => {
        return (
          <tr key={item.part_id}>
            <td> {item.part_id} </td>
            <td> {item.name} </td>
            <td> {item.quantity_available} </td>
            <td> {item.current_cost} </td>
            <td>
              <Form>
                <Form.Control style={formStyle} placeholder="1" />
              </Form>
            </td>
            <td>
              <Confirmation_Modal item={item} addToCart={props.addToCart} />
            </td>
          </tr>
        );
      })
    );
  }

  return (
    <div>
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Cost</th>
            <th> Quantity </th>
            <th> Add To Cart</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </Table>
      <Button onClick={refreshItem}> Refresh List </Button>
      <Button> Go To Cart</Button>
    </div>
  );
}

export default DataTable;
