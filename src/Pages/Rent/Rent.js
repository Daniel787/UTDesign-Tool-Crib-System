import React, { useState, useEffect } from "react";
import styles from "./Rent.module.css";
import axios from "axios";
import DataTable from "./Components/ItemTable/Table";
import Search from "./Components/Search/Search";
import CartModal from "./Components/Cart/CartModal";
import CSVDownload from "./Components/Download_CSV/CSVDownload";
import RefreshList from "./Components/Refresh_List/RefreshList";

export default function Rent() {
  const [cart, setCart] = React.useState([]);
  const host = process.env.REACT_APP_SERVER_SITE;
  const inventoryPort = process.env.REACT_APP_INVENTORY;
  const toolPort = process.env.REACT_APP_RENT;
  //const url = "http://localhost:5000/tools";
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

  function addToCart(item) {
    let exists = [...cart].map((el) => {
      return el.item.tool_id;
    });
    let newCart = [...cart];
    let index = exists.indexOf(item.tool_id);
    if (index < 0) {
      newCart.push({
        item: item,
      });
    }
    setCart(newCart);

    refreshList();
  }
  return (
    <div className={styles.Body}>
      <h1>Rent Page</h1>
      <Search url={url} refreshList={refreshList} setList={setList} />
      <DataTable
        addToCart={addToCart}
        cart={cart}
        refreshList={refreshList}
        list={list}
      />
      <div className={styles.Parent}>
        <RefreshList refreshList={refreshList} styles={styles} />
        <CartModal
          cart={cart}
          setCart={setCart}
          styles={styles}
          refreshList={refreshList}
        />
      </div>
    </div>
  );
}
