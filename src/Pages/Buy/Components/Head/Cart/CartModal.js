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
  const [groupInfo, setgroupInfo] = useState({
    group_id: 0,
    net_id: "",
  });
  const [cartShow, setCartShow] = useState(false);
  const [error, setError] = useState(false);

  function removeFromCart(index) {
    let newCart = [...props.cart];
    newCart.splice(index, 1);
    props.setCart(newCart);
  }

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < props.cart.length; i++) {
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

  function changeQuantity(event, index) {
    let newCart = [...props.cart];
    const value = event.target.value ? parseInt(event.target.value) : "";
    newCart[index].quantity = value;
    newCart[index].total = Math.floor((newCart[index].item.current_cost * newCart[index].quantity) * 100) / 100
    props.setCart(newCart);
  }

  function checkOut() {
    const newObj = { cart: props.cart, customer: groupInfo };
    console.log(newObj);
    Axios.post(host + port + port2 + "/buy", newObj).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    props.setCart([]);
    setgroupInfo({ group_id: 0, net_id: "" });
    setError(false);
  }

  function validInfo() {
    if (groupInfo.group_id > -1 && groupInfo.group_id % 1 === 0) {
      return groupInfo.net_id.length === 9 && /^[a-zA-Z]+$/.test(groupInfo.net_id.substring(0, 3)) && /^[0-9]+$/.test(groupInfo.net_id.substring(4))
    }
    return false
  }


  return (
    <div>
      <Button className={props.styles.Container} variant="primary" onClick={() => { setCartShow(true) }}>
        Cart
      </Button>
      <Modal show={cartShow} onHide={() => { setCartShow(false) }} dialogClassName={styles.MyModal}>
        <Modal.Header closeButton>
          <Modal.Title> Cart </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartTable cart={props.cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />
          {props.cart.length > 0 && <Info groupInfo={groupInfo} setgroupInfo={setgroupInfo} validInfo={validInfo} />}
        </Modal.Body>
        <Modal.Footer>
          <h3>Total : ${error ? 0 : total}</h3>
          <Button variant="secondary" onClick={() => { setCartShow(false) }}>
            Cancel{" "}
          </Button>
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
