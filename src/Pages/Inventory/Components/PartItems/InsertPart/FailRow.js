import React, { useState } from 'react'
import { Button } from "react-bootstrap";

export default function FailRow(props) {
    const [row, setRow] = useState({
        part_id: props.item.part_id,
        name: props.item.name,
        quantity_available: props.item.quantity_available,
        current_cost: props.item.current_cost,
    });

    function validQuantity(input) {
        if (!isNaN(input)) {
            return parseInt(input) > 0 && input.indexOf(".") === -1;
        }
        else return false
    }
    function validCost(input) {
        if (!isNaN(input)) {
            const dec = input.toString().indexOf(".");
            if (dec !== -1) {
                return (
                    parseFloat(input) > 0 && input.length - dec <= 3
                );
            }
            return parseFloat(input) > 0;
        }
        else return false
    }
    function validName(input) {
        return input.length > 0

    }

    return (
        <tr>
            <td>{row.part_id}</td>
            <td><input
                value={row.name}
                onFocus={e => e.target.select()}
                onChange={(e) => setRow((prev) => ({ ...prev, name: e.target.value }))} />
                {!validName(row.name) && <h5>Enter Valid Name</h5>}</td>
            <td><input
                value={row.quantity_available}
                onFocus={e => e.target.select()}
                style={{ "width": "3rem" }}
                onChange={(e) => setRow((prev) => ({ ...prev, quantity_available: e.target.value, }))} />
                {!validQuantity(row.quantity_available) && <h5>Invalid</h5>}</td>
            <td><input
                value={row.current_cost}
                onFocus={e => e.target.select()}
                style={{ "width": "3rem" }}
                onChange={(e) => setRow((prev) => ({ ...prev, current_cost: e.target.value }))} />
                {!validCost(row.current_cost) && <h5>Invalid</h5>}</td>
            <td>
                <Button onClick={() => props.handleFail(props.index, row)}>Reprocess</Button> <br />
                <Button onClick={() => props.handleFail(props.index)}>Remove</Button></td>
        </tr>
    )
}
