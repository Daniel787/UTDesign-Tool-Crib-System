import React from "react";
import { Modal, Button } from "react-bootstrap";
import DupInsert from './DupInsert'
import FailInsert from './FailInsert'

export default function ErrorSheet(props) {
    function handleDup(index, overwrite) {
        if (overwrite) {
            const item = { ...props.status.conflictinserts.new[index] }
            item.quantity_available += props.status.conflictinserts.old[index].quantity_available
            props.modifyPart(item)
        }
        let removeNew = [...props.status.conflictinserts.new]
        removeNew.splice(index, 1)
        let removeOld = [...props.status.conflictinserts.old]
        removeOld.splice(index, 1)
        if (removeNew.length === 0 && props.status.failedinserts.length === 0) {
            props.setStatus(null)
        } else {
            props.setStatus(prev => ({ ...prev, conflictinserts: { new: removeNew, old: removeOld } }))
        }
    }

    function handleFail(index, row) {
        let fails = [...props.status.failedinserts]
        if (row !== undefined) {
            fails[index] = row
            props.setStatus(prev => ({ ...prev, failedinserts: fails }))
        } else {
            fails.splice(index, 1)
            if (fails.length === 0 && props.status.conflictinserts.new.length === 0) {
                props.setStatus(null)
            } else {
                props.setStatus(prev => ({ ...prev, failedinserts: fails }))
            }
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
                        {props.status.conflictinserts.new.length > 0 && <DupInsert status={props.status} handleDup={handleDup} />}
                        {props.status.failedinserts.length > 0 && <FailInsert status={props.status} handleFail={handleFail} />}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => props.setStatus(null)}>
                            Ignore Errors
                        </Button>
                        <Button
                            variant="primary"
                            disabled={props.status.conflictinserts.new.length > 0}
                            onClick={() => { props.addParts(props.status.failedinserts); props.setStatus(null) }}>
                            Reprocess
                        </Button>
                    </Modal.Footer>
                </div>}

            </Modal>
        </div>
    );
}
