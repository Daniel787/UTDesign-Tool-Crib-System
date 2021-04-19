
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
        quantity: amount > 0 ? amount : 1,
        total: item.current_cost * (amount > 0 ? amount : 1),
      });
    } else {
      if (
        newCart[index].quantity &&
        newCart[index].quantity < newCart[index].item.quantity_available
      ) {
        newCart[index].quantity += amount > 0 ? amount : 1;
        newCart[index].total = parseFloat(
          newCart[index].quantity * parseFloat(newCart[index].item.current_cost)
        );
      }
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
