import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./Buy.module.css";


export default function Buy() {
    const [search, setSearch]  = (""); 
    const [info, setInfo] = (null);

    // Function for getting info
    function loadData() { 
        // Change to correct url later
         axios.get('/inventory/')
            .then(res => {
                const obj = res.data;
                setInfo(obj); 
            })
        }
    function sendData(obj) {
        // Change to correct url later
        axios.post('/inventory', 
        {
            id : obj.id,
            quantity : obj.quantity
        })
        .then((respone) => { 
            console.log(response);
        })
        .catch((error) => {
            console.log(response); 
        });
    }
    useEffect(() => {
        loadData(); 
    });
    function queryItem() {
        console.log('query: ' + search)
    }
    return (
        <div className={styles.Body}>
            <h1>Buy Page</h1>
            <div>
                Item: <input type="text" onChange={e => setSearch(e.target.value)}></input>
                <button onClick={queryItem}>Enter</button>
                <ul>
                   {info.map((current, index) => {<li> {current.name}  {current.quantity}  {current.cost} </li>  }) }  
                </ul> 
            </div>
            {search}
        </div>
    )
}
