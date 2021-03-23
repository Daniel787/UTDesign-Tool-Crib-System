/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Confirmation_Modal from "../Modal/Confirmation_Modal";
import Row from "./Row";

function DataTable(props) {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(() =>
      props.list.map((item) => {
        return (
          <Row key={item.part_id} item={item} addToCart={props.addToCart} />
        );
      })
    );
  }, [props.list, props.cart]);

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
      <Button
        onClick={() => {
          props.refreshList();
        }}
      >
        {" "}
        Refresh List{" "}
      </Button>
    </div>
  );
}

export default DataTable;