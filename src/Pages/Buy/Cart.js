import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Cart(props) {
    const [total, setTotal] = useState(0)
    function removeFromCart(index) {
        let newCart = [...props.cart]
        newCart.splice(index, 1);
        props.setCart(newCart)
    }
    useEffect(() => {
        let temp = 0
        for (let i = 0; i < props.cart.length; i++) {
            temp += (props.cart[i].total)
        }
        setTotal(temp)
    }, [props.cart])

    function changeQuantity(event, index) {
        let newCart = [...props.cart]
        const value = parseInt(event.target.value)
        newCart[index].quantity = value > 0 ? value : 1
        newCart[index].total = newCart[index].quantity * newCart[index].item.current_cost
        props.setCart(newCart)
    }

    function checkOut() {
        for (let i = 0; i < props.cart.length; i++) {
            const newObj = { part_id: props.cart[i].item.part_id, quantity_purchased: props.cart[i].quantity, purchased_cost: props.cart[i].total }
            console.log(newObj)
            // Axios.post('http://localhost:5000/api/newtransaction/', newObj)
        }
        props.setCart([])
    }

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {props.cart.map((el, i) => {
                return <div key={i} className="useritem">
                    <h3>{el.item.name}</h3>
                    <label> ID:</label> {el.item.part_id} <br />
                    <label>Quantity in Stock:</label> {el.item.quantity_available} <br />
                    <label>Price:</label> ${el.item.current_cost}<br />
                    <label>Quantity:</label><input type="number" value={props.cart[i].quantity} min="1" max={props.cart[i].item.quantity_available} onFocus={e => e.target.select()} onChange={e => changeQuantity(e, i)}></input><br />
                    {el.quantity > 1 && <><label>Total Price:</label> ${el.quantity * el.item.current_cost}<br /></>}
                    <button onClick={() => removeFromCart(i)}>Remove</button>
                </div>
            })}
            {props.cart.length > 0 ? <h3>Total Price: ${total}</h3> : <h3>Cart Empty</h3>}
            <button onClick={() => checkOut()}>Check Out</button>
        </div>
    )
}
