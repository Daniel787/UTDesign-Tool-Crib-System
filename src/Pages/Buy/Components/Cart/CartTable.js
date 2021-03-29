import React from "react";
import { Button, Table } from "react-bootstrap";

export default function CartTable(props) {
    const head = ["Name", "ID", "In Stock", "Quantity Wanted", "Total", "Remove"]
    return (
        <div>
            <Table responsive hover>
                <thead>
                    <tr>
                        {head.map((el) => { return (<th >{el}</th>) })}
                    </tr>
                </thead>
                <tbody>{
                    props.cart.map((el, i) => {
                        return (
                            <tr key={i}>
                                <td > {el.item.name} </td>
                                <td>  {el.item.part_id} </td>
                                <td>{el.item.quantity_available}</td>
                                <td> <input
                                    type="number"
                                    value={el.quantity}
                                    style={{ "width": "3rem" }}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => props.changeQuantity(e, i)}
                                /></td>
                                <td> {el.total > 0 ? (el.item.quantity_available < el.quantity ? 'too much' : el.total) : 'invalid quantity'} </td>
                                <td> <Button onClick={() => props.removeFromCart(i)}>Remove</Button></td>
                            </tr>
                        );
                    })
                }</tbody>
            </Table>
        </div>
    );
}
