import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from '../Insert.module.css'
import Failed from './Failed'
import ConflictStudent from './ConflictStudent'
import ConflictsGroup from './ConflictsGroup'

export default function Error(props) {

    return (
        <div>
            <Modal show={props.status !== null} onHide={() => props.setStatus(null)} keyboard={false} backdrop="static" dialogClassName={styles.MyModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmations</Modal.Title>
                </Modal.Header>

                {props.status && <div>
                    <Modal.Body>
                        {props.status.conflictinserts.new.length > 0 && <ConflictStudent status={props.status} />}
                        {props.status.conflictgroups.new.length > 0 && <ConflictsGroup status={props.status} />}
                        {props.status.failed.length > 0 && <Failed status={props.status} />}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="primary"
                            disabled={props.status.conflictinserts.new.length > 0}
                            onClick={() => { props.setStatus(null) }}
                        >
                            OK
                        </Button>
                    </Modal.Footer>
                </div>}

            </Modal>
        </div>
    )
}
