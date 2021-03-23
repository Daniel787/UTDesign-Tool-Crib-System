import React, { useEffect, useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";

function CartModal(props) {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [groupInfo, setgroupInfo] = useState({ groupID: 0, netID: "" });
  const [error, setError] = useState({
    quantity: false,
    netID: false,
    groupID: false,
  });
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
        setError((prev) => ({ ...prev, quantity: true }));
        temp = 0;
        break;
      } else {
        setError((prev) => ({ ...prev, quantity: false }));
      }
      temp += props.cart[i].total;
    }
    setTotal(temp);
  }, [props.cart]);

  useEffect(() => {
    groupInfo.netID.length === 9
      ? setError((prev) => ({ ...prev, netID: false }))
      : setError((prev) => ({ ...prev, netID: true }));
    groupInfo.groupID > 0
      ? setError((prev) => ({ ...prev, groupID: false }))
      : setError((prev) => ({ ...prev, groupID: true }));
  }, [groupInfo]);

  function changeQuantity(event, index) {
    let newCart = [...props.cart];
    const value = parseInt(event.target.value);
    newCart[index].quantity = value;
    newCart[index].total = parseFloat(
      newCart[index].quantity * parseFloat(newCart[index].item.current_cost)
    );
    props.setCart(newCart);
  }

  function checkOut() {
    const newObj = { cart: props.cart, customer: groupInfo };
    console.log(newObj);
    // Axios.post("http://localhost:5000/inventory/transaction/", newObj);
    props.setCart([]);
    setgroupInfo({ groupID: 0, netID: "" });
    setError(false);
  }

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Go To Cart
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Cart </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.cart.map((el) => {
            return (
              <div>
                ID : {el.item.part_id} <br />
                Name : {el.item.name} <br />
                Quantity Selected : {el.quantity} <br />
                Total : {el.total} <br />
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            // disabled={error.groupID || error.netID || error.quantity}
            onClick={() => {
              checkOut();
              handleClose();
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
