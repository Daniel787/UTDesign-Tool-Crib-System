
import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";

function DataTable(props) {
  const head = ["ID", "Name", "Status", "Add To Cart"]
  return (
    <div>
      <Table responsive hover>
        <thead>
          <tr>
            {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
          </tr>
        </thead>
        <tbody>{
          props.list.map((item, i) => {
            return (
              <Row key={item.tool_id} item={item} addToCart={props.addToCart} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
