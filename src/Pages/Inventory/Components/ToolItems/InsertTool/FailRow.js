import React from 'react'
import { Button } from "react-bootstrap";

export default function FailRow(props) {

    function validID(input) {
        if (!isNaN(input)) {
            return parseInt(input) > 0 && input.indexOf(".") === -1;
        }
        else return false
    }

    function validName(input) {
        return input.length > 0
    }

    return (
        <tr>
            <td><input
                value={props.item.tool_id}
                onFocus={e => e.target.select()}
                style={{ "width": "4rem" }}
                onChange={e => { props.handleFail(props.index, { ...props.item, tool: e.target.value }) }} />
                {!validID(props.item.tool_id) && <h5>Invalid</h5>}</td>
            <td><input
                value={props.item.name}
                onFocus={e => e.target.select()}
                onChange={e => { props.handleFail(props.index, { ...props.item, name: e.target.value }) }} />
                {!validName(props.item.name) && <h5>Enter Valid Name</h5>}</td>
            <td>
                <Button onClick={() => props.handleFail(props.index)}>Remove</Button></td>
        </tr>
    )
}
