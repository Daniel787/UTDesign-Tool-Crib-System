import React, { useState } from 'react'
import styles from "./Buy.module.css";


export default function Buy() {
    const [search, setSearch] = useState('')
    const [quantity, setQuantity] = useState(0)
    return (
        <div className={styles.Body}>
            <h1>Buy Page</h1>
            <div>
                Item: <input type="text" onChange={e => setSearch(e.target.value)}></input>
                <button>Enter</button>
            </div>
            <div>
                Quantity: <input type="number" onChange={e => setQuantity(e.target.value)}></input>
                <button>Enter</button>
            </div>
        </div>
    )
}
