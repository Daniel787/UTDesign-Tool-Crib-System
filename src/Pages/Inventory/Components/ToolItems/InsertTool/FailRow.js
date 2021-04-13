import React, { useState } from 'react'
import { Button } from "react-bootstrap";

export default function FailRow(props) {
    const [row, setRow] = useState({
        tool_id: props.item.tool_id,
        name: props.item.name,
    });

    function validName(input) {
        return input.length > 0
    }

    return (
        <tr>
            <td>{row.tool_id}</td>
            <td><input
                value={row.name}
                onFocus={e => e.target.select()}
                onChange={(e) => setRow((prev) => ({ ...prev, name: e.target.value }))} />
                {!validName(row.name) && <h5>Enter Valid Name</h5>}</td>
            <td>
                <Button onClick={() => props.handleFail(props.index, row)}>Reprocess</Button> <br />
                <Button onClick={() => props.handleFail(props.index)}>Remove</Button></td>
        </tr>
    )
}
