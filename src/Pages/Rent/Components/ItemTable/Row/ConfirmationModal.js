import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);
  const [days, setDays] = useState("")
  const [hours, setHours] = useState(2)
  const [check, setCheck] = useState(false)
  const head = ["ID", "Name", "Time For Rental"]
  const handleClose = () => {
    setHours(2)
    setDays("")
    setShow(false);
    setCheck(false)
  };
  const handleShow = () => {
    setShow(true);
  };

  var today = new Date();
  var dd = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
  var mm = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  function invalid() {
    // checks if todays date is not today
    if (days) {
      return today === days
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
                <td>{props.item.tool_id}</td>
                <td>{props.item.name}</td>
                <td>
                  {/* prompts hour input  */}
                    Hours: <input
                    type="number"
                    onFocus={(e) => e.target.select()}
                    style={{ "width": "4rem" }}
                    disabled={check}
                    value={hours}
                    onChange={(e) => setHours(e.target.value ? parseInt(e.target.value) : "")}
                  /> <input type="checkbox" onClick={(e) => setCheck(prev => !prev)} /> Days
                  {/* if days checked it will ask for number of days instead */}
                  {check && <div>Days: <input
                    type="date"
                    style={{ "width": "10rem" }}
                    min={today}
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  /></div>}
                </td>
              </tr>

            </tbody>
          </Table>

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
              props.addToCart(props.item, check ? 0 : hours, check ? days : null);
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
