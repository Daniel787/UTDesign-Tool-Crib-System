/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row/Row";

function DataTable(props) {
  const head = ["ID", "Name", "Status", "Student", "Date Info", "Remove", "Modify"]
  function removePart(tool_id) {
    console.log(tool_id);
    axios.post(props.url + "/delete?tool_id=" + tool_id).then((response) => { });
  }

  function modifyTool(new_tool) {
    console.log(new_tool);
    axios.post(props.url + "/modify", new_tool).then((response) => { });
  }
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
              <Row key={item.tool_id} removePart={removePart} modifyTool={modifyTool} item={item} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
