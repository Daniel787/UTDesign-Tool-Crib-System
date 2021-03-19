import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Cart(props) {
    const [total, setTotal] = useState(0);
    const [groupInfo, setgroupInfo] = useState({ groupID: 0, netID: '' })
    const [error, setError] = useState(false)
    function removeFromCart(index) {
        let newCart = [...props.cart];
        newCart.splice(index, 1);
        props.setCart(newCart);
    }
    useEffect(() => {
        let temp = 0;
        for (let i = 0; i < props.cart.length; i++) {
            if (props.cart[i].quantity < 0 || !props.cart[i].quantity) {
                setError(true)
                break
            }
            else {
                setError(false)
            }
            temp += props.cart[i].total;
        }

        setTotal(temp);
    }, [props.cart]);

    function changeQuantity(event, index) {
        let newCart = [...props.cart];
        const value = parseInt(event.target.value);
        newCart[index].quantity = value;
        newCart[index].total =
            newCart[index].quantity * newCart[index].item.current_cost;
        props.setCart(newCart);
    }

    function checkOut() {
        // Axios.post("http://localhost:5000/api/inventory/", props.cart);
        if (groupInfo.groupID > 0 && groupInfo.netID && !error && props.cart.length > 0) {
            const newObj = Object.assign(props.cart, groupInfo)
            console.log(newObj)
            props.setCart([]);
            setgroupInfo({ groupID: 0, netID: '' })
        }
    }

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {props.cart.map((el, i) => {
                return (
                    <div key={i} className="useritem">
                        <h3>{el.item.name}</h3>
                        <label> ID:</label> {el.item.part_id} <br />
                        <label>Quantity in Stock:</label> {el.item.quantity_available}{" "}
                        <br />
                        <label>Price:</label> ${el.item.current_cost}
                        <br />
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={props.cart[i].quantity}
                            onFocus={(e) => e.target.select()}
                            onChange={(e) => changeQuantity(e, i)}
                        ></input>
                        {error && <h4>Input Error</h4>}
                        <br />
                        {el.quantity > 1 && (
                            <>
                                <label>Total Price:</label> $
                                {el.quantity * el.item.current_cost}
                                <br />
                            </>
                        )}
                        <button onClick={() => removeFromCart(i)}>Remove</button>
                    </div>
                );
            })}
            {props.cart.length > 0 ? <h3>Total Price: ${error ? 'invalid' : total}</h3> : <h3>Cart Empty</h3>}
            <label>Group ID</label>: <input value={groupInfo.groupID} onFocus={(e) => e.target.select()} onChange={e => setgroupInfo(prev => ({ ...prev, groupID: e.target.value }))} /><br />
            <label>NetID</label>: <input value={groupInfo.netID} onFocus={(e) => e.target.select()} onChange={e => setgroupInfo(prev => ({ ...prev, netID: e.target.value }))} /><br />
            <button onClick={() => checkOut()}>Check Out</button>
        </div>
    );
}
