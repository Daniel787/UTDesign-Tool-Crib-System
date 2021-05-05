import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function Return(props) {
  const [show, setShow] = useState(false);
  const [id, setid] = useState(null)
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  function returnItem(item) {
    axios.post(props.url + "/return?tool_id=" + parseInt(item)).then((result) => {
      console.log(result)
    })
  }

  return (
    <div>
      <Button variant="primary"
        className={props.styles.Container}
        onClick={handleShow}>
        Return
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Tool ID</Form.Label>
            <Form.Control
              type="number"
              value={id}
              placeholder="Enter Tool ID"
              onFocus={(e) => e.target.select()}
              onChange={(e) => setid(e.target.value ? parseInt(e.target.value) : "")}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={!(id > 0)}
            onClick={() => {
              handleClose();
              returnItem(id)
              setid(null)
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

export default Return;
