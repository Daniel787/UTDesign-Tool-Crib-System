import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import Info from './Info'
import CartTable from './CartTable'
import styles from '../Head.module.css'

function CartModal(props) {
  const [total, setTotal] = useState(0);
  const host = process.env.REACT_APP_SERVER_SITE;
  const port = process.env.REACT_APP_INVENTORY;
  const port2 = process.env.REACT_APP_PARTS;
  const url = host + port + port2
  const [groupInfo, setgroupInfo] = useState({
    group_id: 0,
    net_id: "",
  });
  const [cartShow, setCartShow] = useState(false);
  const [error, setError] = useState(false);

  // removes from cart by splicing array
  function removeFromCart(index) {
    let newCart = [...props.cart];
    newCart.splice(index, 1);
    props.setCart(newCart);
  }

  // sets errors total by checking if it's valid when cart updates
  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < props.cart.length; i++) {
      // valid when quantity is a positive int within stock range
      if (
        props.cart[i].quantity < 0 ||
        !props.cart[i].quantity ||
        props.cart[i].quantity > props.cart[i].item.quantity_available
      ) {
        setError(true);
        temp = 0;
        break;
      } else {
        setError(false);
        temp = Math.floor((temp + props.cart[i].total) * 100) / 100;
      }
    }
    props.cart.length === 0 && setError(false)
    setTotal(temp);
  }, [props.cart]);

  // updats a quantity in cart by using index and new input
  function changeQuantity(event, index) {
    let newCart = [...props.cart];
    // sets input
    const value = event.target.value ? parseInt(event.target.value) : "";
    newCart[index].quantity = value;
    // resets total of item by multiplying cost and quantity
    newCart[index].total = Math.floor((newCart[index].item.current_cost * newCart[index].quantity) * 100) / 100
    props.setCart(newCart);
  }

  // processes order by posting cart and group info to the server
  function checkOut() {
    const newObj = { cart: props.cart, customer: groupInfo };
    // posts object to server
    Axios.post(url + "/buy", newObj).then(
      (response) => {
        console.log(response);
      }
    );
    // resets info
    props.setCart([]);
    setgroupInfo({ group_id: 0, net_id: "" });
    setError(false);
  }

  // checks if student info is valid 
  function validInfo() {
    // group id's can only be positive integers
    if (groupInfo.group_id > -1 && groupInfo.group_id % 1 === 0) {
      // net id's have to be in a specific format
      return groupInfo.net_id.length === 9 && /^[a-zA-Z]+$/.test(groupInfo.net_id.substring(0, 3)) && /^[0-9]+$/.test(groupInfo.net_id.substring(4))
    }
    return false
  }


  return (
    <div>
      {/* opens modal */}
      <Button className={props.styles.Container} variant="primary" onClick={() => { setCartShow(true) }}>
        Cart
      </Button>
      {/* modal */}
      <Modal show={cartShow} onHide={() => { setCartShow(false) }} dialogClassName={styles.MyModal}>
        <Modal.Header closeButton>
          <Modal.Title> Cart </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {/* displays cart list by calling table compenent */}
          <CartTable cart={props.cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />
          {/* student info is only prompted when the cart has items */}
          {props.cart.length > 0 && <Info groupInfo={groupInfo} setgroupInfo={setgroupInfo} validInfo={validInfo} />}
        </Modal.Body>
        {/* options */}
        <Modal.Footer>
          {/* displays total if it's valid */}
          <h3>Total : ${error ? 0 : total}</h3>
          <Button variant="secondary" onClick={() => { setCartShow(false) }}>
            Cancel{" "}
          </Button>
          {/* proceses order only when valid */}
          <Button
            variant="primary"
            disabled={!validInfo() || error}
            onClick={() => {
              checkOut();
              setCartShow(false);
            }}
          >
            Check Out{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;
