import React from 'react'
import Nav from "../../Components/Nav/Nav.js";
import Footer from '../../Components/Footer/Footer.js';
import styles from "./Expenses.module.css";

export default function Expenses() {
    return (
        <div>
            <Nav />
            <div className={styles.Body}>
                <h1>Expenses Page</h1>
            </div>
            <Footer />
        </div>
    )
}
