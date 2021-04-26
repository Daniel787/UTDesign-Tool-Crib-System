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

  function removeFromCart(index) {
    let newCart = [...props.cart];
    newCart.splice(index, 1);
    props.setCart(newCart);
  }

  function modifyCart(event, index) {
    let newCart = [...props.cart];
    props.setCart(newCart);
  }

  function checkOut() {
    const newObj = { cart: props.cart, customer: groupInfo };
    Axios.post(host + inventoryPort + toolPort + "/rent", newObj).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    props.setCart([]);
    setgroupInfo({ group_id: 0, net_id: "" });
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
      <Modal show={cartShow} onHide={() => { setCartShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title> Cart </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartTable cart={props.cart} modifyCart={modifyCart} removeFromCart={removeFromCart} />
          {props.cart.length > 0 && <Info groupInfo={groupInfo} setgroupInfo={setgroupInfo} validInfo={validInfo} dialogClassName={styles.MyModal} />}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setCartShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={!validInfo()}
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
