import Axios from "axios";
import ItemList from "./ItemList";
import Cart from "./Cart";
import React, { useEffect, useState } from "react";
import styles from "./Buy.module.css";

export default function Buy() {
  const [cart, setCart] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    refreshList();
  }, []);

  function refreshList() {
    Axios.get("http://localhost:5000/inventory").then((response) => {
      setList(response.data);
    });
  }

  return (
    <div className={styles.Body}>
      <h1>Buy Page</h1>
      <ItemList
        refreshList={refreshList}
        list={list}
        setList={setList}
        cart={cart}
        setCart={setCart}
      />
      {cart.length > 0 && <Cart cart={cart} setCart={setCart} />}
    </div>
  );
}
