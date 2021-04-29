import React from 'react'
import { Modal, Button } from "react-bootstrap";

export default function Failed(props) {
    return (
        <div>
            {/* modal  */}
            <Modal show={props.fail !== null} onHide={() => props.setFail(null)} >
                <Modal.Header closeButton>
                    <Modal.Title>ERROR: Transction Failed</Modal.Title>
                </Modal.Header>
                {/* main */}
                <Modal.Body>
                    Student/Group might have a hold or there was invalid input
                    <div>
                        Message: {props.fail}
                    </div>
                </Modal.Body>
                {/* accept fail */}
                <Modal.Footer>
                    <Button onClick={() => props.setFail(null)}>
                        I Understand
                        </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
}
