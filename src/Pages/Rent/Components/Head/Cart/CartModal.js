import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import CartTable from './CartTable'
import Info from './Info'

function CartModal(props) {
  const [groupInfo, setgroupInfo] = useState({
    group_id: 0,
    net_id: "",
  });
  const [error, setError] = useState(false)
  const host = process.env.REACT_APP_SERVER_SITE;
  const inventoryPort = process.env.REACT_APP_INVENTORY;
  const toolPort = process.env.REACT_APP_RENT;
  const [cartShow, setCartShow] = useState(false);

  useEffect(() => {
    for (let i = 0; i < props.cart.length; i++) {
      if (
        props.cart[i].item.hours < 0 ||
        !props.cart[i].item.hours
      ) {
        setError(true);
        break;
      } else {
        setError(false);
      }
    }

  }, [props.cart])

  function removeFromCart(index) {
    let newCart = [...props.cart];
    newCart.splice(index, 1);
    props.setCart(newCart);
  }

  function modifyCart(event, index) {
    let newCart = [...props.cart];
    newCart[index].item.hours = event.target.value ? parseInt(event.target.value) : ""
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
    props.refreshList();
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
          {props.cart.length > 0 && <Info groupInfo={groupInfo} setgroupInfo={setgroupInfo} />}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setCartShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={groupInfo.net_id.length !== 9 || !(groupInfo.group_id > 0) || error}
            onClick={() => {
              checkOut();
              setCartShow(false);
            }}
          >
            {" "}
            Check Out{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;
