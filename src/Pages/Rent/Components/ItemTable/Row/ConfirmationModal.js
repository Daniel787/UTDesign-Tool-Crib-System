import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);
  const [days, setDays] = useState(1)
  const [hours, setHours] = useState(2)
  const [check, setCheck] = useState(false)

  const handleClose = () => {
    setHours(2)
    setDays(0)
    setShow(false);
    setCheck(false)
  };
  const handleShow = () => {
    setShow(true);
  };


  function invalid() {
    if (check) {
      return days < 1
    }
    else {
      return hours < 1 || hours > 23
    }
  }

  return (
    <div>
      {/* opens modal */}
      <Button variant="primary"
        disabled={props.item.status !== "Available"}
        onClick={handleShow}>
        Add To Cart
      </Button>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {" "}
          ID : {props.item.tool_id} <br />
          Name : {props.item.name} <br />{" "}
          {/* prompts hour input  */}
          Hours for Rental: <input
            type="number"
            onFocus={(e) => e.target.select()}
            style={{ "width": "4rem" }}
            disabled={check}
            value={hours}
            onChange={(e) => setHours(e.target.value ? parseInt(e.target.value) : "")}
          /> <input type="checkbox" onClick={(e) => setCheck(prev => !prev)} /> Days
          {/* if days checked it will ask for number of days instead */}
          {check && <div>Days for Rental: <input
            type="number"
            onFocus={(e) => e.target.select()}
            style={{ "width": "4rem" }}
            value={days}
            onChange={(e) => setDays(e.target.value ? parseInt(e.target.value) : "")}
          /></div>}
        </Modal.Body>
        {/* bottom options */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {/* processes item to cart by calling add to cart function */}
          <Button
            variant="primary"
            disabled={invalid()}
            // converts days to hours since server only works with hours
            onClick={() => {
              props.addToCart(props.item, check ? days * 24 : hours, check ? days : null);
              handleClose();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Confirmation_Modal;
