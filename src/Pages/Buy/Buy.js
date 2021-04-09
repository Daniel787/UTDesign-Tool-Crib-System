/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Buy.module.css";
import axios from "axios";
import DataTable from "./Components/ItemTable/Table";
import Search from "./Components/Search/Search";
import CartModal from "./Components/Cart/CartModal";
import CSVDownload from "./Components/Download_CSV/CSVDownload";
import RefreshList from "./Components/Refresh_List/RefreshList";

export default function Buy() {
  const [cart, setCart] = React.useState([]);
  // const url = "http://localhost:5000/inventory";
  const host = process.env.REACT_APP_SERVER_SITE;
  const port = process.env.REACT_APP_INVENTORY;
  const port2 = process.env.REACT_APP_PARTS;
  const url = host + port + port2;
  const [list, setList] = useState([]);

  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  useEffect(() => {
    refreshList();
  }, []);

  function addToCart(item, amount) {
    let exists = [...cart].map((el) => {
      return el.item.part_id;
    });
    let newCart = [...cart];
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
    setCart(newCart);
    refreshList();
  }
  return (
    <div className={styles.Body}>
      <h1>Buy Page</h1>
      <Search url={url} refreshList={refreshList} setList={setList} />
      <DataTable
        addToCart={addToCart}
        cart={cart}
        refreshList={refreshList}
        list={list}
      />
      <div className={styles.Parent}>
        <RefreshList styles={styles} refreshList={refreshList} />
        <CartModal
          styles={styles}
          cart={cart}
          setCart={setCart}
          refreshList={refreshList}
        />
        <CSVDownload styles={styles} />
      </div>
    </div>
  );
}
