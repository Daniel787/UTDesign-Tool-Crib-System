import ItemList from "./ItemList";
import Cart from "./Cart";
import React, { useState, useEffect } from "react";
import styles from "./Buy.module.css";
import axios from "axios";
import DataTable from "../../Components/Buy_Components/Tables/Table";
import Search from './Search'

export default function Buy() {
  const [cart, setCart] = React.useState([]);
  const [idsearch, setIdsearch] = useState(0);
  const [namesearch, setNamesearch] = useState("");
  const url = "http://localhost:5000/inventory";
  const [list, setList] = useState([]);

  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  useEffect(() => {
    refreshList();
  }, []);

  function search(newurl, request) {
    axios.get(url + newurl + request).then((response) => {
      response.data.length > 0 ? setList(response.data) : refreshList();
    });
    setIdsearch(0);
    setNamesearch("");
  }

  function addToCart(item, amount) {
    let exists = cart.map((el) => {
      return el.item.part_id;
    });
    let newCart = [cart];
    let index = exists.indexOf(item.part_id);
    if (index < 0) {
      newCart.push({ item: item, quantity: 1, total: item.current_cost });
    } else {
      if (
        newCart[index].quantity &&
        newCart[index].quantity < newCart[index].item.quantity_available
      ) {
        newCart[index].quantity++;
        newCart[index].total =
          newCart[index].quantity * newCart[index].item.current_cost;
      }
    }
    setCart(newCart);
    refreshList();
  }
  return (
    <div className={styles.Body}>
      <h1>Buy Page</h1>
      {/* <Search url={url} refreshList={refreshList} setList={setList} /> */}
      <DataTable
        addToCart={addToCart}
        refreshList={refreshList}
        list={list}
      />
      {/*
      <ItemList cart={cart} setCart={setCart} />
      {cart.length > 0 && <Cart cart={cart} setCart={setCart} />} */}
    </div>
  );
}
