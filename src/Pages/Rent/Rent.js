import React, { useState, useEffect } from "react";
import styles from "./Rent.module.css";
import axios from "axios";
import DataTable from "./Components/Tables/Table";
import Search from "./Components/Search/Search";
import CartModal from "./Components/Modal/Cart_Modal";
import CSVDownload from "./Components/Download_CSV/CSVDownload";
import RefreshList from "./Components/Refresh_List/RefreshList";
import AddToCart from "./Components/GoToCart/GoToCart";

export default function Rent() {
  const [cart, setCart] = React.useState([]);
  const url = "http://localhost:5000/tools";
  const [list, setList] = useState([]);

  const [cartShow, setCartShow] = useState(false);

  const handleClose = () => {
    setCartShow(false);
  };
  const handleShow = () => {
    setCartShow(true);
  };

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
    console.log(newCart);
    refreshList();
  }
  return (
    <div className={styles.Body}>
      <h1>Rent Page</h1>
      <DataTable
        addToCart={addToCart}
        cart={cart}
        refreshList={refreshList}
        list={list}
      />
      <div classname={styles.Parent}>
        <RefreshList refreshList={refreshList} styles={styles} />
        <AddToCart styles={styles} handleShow={handleShow} />
      </div>
      <CartModal
        cart={cart}
        setCart={setCart}
        cartShow={cartShow}
        handleClose={handleClose}
        refreshList={refreshList}
      />
    </div>
  );
}
