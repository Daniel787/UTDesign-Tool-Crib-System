import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import CartTable from './CartTable'

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
      }
      temp += props.cart[i].total;
    }
    props.cart.length === 0 && setError(false)
    setTotal(temp);
  }, [props.cart]);

  function changeQuantity(event, index) {
    let newCart = [...props.cart];
    const value = parseInt(event.target.value);
    newCart[index].quantity = value;
    newCart[index].total = parseFloat(
      newCart[index].quantity * parseFloat(newCart[index].item.current_cost)
    );
    props.setCart(newCart);
  }

  function valid() {
    return groupInfo.net_id.length === 9 && (groupInfo.group_id > 0 && groupInfo.group_id % 1 === 0)
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
          <CartTable cart={props.cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />
          {props.cart.length > 0 &&
            <div>
              <input placeholder="net_id" type="text" value={groupInfo.net_id} onChange={e => setgroupInfo(prev => ({ ...prev, net_id: e.target.value }))} />
              <input placeholder="group_id" type="number" value={groupInfo.group_id} onChange={e => setgroupInfo(prev => ({ ...prev, group_id: e.target.value }))} />
              {!valid() && <h4>Input valid net_id and group_id</h4>}
            </div>}

        </Modal.Body>
        <Modal.Footer>
          {error ? <h3>Invalid Quantity Field</h3> : <h3>Total : {total}</h3>}
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
