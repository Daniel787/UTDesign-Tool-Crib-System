/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import Row from "./Row/Row";

//props: list refreshList url
function DataTable(props) {
  // removes object by posting part id to the server
  function removePart(part_id) {
    axios.post(props.url + "/delete?part_id=" + part_id).then((response) => {
      window.location.reload()
    });
  }

  // modifies by posting new part to the server
  function modifyPart(new_part) {
    axios.post(props.url + "/modify", new_part).then((response) => {
      window.location.reload()
    });
  }

  const head = ["ID", "Name", "Stock", "Cost", "Remove", "Modify"]
  return (
    <div>
      <Table responsive hover>
        {/* maps array of headers to table header  */}
        <thead>
          <tr>
            {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
          </tr>
        </thead>
        {/* displays rows by mapping the list to row components */}
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
