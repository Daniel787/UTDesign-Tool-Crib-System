import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Buy.module.css";

export default function Buy() {
  const [idsearch, setIdsearch] = useState(0)
  const [info, setInfo] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let temp = 0
    for (let i = 0; i < cart.length; i++) {
      temp += (cart[i].total)
    }
    setTotal(temp)
  }, [cart])

  // Function for getting Item List
  function loadData() {
    // Change to correct url later
    axios.get("/inventory/getall").then((res) => {
      setInfo(res.data);
    });
  }

  useEffect(() => {
    loadData();
  });
  function handleIDSearch() {
    console.log("query: " + idsearch);
    try {
      axios.get("/inventory/search/" + idsearch)
        .then((res) => {
          res.data.length > 0 ? setInfo(res.data) : loadData()
        });
    } catch { }
  }
  function addToCart(item) {
    let parts = [...cart].map((el) => { return el.item.part_id })
    let newCart = [...cart];
    let index = parts.indexOf(item.part_id)
    if (index < 0) {
      newCart.push({ item: item, quantity: 1, total: item.cost })
    }
    else {
      if (newCart[index].quantity < newCart[index].item.quantity) {
        newCart[index].quantity++
        newCart[index].total = newCart[index].quantity * newCart[index].item.cost
      }
    }
    setCart(newCart);
    loadData();
  }
  function removeFromCart(index) {
    let newCart = [...cart]
    newCart.splice(index, 1);
    setCart(newCart)
  }
  function changeQuantity(event, index) {
    let newCart = [...cart]
    const value = parseInt(event.target.value)
    newCart[index].quantity = value > 0 ? value : 1
    newCart[index].total = newCart[index].quantity * newCart[index].item.cost
    setCart(newCart)
  }

  function checkOut() {
    for (let i = 0; i < cart.length; i++) {
      const newObj = { part_id: cart[i].item.part_id, quantity_purchased: cart[i].quantity, purchased_cost: cart[i].total }
      console.log(newObj)
      axios.post('/inventory/newtransaction', newObj)
    }
    setCart([])
  }

  return (
    <div className={styles.Body}>
      <h1>Buy Page</h1>
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((current, index) => {
            return (
              <div key={index}>
                <li>
                  <h3>{current.item.name}</h3>
                  <label> ID:</label> {current.item.part_id} <br />
                  <label>Quantity in Stock:</label> {current.item.quantity} <br />
                  <label>Price:</label> ${current.item.cost}<br />
                  <label>Quantity:</label><input type="number" value={cart[index].quantity} min="1" max={cart[index].item.quantity} onFocus={e => e.target.select()} onChange={e => changeQuantity(e, index)}></input><br />
                  <button onClick={removeFromCart(index)}>
                    Delete
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
        {cart.length > 0 ? <h3>Total Price: ${total}</h3> : <h3>Cart Empty</h3>}
        <button onClick={() => checkOut()}>Check Out</button>
      </div>
      <div>
        <h2>Item List</h2>
        <div>
          <label>By Part ID:</label>
          <input type="number" onFocus={e => e.target.select()} value={idsearch} onChange={e => setIdsearch(parseInt(e.target.value))}></input>
          <button onClick={handleIDSearch}>Search</button>
        </div>
        <ul>
          {info.map((current, index) => {
            return (
              <div key={index}>
                <li>
                  <h3>{current.name}</h3>
                  <label> ID:</label> {current.part_id} <br />
                  <label>Quantity:</label> {current.quantity} <br />
                  <label>Price:</label> ${current.cost}<br />
                </li>
                <button onClick={addToCart(current)}> Add To Cart </button>{" "}
              </div>
            );
          })}
        </ul>

      </div>
    </div>
  );
}


// import ItemList from './ItemList'
// import Cart from './Cart'

// const [cart, setCart] = useState([])
// const [list, setList] = useState([])
// useEffect(() => {
//   refreshList()
// }, [])

// function refreshList() {
//   Axios.get('http://localhost:5000/api/getall/')
//     .then((response) => {
//       setList(response.data)
//     })
// }

// return (
//   <div className="App">
//     <h1>Example App</h1>
//     <Cart cart={cart} setCart={setCart} />
//     <ItemList refreshList={refreshList} list={list} setList={setList} cart={cart} setCart={setCart} />
//     <Input list={list} setList={setList} />
//   </div>
// );