import React from 'react'
import Nav from "../../Components/Nav/Nav.js";
import Footer from '../../Components/Footer/Footer.js';
import styles from "./Holds.module.css";

export default function Holds() {
    return (
        <div>
            <Nav />
            <div className={styles.Body}>
                <h1>Holds Page</h1>
            </div>
            <Footer />
        </div>
    )
}
