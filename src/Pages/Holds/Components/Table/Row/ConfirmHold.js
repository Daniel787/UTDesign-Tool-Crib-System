import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import styles from '../Table.module.css'
function Confirmation_Modal(props) {
  const [show, setShow] = useState(false);
  const head = ["Tool ID", "Name", "Group ID", "Start Date", "Due Date"]

  return (
    <div>
      {/* opens modal */}
      <Button variant="primary" onClick={() => { setShow(true) }}>
        Change
      </Button>

      {/* modal */}
      <Modal show={show} onHide={() => { setShow(false) }} dialogClassName={styles.MyModal}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        {/* main part */}
        <Modal.Body>
          {" "}
          <h3>Net ID: {props.item.net_id}</h3>
          <h4>Name: {props.item.name}</h4>
          <h4>UTD ID: {props.item.utd_id}</h4>
          <h4>Email: {props.item.email}</h4>
          {/* lists items currently rented out */}
          <Table responsive hover>
            {/* maps header array to table header */}
            <thead>
              <tr>
                {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
              </tr>
            </thead>
            {/* displays rows by mapping list of tools  */}
            <tbody>
              {props.item.tools.map((el, i) => {
                return <tr key={i}>
                  <td>{el.tool_id}</td>
                  <td>{el.tool_name}</td>
                  <td>{el.group_id}</td>
                  <td>{el.start_date} </td>
                  <td>{el.start_date}</td>
                </tr>
              })}</tbody>
          </Table>

        </Modal.Body>
        {/* bottom options */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false) }}>
            Cancel{" "}
          </Button>
          {/* processes hold removal by calling remove hold function */}
          <Button
            variant="primary"
            onClick={() => {
              props.removeHold(props.item)
              setShow(false)
            }}
          >
            Confirm{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Confirmation_Modal;
