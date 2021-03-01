import React from 'react'
import Nav from "../../Components/Nav/Nav.js";
import Footer from '../../Components/Footer/Footer.js';
import styles from "./Rent.module.css";

export default function Rent() {
    return (
        <div>
            <Nav />
            <div className={styles.Body}>
                <h1>Rent Page</h1>
            </div>
            <Footer />
        </div>
    )
}
