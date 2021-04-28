import React from "react";
import { Button, Table } from "react-bootstrap";

export default function CartTable(props) {
    const head = ["Name", "ID", "Hours/Days", "Remove"]
    return (
        <div>
            <Table responsive hover>
                {/* displays header by mapping header array tp table head */}
                <thead>
                    <tr>
                        {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
                    </tr>
                </thead>
                {/* displays cart by mapping cart to to a table row  */}
                <tbody>{
                    props.cart.map((el, i) => {
                        return (
                            <tr key={i}>
                                <td > {el.item.name} </td>
                                <td>  {el.item.tool_id} </td>
                                {/* displays rental time by checking if which type it is */}
                                <td>  {el.item.days ? <div>{el.item.returnDate} ({el.item.days} days)</div> : <div>{el.item.hours} hours</div>}</td>
                                {/* removes from cart by calling remove from cart function */}
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
