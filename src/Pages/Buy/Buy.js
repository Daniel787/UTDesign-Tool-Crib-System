import Axios from "axios";
import ItemList from './ItemList'
import Cart from './Cart'
import React, { useEffect, useState } from "react";
import styles from "./Buy.module.css";

export default function Buy() {

  const [cart, setCart] = useState([])
  const [list, setList] = useState([])
  useEffect(() => {
    refreshList()
  }, [])

  function refreshList() {
    Axios.get('http://localhost:5000/api/getall/')
      .then((response) => {
        setList(response.data)
      })
  }

  return (
    <div className={styles.Body}>
      <h1>Buy Page</h1>
      <Cart cart={cart} setCart={setCart} />
      <ItemList refreshList={refreshList} list={list} setList={setList} cart={cart} setCart={setCart} />
    </div>
  );
}
