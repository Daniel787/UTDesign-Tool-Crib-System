import React from 'react'
import { Table } from "react-bootstrap";

export default function ConflictsGroup(props) {

    const head = ["Group ID", "Stored Name", "Inputted Name"]
    return (
        <div>
            <h3>Unexpected Conflict Groups</h3>
            <Table responsive hover>
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                <tbody>{
                    props.status &&
                    props.status.conflictgroups.old.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.group_id}</td>
                                <td>{item.group_name}</td>
                                <td>{props.status.conflictgroups.new[i].group_name}</td>
                            </tr>
                        );
                    })
                }</tbody>
            </Table>
        </div>
    );
}
