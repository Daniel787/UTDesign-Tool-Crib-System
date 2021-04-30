import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import CartTable from './CartTable'
import Info from './Info'
import styles from '../Head.module.css'

function CartModal(props) {
  const [groupInfo, setgroupInfo] = useState({
    group_id: 0,
    net_id: "",
  });
  const host = process.env.REACT_APP_SERVER_SITE;
  const inventoryPort = process.env.REACT_APP_INVENTORY;
  const toolPort = process.env.REACT_APP_RENT;
  const [cartShow, setCartShow] = useState(false);

  // removes from cart by splicing array
  function removeFromCart(index) {
    let newCart = [...props.cart];
    newCart.splice(index, 1);
    props.setCart(newCart);
  }

  // unused
  function modifyCart(event, index) {
    let newCart = [...props.cart];
    props.setCart(newCart);
  }

  // processes order by posting cart and group info to the server
  function checkOut() {
    const newObj = { cart: props.cart, customer: groupInfo };
    // posts object to server
    Axios.post(host + inventoryPort + toolPort + "/rent", newObj).then(
      (response) => {
        if (response.data.message === "SUCCESS") {
          props.setFail(null)
          window.location.reload()
        }
        else {
          props.setFail(response.data.message)
        }
      }
    );
    // resets info
    props.setCart([]);
    setgroupInfo({ group_id: 0, net_id: "" });
  }

  // checks if student info is valid 
  function validInfo() {
    // group id's can only be positive integers
    if (groupInfo.group_id > -1 && groupInfo.group_id % 1 === 0) {
      // net id's have to be in a specific format
      return groupInfo.net_id.length > 3 && /^[a-zA-Z]+$/.test(groupInfo.net_id.substring(0, 3)) && /^[0-9]+$/.test(groupInfo.net_id.substring(4))
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
      <Modal show={cartShow} onHide={() => { setCartShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title> Cart </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {/* displays cart list by calling table compenent */}
          <CartTable cart={props.cart} modifyCart={modifyCart} removeFromCart={removeFromCart} />
          {/* student info is only prompted when the cart has items */}
          {props.cart.length > 0 && <Info groupInfo={groupInfo} setgroupInfo={setgroupInfo} validInfo={validInfo} dialogClassName={styles.MyModal} />}
        </Modal.Body>
        {/* options */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setCartShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          {/* proceses rental only when valid */}
          <Button
            variant="primary"
            disabled={!validInfo()}
            onClick={() => {
              checkOut();
              setCartShow(false);
            }}
          >
            Rent{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;
