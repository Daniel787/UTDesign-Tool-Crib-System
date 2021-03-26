import React, { useEffect, useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import Axios from "axios";

function CartModal(props) {
  const [total, setTotal] = useState(0);
  const [groupInfo, setgroupInfo] = useState({
    groupID: 0,
    netID: "",
  });
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

  function initInput() {
    return (groupInfo.netID.length === 0 && (groupInfo.groupID === 0 || !groupInfo.groupID))
  }

  function checkOut() {
    const newObj = { cart: props.cart, customer: groupInfo };
    console.log(newObj);

    Axios.post("http://localhost:5000/inventory/buy/", newObj).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    props.setCart([]);
    setgroupInfo({ groupID: 0, netID: "" });

    setError({
      quantity: false,
      netID: false,
      groupID: false,
    });
    props.refreshList();
  }

  return (
    <div>
      <Modal show={props.cartShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Cart </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.cart.map((el, i) => {
            return (
              <div>
                ID : {el.item.part_id} <br />
                Name : {el.item.name} <br />
                Quantity Wanted : <input
                  type="number"
                  value={el.quantity}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => changeQuantity(e, i)}
                /><br />
                Total : {el.total > 0 ? (el.item.quantity_available < el.quantity ? 'not enough in stock' : el.total) : 'invalid quantity'} <br />
                <Button onClick={() => removeFromCart(i)}>Remove</Button>
              </div>
            );
          })}
          {props.cart.length > 0 &&
            <div>
              <input placeholder="netid" type="text" value={groupInfo.netID} onChange={e => setgroupInfo(prev => ({ ...prev, netID: e.target.value }))} />
              <input placeholder="groupid" type="number" value={groupInfo.groupID} onChange={e => setgroupInfo(prev => ({ ...prev, groupID: e.target.value }))} />
            </div>}
          {!initInput() && <h3>Invalid Input Format</h3>}
        </Modal.Body>
        <Modal.Footer>
          {error ? <h3>Invalid Quantity Field</h3> : <h3>Total : {total}</h3>}
          <Button variant="secondary" onClick={props.handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={groupInfo.netID.length !== 9 || !(groupInfo.groupID > 0) || error}
            onClick={() => {
              checkOut();
              props.handleClose();
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
