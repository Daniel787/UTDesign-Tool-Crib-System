import React from 'react'
import { Button } from "react-bootstrap";

export default function FailRow(props) {
    function validID(input) {
        if (!isNaN(input)) {
            return parseInt(input) > 0 && input.toString().indexOf(".") === -1;
        }
        else return false
    }

    function validQuantity(input) {
        if (!isNaN(input)) {
            return parseInt(input) > 0 && input.toString().indexOf(".") === -1;
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
            <td><input
                value={props.item.part_id}
                onFocus={e => e.target.select()}
                style={{ "width": "4rem" }}
                onChange={e => { props.handleFail(props.index, { ...props.item, part_id: e.target.value }) }} />
                {!validID(props.item.part_id) && <h5>Invalid</h5>}</td>
            <td><input
                value={props.item.name}
                onFocus={e => e.target.select()}
                onChange={e => { props.handleFail(props.index, { ...props.item, name: e.target.value }) }}
            />
                {!validName(props.item.name) && <h5>Enter Valid Name</h5>}</td>
            <td><input
                value={props.item.quantity_available}
                onFocus={e => e.target.select()}
                style={{ "width": "3rem" }}
                onChange={e => { props.handleFail(props.index, { ...props.item, quantity_available: e.target.value }) }}
            />
                {!validQuantity(props.item.quantity_available) && <h5>Invalid</h5>}</td>
            <td><input
                value={props.item.current_cost}
                onFocus={e => e.target.select()}
                style={{ "width": "4rem" }}
                onChange={e => { props.handleFail(props.index, { ...props.item, current_cost: e.target.value }) }}
            />
                {!validCost(props.item.current_cost) && <h5>Invalid</h5>}</td>
            <td>
                <Button onClick={() => props.handleFail(props.index)}>Remove</Button></td>
        </tr>
    )
}
