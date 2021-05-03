import React from 'react'
import { Table } from "react-bootstrap";

export default function ConflictStudent(props) {
    const head = ["Net ID", "Stored Name", "Inputted Name", "Group Adding To"]
    return (
        <div>
            <h3>Unexpected Conflict Students</h3>
            <Table responsive hover>
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                <tbody>{
                    props.status &&
                    props.status.conflictinserts.new.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.students[0].net_id}</td>
                                <td>{props.status.conflictinserts.old[i].students[0].name}</td>
                                <td>{item.students[0].name}</td>
                                <td>{item.group_id}</td>
                            </tr>
                        )
                    })
                }</tbody>
            </Table>
        </div>
    );
}
