import React from "react";
import { Modal, Button } from "react-bootstrap";
import DupInsert from './DupInsert'
import FailInsert from './FailInsert'

export default function ErrorSheet(props) {
    function handleDup(index, overwrite) {
        if (overwrite) {
            props.modifyTool(props.status.conflictinserts.new[index])
        }
        let removeNew = [...props.status.conflictinserts.new]
        removeNew.splice(index, 1)
        let removeOld = [...props.status.conflictinserts.old]
        removeOld.splice(index, 1)
        if (removeNew.length === 0 && props.status.failedinserts.length === 0 && props.status.numduplicate > 0) {
            props.setStatus(null)
        } else {
            props.setStatus(prev => ({ ...prev, conflictinserts: { new: removeNew, old: removeOld } }))
        }

    }
    function handleFail(index, row) {
        if (row) {
            props.addTool(row)
        }
        let fails = [...props.status.failedinserts]
        fails.splice(index, 1)
        if (fails.length === 0 && props.status.conflictinserts.new.length === 0) {
            props.setStatus(null)
        } else {
            props.setStatus(prev => ({ ...prev, failedinserts: fails }))
        }


    }

    return (
        <div>
            <Modal show={props.status !== null} onHide={() => props.setStatus(null)} keyboard={false} backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title> Errors in Input </Modal.Title>
                </Modal.Header>
                {props.status && <div>
                    <Modal.Body>
                        <h3>There were {props.status.numduplicate} rows that were duplicates</h3>
                        <DupInsert status={props.status} handleDup={handleDup} />
                        <FailInsert status={props.status} handleFail={handleFail} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => props.setStatus(null)}>
                            Ignore Errors
                        </Button>
                    </Modal.Footer>
                </div>}
            </Modal>
        </div>
    );
}
