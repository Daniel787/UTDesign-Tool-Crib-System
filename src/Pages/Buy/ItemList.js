import React, { useState } from 'react'
import Axios from 'axios'

export default function ItemList(props) {
    const [idsearch, setIdsearch] = useState(0)
    const [namesearch, setNamesearch] = useState('')

    // function searchID() {
    //     if (idsearch > 0) {
    //         Axios.get('http://localhost:5000/api/searchid/' + idsearch)
    //             .then((response) => {
    //                 response.data.length > 0 ? props.setList(response.data) : props.refreshList()
    //             })
    //     }
    //     else {
    //         props.refreshList()
    //     }
    //     setIdsearch(0)
    // }

    // function searchName() {
    //     if (namesearch.length > 0) {
    //         Axios.get('http://localhost:5000/api/searchname/' + namesearch)
    //             .then((response) => {
    //                 response.data.length > 0 ? props.setList(response.data) : props.refreshList()
    //             })
    //     }
    //     else {
    //         props.refreshList()
    //     }
    //     setNamesearch('')
    // }
    // 
    // function addToCart(item) {
    //     let exists = [...props.cart].map((el) => { return el.item.part_id })
    //     let newCart = [...props.cart]
    //     let index = exists.indexOf(item.part_id)
    //     if (index < 0) {
    //         newCart.push({ item: item, quantity: 1, total: item.cost })
    //     }
    //     else {
    //         if (newCart[index].quantity < newCart[index].item.quantity_available) {
    //             newCart[index].quantity++
    //             newCart[index].total = newCart[index].quantity * newCart[index].item.cost
    //         }
    //     }
    //     props.setCart(newCart)
    //     props.refreshList()
    // }

    return (
        <div className="allusers">
            <h2>Items</h2>
            <button onClick={props.refreshList}>Refresh List</button>
            {/* <div className="search">
                <h3>Search</h3>
                <div>
                    <label>By Part ID:</label> <input type="number" onFocus={e => e.target.select()} value={idsearch} onChange={e => setIdsearch(parseInt(e.target.value))}></input><button onClick={searchID}>Search</button>
                </div>
                <div>
                    <label>By Name:</label> <input type="text" value={namesearch} onChange={e => setNamesearch(e.target.value)}></input><button onClick={searchName}>Search</button>
                </div>
            </div> */}
            {props.list.map((el, i) => {
                return <div key={i} className="useritem">
                    <h3>{el.name}</h3>
                    <label> ID:</label> {el.part_id} <br />
                    <label>Quantity:</label> {el.quantity_available} <br />
                    <label>Price:</label> ${el.cost}<br />
                    {/* <button onClick={() => addToCart(el)}>Add To Cart</button> */}
                </div>
            })}
        </div>
    )
}
