/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";

function DataTable(props) {


  return (
    <div>
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Remove</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>{
          props.list.map((item) => {
            return (
              <Row key={item.tool_id} removePart={props.removePart} modifyPart={props.modifyPart} item={item} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
