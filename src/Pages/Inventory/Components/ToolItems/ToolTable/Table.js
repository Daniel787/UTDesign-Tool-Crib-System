/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";

function DataTable(props) {
  const head = ["ID", "Name", "Status", "Student", "Date Info", "Remove", "Modify"]
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
              <Row key={item.tool_id} removePart={props.removePart} modifyTool={props.modifyTool} item={item} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
