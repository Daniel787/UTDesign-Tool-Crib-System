import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

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
    newCart[index].total =
      newCart[index].quantity * newCart[index].item.current_cost;
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
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart">
            <h2>Shopping Cart</h2>
            {props.cart.map((el, i) => {
              return (
                <div key={i} className="useritem">
                  <h3>{el.item.name}</h3>
                  <label>Part ID:</label> {el.item.part_id} <br />
                  <label>Quantity in Stock:</label> {el.item.quantity_available}{" "}
                  <br />
                  <label>Current Price:</label> ${el.item.current_cost}
                  <br />
                  <label>Quantity Wanted:</label>
                  <input
                    type="number"
                    value={props.cart[i].quantity}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => changeQuantity(e, i)}
                  />
                  <br />
                  {el.quantity > 1 && <h4>Total of Item: ${el.total}</h4>}
                  <button onClick={() => removeFromCart(i)}>Remove</button>
                </div>
              );
            })}
            {error.quantity && <h3>Quantity Error</h3>}
            {total > 0 ? <h3>Total Price: ${total}</h3> : <h3>Cart Empty</h3>}
            <label>Group ID</label>:{" "}
            <input
              value={groupInfo.groupID}
              onFocus={(e) => e.target.select()}
              onChange={(e) =>
                setgroupInfo((prev) => ({ ...prev, groupID: e.target.value }))
              }
            />
            <br />
            <label>NetID</label>:{" "}
            <input
              value={groupInfo.netID}
              onFocus={(e) => e.target.select()}
              onChange={(e) =>
                setgroupInfo((prev) => ({ ...prev, netID: e.target.value }))
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={error.groupID || error.netID || error.quantity}
            onClick={() => {
              checkOut()
              handleClose();
            }}
          >
            {" "}
            Add To Cart{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;
