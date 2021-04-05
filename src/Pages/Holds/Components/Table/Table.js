/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";

function DataTable(props) {
  const head = ["Net ID", "Name", "Email", "UTD ID", "Rentals", "Hold"]
  return (
    <div>
      <Table responsive hover>
        <thead>
          <tr>
            {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => {
            return (
              <Row key={item.net_id} item={item} removeHold={props.removeHold} />
            );
          })}</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
