/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
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
            <th> Add To Cart</th>
          </tr>
        </thead>
        <tbody>{displayList}</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
