/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import Row from "./Row/Row";

//props: list refreshList url
function DataTable(props) {
  function removePart(part_id) {
    axios.post(props.url + "/delete?part_id=" + part_id).then((response) => { });
  }

  function modifyPart(new_part) {
    axios.post(props.url + "/modify", new_part).then((response) => {
    });
  }

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
              <Row key={item.part_id} removePart={removePart} modifyPart={modifyPart} item={item} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
