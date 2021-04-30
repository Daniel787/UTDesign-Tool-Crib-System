import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import AddMember from "./AddMember";
import RemoveGroupMember from "./RemoveMemberinGroup";
import Styles from "./group_modal.module.css";
import ModifyGroup from './ModifyGroup'

export default function GroupInfo(props) {
  const [showGroupModal, setShowGroupModal] = useState(false);

  function showGroup() {
    setShowGroupModal(true);
  }
  function turnOffGroup() {
    setShowGroupModal(false);
  }

  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td >
            {" "}
            {props.item.group.group_id}{" "}
          </td>
          <td >
            {" "}
            {props.item.group.group_name}{" "}
          </td>
          <td >
            {" "}
            {props.item.group.group_sponsor}{" "}
          </td>
          <td>
            <ModifyGroup group={props.item.group} />
          </td>
          <td>
            <Button onClick={showGroup}> Show Student </Button>
          </td>
        </tr>
      </tbody>
      <Modal show={showGroupModal} dialogClassName={Styles.MyModal} onHide={() => turnOffGroup()}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            Students that are a part of {props.item.group.group_name}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Net ID</td>
                <td> Email </td>
                <td> Hold </td>
                <td> Remove </td>
              </tr>
            </thead>
            <tbody>
              {props.item.group.students.filter(item => item.display === 1).map((item, i) => {
                return (
                  <tr key={i}>
                    <td> {item.name} </td>
                    <td> {item.net_id} </td>
                    <td> {item.email} </td>
                    <td> {item.hold} </td>
                    <td>
                      {" "}
                      <RemoveGroupMember
                        group_id={props.item.group.group_id}
                        net_id={item.net_id}
                      />{" "}
                    </td>
                  </tr>
                );

              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={turnOffGroup}>
            Close
          </Button>
          <AddMember group_id={props.item.group.group_id} />
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
