import React from 'react'
import styles from "./Inventory.module.css";
import ItemList from './ItemList'


export default function Inventory() {
    return (
        <div className={styles.Body}>
            <h1>Inventory Page</h1>
            <ItemList />
        </div>
    )
}
