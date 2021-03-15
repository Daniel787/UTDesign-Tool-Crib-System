import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./Buy.module.css";


export default function Buy() {
    const [search, setSearch] = useState(null);
    const [info, setInfo] = useState(null);

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
    function handleSearch() {
        console.log('query: ' + search)
        try {
            axios.get('/inventory/' + search)
                .then(res => {
                    const obj = res.data;
                    setSearch(curr => ({ ...curr, data: obj }));
                })
        } catch { }
    }
    return (
        <div className={styles.Body}>
            <h1>Buy Page</h1>
            <div>
                Item: <input type="text" onChange={e => setSearch({ search: e.target.value, data: null })}></input>
                <button onClick={handleSearch}>Enter</button>
                <ul>
                    {info.map((current, index) => { return <li> {current.name}  {current.quantity}  {current.cost} </li> })}
                </ul>
            </div>
            {search}
        </div>
    )
}
