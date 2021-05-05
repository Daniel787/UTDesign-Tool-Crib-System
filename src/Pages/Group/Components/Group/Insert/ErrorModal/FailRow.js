import React, { useState } from 'react'
import { Button, Modal, Table } from "react-bootstrap";

export default function FailRow(props) {
    const [show, setShow] = useState(false);

    const head = ["Net ID", "Name", "Email"]
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    // Function for checking if some of the information is valid or not
    function invalidGroupID(id) {
        return !(id.toString().indexOf('.') === -1 && id > 0) || id === ""
    }

    function invalidStudents(params) {
        return (
            props.item.students.filter((e) => {
                return e.name === "" || !(e.net_id.length > 3) || e.email === "";
            }).length > 0
        );
    }

    return (
        <tr>
            <td>
                {props.item.group_id}
                {(invalidGroupID(props.item.group_id)) && <h5>Invalid Group ID</h5>}
            </td>
            <td>
                {props.item.group_name}
                {(props.item.group_name.length === 0) && <h5>Invalid Group Name</h5>}
            </td>
            <td>
                {props.item.group_sponsor}
                {props.item.group_sponsor.length === 0 && 'N/A'}
            </td>
            <td>

                {
                    props.item.students.length > 1 ?
                        <div>
                            <Button variant="primary" onClick={handleShow}>
                                Show Students
                            </Button>
                            {invalidStudents() && <h5>Invalid Student Info</h5>}
                        </div>
                        : props.item.students.length === 1 ?
                            <div>
                                <div>Net Id: {props.item.students[0].net_id} {props.item.students[0].net_id.length === 0 && <h5>Invalid Net ID</h5>} </div>
                                <div>Name: {props.item.students[0].name} {props.item.students[0].name.length === 0 && <h5>Invalid Name</h5>} </div>
                                <div>Email: {props.item.students[0].email.length === 0 ? 'N/A' : props.item.students[0].email}</div>
                            </div> :
                            'N/A'
                }

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Students </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                                </tr>
                            </thead>
                            <tbody>
                                {props.item.students.map((current, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{current.net_id}{current.net_id.length === 0 && <h5>Invalid Net ID</h5>}</td>
                                            <td>{current.name}{current.name.length === 0 && <h5>Invalid Name</h5>}</td>
                                            <td>{current.email.length === 0 ? 'N/A' : current.email}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </td>
        </tr>
    )
}
