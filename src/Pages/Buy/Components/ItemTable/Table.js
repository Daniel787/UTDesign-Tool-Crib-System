
import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row/Row";

function DataTable(props) {
  const head = ["ID", "Name", "Stock", "Cost", "Quantity", "Add To Cart"]

  function addToCart(item, amount) {
    let exists = [...props.cart].map((el) => {
      return el.item.part_id;
    });
    let newCart = [...props.cart];
    let index = exists.indexOf(item.part_id);
    if (index < 0) {
      newCart.push({
        item: item,
        quantity: amount,
        total: Math.floor((item.current_cost * amount) * 100) / 100,
      });
    } else {
      newCart[index].quantity += amount
      newCart[index].total = Math.floor((newCart[index].item.current_cost * newCart[index].quantity) * 100) / 100
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
          props.list.map((item) => {
            return (
              <Row key={item.part_id} item={item} addToCart={addToCart} />
            );
          })
        }</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
