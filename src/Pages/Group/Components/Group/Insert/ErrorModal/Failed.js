import React from 'react'
import FailRow from './FailRow'
import { Table } from "react-bootstrap";

export default function Failed(props) {

    const head = ["Group ID", "Group Name", "Sponsor", "Student Info"]
    return (
        <div>
            <h3>Unexpected Invalid Values</h3>
            <Table responsive hover>
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                <tbody>{
                    props.status &&
                    props.status.failed.map((item, i) => {

                        return (
                            <FailRow key={i} index={i} item={item} />
                        );
                    })
                }</tbody>
            </Table>
        </div>
    );
}
