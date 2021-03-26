import React, { useState, useEffect } from "react";
import styles from "./Buy.module.css";
import axios from "axios";
import DataTable from "./Components/Tables/Table";
import Search from "./Components/Search/Search";
import CartModal from "./Components/Modal/Cart_Modal";
import CSVDownload from "./Components/Download_CSV/CSVDownload";
import RefreshList from "./Components/Refresh_List/RefreshList";
import AddToCart from "./Components/GoToCart/GoToCart";

export default function Buy() {
  const [cart, setCart] = React.useState([]);
  const url = "http://localhost:5000/inventory";
  const [list, setList] = useState([]);

  const [cartShow, setCartShow] = useState(true);

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

  useEffect(() => {
    console.log("Change");
    console.log(cart);
  }, [cart]);

  function addToCart(item, amount) {
    console.log("Add");
    console.log(cart);
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
        <AddToCart styles={styles} handleShow={handleShow} />
        <CSVDownload styles={styles} />
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
