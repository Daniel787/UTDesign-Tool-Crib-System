import React from "react";
import { Button, Table } from "react-bootstrap";

export default function CartTable(props) {
    const head = ["Name", "ID", "Hours/Days", "Remove"]
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
                                <td>  {el.item.days ? <div>{el.item.days} days</div> : <div>{el.item.hours} hours</div>}</td>
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
