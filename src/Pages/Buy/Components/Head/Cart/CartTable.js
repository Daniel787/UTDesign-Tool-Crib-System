import React from "react";
import { Button, Table } from "react-bootstrap";

export default function CartTable(props) {
    const head = ["Name", "ID", "In Stock", "Quantity Wanted", "Total", "Remove"]
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
                                <td>  {el.item.part_id} </td>
                                <td>{el.item.quantity_available}</td>
                                {/* allows qunatity to be modified by calling change quantity */}
                                <td> <input
                                    type="number"
                                    value={el.quantity}
                                    style={{ "width": "4rem" }}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => props.changeQuantity(e, i)}
                                />
                                    {el.total <= 0 && 'Invalid Quantity'}
                                </td>
                                {/* displays total when it exists */}
                                <td> {el.total > 0 ? el.total : 'ERROR'} </td>
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
