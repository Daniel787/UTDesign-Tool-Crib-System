import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import AddMemberinGroup from "./AddMemberinGroup";
import RemoveGroupMember from "./RemoveMemberinGroup";
import Styles from "./group_modal.module.css";

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
          <td key={props.item.group.group_id.toString()}>
            {" "}
            {props.item.group.group_id}{" "}
          </td>
          <td key={props.item.group.group_name.toString()}>
            {" "}
            {props.item.group.group_name}{" "}
          </td>
          <td key={props.item.group.group_sponsor.toString()}>
            {" "}
            {props.item.group.group_sponsor}{" "}
          </td>
          <td>
            <Button onClick={showGroup}> Show Student </Button>
          </td>
        </tr>
      </tbody>
      <Modal show={showGroupModal} dialogClassName={Styles.MyModal}>
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
                <td> UTD ID</td>
                <td> Email </td>
                <td> Hold </td>
                <td> Remove </td>
              </tr>
            </thead>
            <tbody>
              {props.item.group.students.map((item, i) => {
                if (item.display == 1) {
                  return (
                    <tr key={i}>
                      <td> {item.name} </td>
                      <td> {item.net_id} </td>
                      <td> {item.utd_id} </td>
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
                } else {
                  return <div> </div>;
                }
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={turnOffGroup}>
            Close
          </Button>
          <AddMemberinGroup group_id={props.item.group.group_id} />
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
