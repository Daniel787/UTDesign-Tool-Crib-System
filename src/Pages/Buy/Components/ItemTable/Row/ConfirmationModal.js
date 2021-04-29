import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);
  const head = ["ID", "Name", "Quantity Selected", "Total"]

  const handleClose = () => {
    props.reset();
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  // validates quantity by making sure it's and int and 1 to stock
  function invalid() {
    return props.item.quantity_available < 1 || props.amount < 1 || props.amount.toString().indexOf('.') > -1 || props.amount > props.item.quantity_available
  }
  return (
    <div>
      {/* opens modal */}
      <Button variant="primary" disabled={invalid()} onClick={handleShow}>
        Add To Cart
      </Button>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>

          <Table responsive hover>
            {/* maps array of headers to table header  */}
            <thead>
              <tr>
                {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
              </tr>
            </thead>
            {/* displays rows by mapping the list to row components */}
            <tbody>
              <tr>
                <td>{props.item.part_id}</td>
                <td>{props.item.name}</td>
                <td>{props.amount}</td>
                <td>${Math.floor(props.amount * props.item.current_cost * 100) / 100}</td>
              </tr>

            </tbody>
          </Table>

        </Modal.Body>
        {/* bottom options */}
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          {/* processes item to cart by calling add to cart function */}
          <Button
            variant="primary"
            onClick={() => {
              props.addToCart(props.item, props.amount);
              props.reset();
              handleClose();
            }}
          >
            {" "}
            Confirm{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Confirmation_Modal;
