import React, { useState } from 'react'
import { Button } from "react-bootstrap";

export default function FailRow(props) {
    const [row, setRow] = useState({
        tool_id: props.item.tool_id,
        name: props.item.name,
    });

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
                value={row.tool_id}
                onFocus={e => e.target.select()}
                style={{ "width": "4rem" }}
                onChange={(e) => setRow((prev) => ({ ...prev, tool_id: e.target.value }))} />
                {!validID(row.tool_id) && <h5>Invalid</h5>}</td>
            <td><input
                value={row.name}
                onFocus={e => e.target.select()}
                onChange={(e) => setRow((prev) => ({ ...prev, name: e.target.value }))} />
                {!validName(row.name) && <h5>Enter Valid Name</h5>}</td>
            <td>
                <Button
                    disabled={!validName(row.name) || !validID(row.tool_id)}
                    onClick={() => props.handleFail(props.index, row)}>Reprocess</Button> <br />
                <Button onClick={() => props.handleFail(props.index)}>Remove</Button></td>
        </tr>
    )
}
