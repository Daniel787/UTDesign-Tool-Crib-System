
import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row/Row";

function DataTable(props) {
  const head = ["ID", "Name", "Status", "Add To Cart"]

  function addToCart(item, hours) {
    let exists = [...props.cart].map((el) => {
      return el.item.tool_id;
    });
    let newCart = [...props.cart];
    let index = exists.indexOf(item.tool_id);
    if (index < 0) {
      newCart.push({
        item: Object.assign(item, { hours: hours })
      });
    }
    props.setCart(newCart);
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
          props.list.map((item, i) => {
            return (
              <Row key={item.tool_id} item={item} addToCart={addToCart} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
