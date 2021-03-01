import React from 'react'
import Nav from "../../Components/Nav/Nav.js";
import Footer from '../../Components/Footer/Footer.js';
import styles from "./Inventory.module.css";

export default function Inventory() {
    return (
        <div>
            <Nav />
            <div className={styles.Body}>
                <h1>Inventory Page</h1>
            </div>
            <Footer />
        </div>
    )
}
