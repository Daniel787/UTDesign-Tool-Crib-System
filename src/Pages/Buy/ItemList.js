import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "./ItemList.module.css";

export default function ItemList(props) {
  const [idsearch, setIdsearch] = useState(0);
  const [namesearch, setNamesearch] = useState("");
  const url = "http://localhost:5000/inventory";
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   refreshList();
  // }, []);

  // function refreshList() {
  //   Axios.get(url).then((response) => {
  //     setList(response.data);
  //   });
  // }

  // function search(newurl, request) {
  //   Axios.get(url + newurl + request).then((response) => {
  //     response.data.length > 0 ? setList(response.data) : refreshList();
  //   });
  //   setIdsearch(0);
  //   setNamesearch("");
  // }

  // function addToCart(item, amount) {
  //   let exists = props.cart.map((el) => {
  //     return el.item.part_id;
  //   });
  //   let newCart = [...props.cart];
  //   let index = exists.indexOf(item.part_id);
  //   if (index < 0) {
  //     newCart.push({ item: item, quantity: 1, total: item.current_cost });
  //   } else {
  //     if (
  //       newCart[index].quantity &&
  //       newCart[index].quantity < newCart[index].item.quantity_available
  //     ) {
  //       newCart[index].quantity++;
  //       newCart[index].total =
  //         newCart[index].quantity * newCart[index].item.current_cost;
  //     }
  //   }
  //   props.setCart(newCart);
  //   refreshList();
  // }

  return (
    <Container className={styles.Container}>
      <div className="allusers">
        {/* <Navbar fluid>
          <Nav className={styles.links}>
            <div className={styles.label_first}>
              <label>By Part ID:</label>{" "}
              <input
                type="number"
                value={idsearch}
                onChange={(e) => setIdsearch(parseInt(e.target.value))}
              ></input>
              <button
                disabled={idsearch === 0 || !idsearch}
                onClick={() => search("/searchid?id=", idsearch)}
              >
                Search
              </button>
            </div>
            <div className={styles.label_first}>
              <label>By Name:</label>{" "}
              <input
                type="text"
                value={namesearch}
                onChange={(e) => setNamesearch(e.target.value)}
              ></input>
              <button
                disabled={namesearch.length === 0}
                onClick={() => search("/searchname?id=", namesearch)}
              >
                Search
              </button>
            </div>
          </Nav>
        </Navbar> */}
        <button onClick={props.refreshList}>Refresh List</button>
        {props.list.map((el, i) => {
          return (
            <div key={i} className={styles.useritem}>
              <h3>{el.name}</h3>
              <label> ID:</label> {el.part_id} <br />
              <label>Quantity:</label> {el.quantity_available} <br />
              <label>Price:</label> ${el.current_cost}
              <br />
              <button onClick={() => props.addToCart(el, 1)}>Add To Cart</button>
            </div>
          );
        })}
        <button onClick={props.refreshList}>Refresh List</button>
      </div>
    </Container>
  );
}
