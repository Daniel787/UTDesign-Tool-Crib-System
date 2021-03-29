
import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";

function DataTable(props) {
  const head = ["ID", "Name", "Stock", "Cost", "Quantity", "Add To Cart"]
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
              <Row key={item.part_id} item={item} addToCart={props.addToCart} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;