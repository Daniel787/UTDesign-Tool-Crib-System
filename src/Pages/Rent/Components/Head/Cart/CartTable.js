import React from "react";
import { Button, Table } from "react-bootstrap";

export default function CartTable(props) {
    const head = ["Name", "ID", "Hours", "Remove"]
    return (
        <div>
            <Table responsive hover>
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                <tbody>{
                    props.cart.map((el, i) => {
                        return (
                            <tr key={i}>
                                <td > {el.item.name} </td>
                                <td>  {el.item.tool_id} </td>
                                <td>  <input
                                    type="number"
                                    value={el.item.hours}
                                    style={{ "width": "3rem" }}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => props.modifyCart(e, i)}
                                /></td>
                                <td> <Button onClick={() => props.removeFromCart(i)}>Remove</Button></td>
                            </tr>
                        );
                    })
                }</tbody>
            </Table>
        </div>
    );
}
//<CartRow key={i} el={el} index={i} removeFromCart={props.removeFromCart()} />
