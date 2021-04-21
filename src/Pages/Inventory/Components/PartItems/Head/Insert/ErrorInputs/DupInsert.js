import React from 'react'
import { Table, Button } from "react-bootstrap";

export default function DupInsert(props) {
    const head = ["ID", "Current Name", "Current Quantity", "Current Cost", "New Name", "New Quantity", "New Cost", "Merge", "Remove"]
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
                        const dups = props.status.conflictinserts
                        return (
                            <tr key={i}>
                                <td> {dups.old[i].part_id}</td>
                                <td> {dups.old[i].name}</td>
                                <td> {dups.old[i].quantity_available}</td>
                                <td> {dups.old[i].current_cost}</td>
                                <td> {dups.new[i].name}</td>
                                <td> {dups.new[i].quantity_available}</td>
                                <td> {dups.new[i].current_cost}</td>
                                <td><Button onClick={() => props.handleDup(i, true)}>Merge</Button></td>
                                <td> <Button onClick={() => props.handleDup(i, false)}>Remove</Button> </td>
                            </tr>
                        );
                    })
                }</tbody>
            </Table>
        </div>
    );
}
