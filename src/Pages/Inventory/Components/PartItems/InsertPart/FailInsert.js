import React from 'react'
import FailRow from './FailRow'
import { Table } from "react-bootstrap";

export default function FailInsert(props) {
    const head = ["ID", "Name", "Quantity", "Cost", "Remove"]
    return (
        <div>
            <h3>Failed Inserts</h3>
            <Table responsive hover>
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                <tbody>{
                    props.status &&
                    props.status.failedinserts.map((item, i) => {
                        return (
                            <FailRow key={i} index={i} item={item} handleFail={props.handleFail} />
                        );
                    })
                }</tbody>
            </Table>
        </div>
    );
}
