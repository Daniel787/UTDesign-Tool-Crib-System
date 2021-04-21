/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Rent.module.css";
import axios from "axios";
import DataTable from "./Components/ItemTable/Table";
import Head from './Components/Head/Head'

export default function Rent() {
  const [cart, setCart] = React.useState([]);
  const host = process.env.REACT_APP_SERVER_SITE;
  const inventoryPort = process.env.REACT_APP_INVENTORY;
  const toolPort = process.env.REACT_APP_RENT;
  const url = host + inventoryPort + toolPort;
  const [list, setList] = useState([]);

  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div className={styles.Body}>
      <h1>Rent Page</h1>
      <Head
        url={url}
        refreshList={refreshList}
        setList={setList}
        cart={cart}
        setCart={setCart} />
      <DataTable
        setCart={setCart}
        cart={cart}
        refreshList={refreshList}
        list={list}
      />

    </div>
  );
}
