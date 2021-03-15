import React, { useState } from 'react'
import styles from "./Rent.module.css";

export default function Rent() {
    const [search, setSearch] = useState('')
    const [quantity, setQuantity] = useState(0)
    function quaryItem() {
        console.log('quary: ' + search)
    }
    return (
        <div className={styles.Body}>
            <h1>Rent Page</h1>
            <div>
                Item: <input type="text" onChange={e => setSearch(e.target.value)}></input>
                <button>Enter</button>
            </div>
            {search}
        </div>
    )
}
