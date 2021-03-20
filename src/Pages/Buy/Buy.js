
import ItemList from "./ItemList";
import Cart from "./Cart";
import React from "react";
import styles from "./Buy.module.css";

export default function Buy() {
  const [cart, setCart] = React.useState([]);

  return (
    <div className={styles.Body}>
      <h1>Buy Page</h1>
      {cart.length > 0 && <Cart cart={cart} setCart={setCart} />}
      <ItemList cart={cart} setCart={setCart} />
    </div>
  );
}
