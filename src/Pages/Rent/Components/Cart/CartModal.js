import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import CartTable from './CartTable'

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

  function valid() {
    return groupInfo.net_id.length === 9 && (groupInfo.group_id > 0 && groupInfo.group_id % 1 === 0)
  }

  function checkOut() {
    const newObj = { cart: props.cart, customer: groupInfo };
    console.log(newObj);

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
          <CartTable cart={props.cart} removeFromCart={removeFromCart} />
          {props.cart.length > 0 &&
            <div>
              <input placeholder="net_id" type="text" value={groupInfo.net_id} onChange={e => setgroupInfo(prev => ({ ...prev, net_id: e.target.value }))} />
              <input placeholder="group_id" type="number" value={groupInfo.group_id} onChange={e => setgroupInfo(prev => ({ ...prev, group_id: e.target.value }))} />
              {!valid() && <h4>Input valid net_id and group_id</h4>}
            </div>}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setCartShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={groupInfo.net_id.length !== 9 || !(groupInfo.group_id > 0)}
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
