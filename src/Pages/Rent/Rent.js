import React, { useState } from 'react'
import styles from "./Rent.module.css";

export default function Rent() {
    const [search, setSearch] = useState('')
    const [quantity, setQuantity] = useState(0)
    return (
        <div className={styles.Body}>
            <h1>Rent Page</h1>
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
