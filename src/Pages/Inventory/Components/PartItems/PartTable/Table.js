/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";

function DataTable(props) {

  const head = ["ID", "Name", "Stock", "Cost", "Remove", "Modify"]
  return (
    <div>
      <Table responsive hover>
        <thead>
          <tr>
            {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
          </tr>
        </thead>
        <tbody>{
          props.list.map((item) => {
            return (
              <Row key={item.part_id} removePart={props.removePart} modifyPart={props.modifyPart} item={item} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
