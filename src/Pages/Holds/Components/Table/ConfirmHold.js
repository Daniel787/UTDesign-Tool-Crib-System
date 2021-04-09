import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => { setShow(true) }}>
        Change
      </Button>

      <Modal show={show} onHide={() => { setShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          ID : {props.item.net_id} <br />
          Name : {props.item.name} <br />
          {/* {props.item.map((el, i) => { return <div key={i}>Tool ID : {el.tool_id}</div> })} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => {

              // props.removeHold(props.item.net_id)
              setShow(false)
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
