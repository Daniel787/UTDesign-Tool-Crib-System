import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./Buy.module.css";


export default function Buy() {
    const [search, setSearch] = useState(null);
    const [info, setInfo] = useState(null);

    function handleSearch(event) {
        setSearch({ search: event.target.value, data: null })
        try {
            axios.get('/inventory/?id=' + search)
                .then(res => {
                    const obj = res.data;
                    setSearch(curr => ({ ...curr, data: obj }));
                })
        } catch { }
    }
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
                id: obj.id,
                quantity: obj.quantity
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
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
                Item: <input type="text" onChange={handleSearch}></input>
                <button onClick={queryItem}>Enter</button>
                <ul>
                    {info.map((current, index) => { return <li> {current.name}  {current.quantity}  {current.cost} </li> })}
                </ul>
            </div>
            {search}
        </div>
    )
}
