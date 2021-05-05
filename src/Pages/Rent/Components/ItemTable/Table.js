
import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row/Row";

function DataTable(props) {
  const head = ["ID", "Name", "Status", "Add To Cart"]

  // adds item to cart by grabbing the item at the index and pushing to cart
  function addToCart(item, hours, days) {
    // checks if item exists by maping the tool_id and finding an index
    let exists = [...props.cart].map((el) => {
      return el.item.tool_id;
    });
    let newCart = [...props.cart];
    let index = exists.indexOf(item.tool_id);
    // only adds to cart if its not in the cart
    if (index < 0) {
      let totalHours = hours
      let totalDays = 0
      if (days) {
        const yyyy = parseInt(days.substring(0, 4))
        const mm = parseInt(days.substring(5, 7)) - 1
        const dd = parseInt(days.substring(8, 10))
        const today = new Date()
        const returnDate = new Date(yyyy, mm, dd, 0, 0, 0, 0)
        totalDays = parseInt((returnDate - today) / (1000 * 60 * 60 * 24), 10) + 1
        totalHours = totalDays * 24

      }
      newCart.push({
        item: Object.assign(item, { hours: totalHours, days: totalDays, returnDate: days })
      });
    }
    props.setCart(newCart);
  }

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
