/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Buy.module.css";
import axios from "axios";
import DataTable from "./Components/ItemTable/Table";
import Head from './Components/Head/Head'


export default function Buy() {
  const host = process.env.REACT_APP_SERVER_SITE;
  const port = process.env.REACT_APP_INVENTORY;
  const port2 = process.env.REACT_APP_PARTS;
  const url = host + port + port2;
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);

  // grabs items to list
  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  // grabs list on first render
  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div className={styles.Body}>
      <h1>Buy Page</h1>
      {/* options */}
      <Head
        url={url}
        refreshList={refreshList}
        setList={setList}
        styles={styles}
        cart={cart}
        setCart={setCart} />
      {/* table list */}
      <DataTable
        setCart={setCart}
        cart={cart}
        styles={styles}
        list={list}
      />
    </div>
  );
}
