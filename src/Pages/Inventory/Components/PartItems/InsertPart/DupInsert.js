import React from 'react'
import { Table, Button } from "react-bootstrap";

export default function DupInsert(props) {
    const head = ["Current ID", "Current Name", "New ID", "New Name", "Overwrite"]
    return (
        <div>
            <h3>Conflict Inserts</h3>
            <Table responsive hover>
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                <tbody>{
                    props.status &&
                    props.status.conflictinserts.old.map((_, i) => {
                        return (
                            <tr key={i}>
                                <td> {props.status.conflictinserts.old[i].part_id}</td>
                                <td> {props.status.conflictinserts.old[i].name}</td>
                                <td> {props.status.conflictinserts.new[i].part_id}</td>
                                <td> {props.status.conflictinserts.new[i].name}</td>
                                <td>
                                    <Button onClick={() => props.handleDup(i, true)}>Yes</Button> <br />
                                    <Button onClick={() => props.handleDup(i, false)}>No</Button>
                                </td>
                            </tr>
                        );
                    })
                }</tbody>
            </Table>
        </div>
    );
}
