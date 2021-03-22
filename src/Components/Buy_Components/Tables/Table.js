import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import Confirmation_Modal from "../Modal/Confirmation_Modal";
import Row from "./Row";

function DataTable(props) {
  const [displayList, setDisplayList] = useState([]);

  function refreshItem() {
    props.refreshList();
    setDisplayList(() =>
      props.list.map((item) => {
        return (
          <Row key={item.part_id} item={item} addToCart={props.addToCart} />
        );
      })
    );
  }

  useEffect(() => {
    refreshItem();
  }, []);
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
        <tbody>{displayList}</tbody>
      </Table>
      <Button onClick={refreshItem}> Refresh List </Button>
      <Button> Go To Cart</Button>
    </div>
  );
}

export default DataTable;
