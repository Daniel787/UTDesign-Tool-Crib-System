import React from 'react'
import Nav from "../../Components/Nav/Nav.js";
import Footer from '../../Components/Footer/Footer.js';
import styles from "./Buy.module.css";


export default function Buy() {
    return (
        <div>
            <Nav />
            <div className={styles.Body}>
                <h1>Buy Page</h1>
            </div>
            <Footer />
        </div>
    )
}
