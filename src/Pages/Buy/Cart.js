import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Cart(props) {
    const [total, setTotal] = useState(0);
    const [groupInfo, setgroupInfo] = useState({ groupID: 0, netID: '' })
    const [error, setError] = useState({ quantity: false, netID: false, groupID: false })
    function removeFromCart(index) {
        let newCart = [...props.cart];
        newCart.splice(index, 1);
        props.setCart(newCart);
    }
    useEffect(() => {
        let temp = 0;
        for (let i = 0; i < props.cart.length; i++) {
            if (props.cart[i].quantity < 0 || !props.cart[i].quantity || props.cart[i].quantity > props.cart[i].item.quantity_available) {
                setError(prev => ({ ...prev, quantity: true }))
                break
            }
            else {
                setError(prev => ({ ...prev, quantity: false }))
            }
            temp += props.cart[i].total;
        }
        setTotal(temp);
    }, [props.cart]);

    useEffect(() => {
        groupInfo.netID.length === 9 ? setError(prev => ({ ...prev, netID: false })) : setError(prev => ({ ...prev, netID: true }))
        groupInfo.groupID === 0 ? setError(prev => ({ ...prev, groupID: true })) : setError(prev => ({ ...prev, groupID: false }))
    }, [groupInfo]);

    function changeQuantity(event, index) {
        let newCart = [...props.cart];
        const value = parseInt(event.target.value);
        newCart[index].quantity = value;
        newCart[index].total =
            newCart[index].quantity * newCart[index].item.current_cost;
        props.setCart(newCart);
    }

    function checkOut() {
        if (error.quantity || error.netID || error.groupID) {

        }
        else {
            const newObj = { cart: props.cart, customer: groupInfo }
            console.log(newObj)
            // Axios.post("http://localhost:5000/inventory/transaction/", newObj);
            props.setCart([])
            setgroupInfo({ groupID: 0, netID: '' })
            setError(false)
        }
    }

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {props.cart.map((el, i) => {
                return (
                    <div key={i} className="useritem">
                        <h3>{el.item.name}</h3>
                        <label>Part ID:</label> {el.item.part_id} <br />
                        <label>Quantity in Stock:</label> {el.item.quantity_available}{" "}
                        <br />
                        <label>Current Price:</label> ${el.item.current_cost}
                        <br />
                        <label>Quantity Wanted:</label>
                        <input
                            type="number"
                            value={props.cart[i].quantity}
                            onFocus={(e) => e.target.select()}
                            onChange={(e) => changeQuantity(e, i)}
                        />
                        {error.quantity && <h4>Input Error</h4>}
                        <br />
                        {el.quantity > 1 && (
                            <>
                                <label>Total of Item:</label> $
                                {el.quantity * el.item.current_cost}
                                <br />
                            </>
                        )}
                        <button onClick={() => removeFromCart(i)}>Remove</button>
                    </div>
                );
            })}
            {props.cart.length > 0 ? <h3>Total Price: ${error.quantity ? 'invalid' : total}</h3> : <h3>Cart Empty</h3>}
            <label>Group ID</label>: <input value={groupInfo.groupID} onFocus={(e) => e.target.select()} onChange={e => setgroupInfo(prev => ({ ...prev, groupID: e.target.value }))} /><br />
            <label>NetID</label>: <input value={groupInfo.netID} onFocus={(e) => e.target.select()} onChange={e => setgroupInfo(prev => ({ ...prev, netID: e.target.value }))} /><br />
            <button onClick={() => checkOut()}>Check Out</button>
        </div>
    );
}
