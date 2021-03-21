import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

function DataTable(props) {
  const [list, setList] = useState([]);

  function refreshItem() {
    const formStyle = {
      width: "100%",
    };
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
              <Button> Add To Cart </Button>
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
            <th>Quantity</th>
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
