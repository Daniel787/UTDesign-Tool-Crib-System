import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import CartTable from './CartTable'

function CartModal(props) {
  const [groupInfo, setgroupInfo] = useState({
    groupID: 0,
    netID: "",
  });
  const [cartShow, setCartShow] = useState(false);
  function removeFromCart(index) {
    let newCart = [...props.cart];
    newCart.splice(index, 1);
    props.setCart(newCart);
  }

  function valid() {
    return groupInfo.netID.length === 9 && (groupInfo.groupID > 0 && groupInfo.groupID % 1 === 0)
  }

  function checkOut() {
    const newObj = { cart: props.cart, customer: groupInfo };
    console.log(newObj);

    Axios.post("http://localhost:5000/inventory/rent", newObj).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    props.setCart([]);
    setgroupInfo({ groupID: 0, netID: "" });
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
              <input placeholder="netid" type="text" value={groupInfo.netID} onChange={e => setgroupInfo(prev => ({ ...prev, netID: e.target.value }))} />
              <input placeholder="groupid" type="number" value={groupInfo.groupID} onChange={e => setgroupInfo(prev => ({ ...prev, groupID: e.target.value }))} />
              {!valid() && <h4>Input valid NetID and GroupID</h4>}
            </div>}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setCartShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={groupInfo.netID.length !== 9 || !(groupInfo.groupID > 0)}
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
