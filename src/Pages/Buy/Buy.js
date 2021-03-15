import React, { useState } from 'react'
import styles from "./Buy.module.css";


export default function Buy() {
    const [search, setSearch] = useState('')
    function quaryItem() {
        console.log('quary: ' + search)
    }
    return (
        <div className={styles.Body}>
            <h1>Buy Page</h1>
            <div>
                Item: <input type="text" onChange={e => setSearch(e.target.value)}></input>
                <button onClick={quaryItem}>Enter</button>
            </div>
            {search}
        </div>
    )
}
