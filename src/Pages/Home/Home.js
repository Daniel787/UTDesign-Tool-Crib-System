import React from "react";
import Nav from "../../Components/Nav/Nav.js";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Footer from '../../Components/Footer/Footer.js';

function home() {
    return (
        <div className={styles.Home}>
            <Nav />
            <div className={styles.Body}>
                <h1>Home Page</h1>
                <ul>
                    <li><Link to={"/buy"}>Buy Page</Link></li>
                    <li><Link to={"/rent"}>Rent Page</Link></li>
                    <li><Link to={"/holds"}>Holds Page</Link></li>
                    <li><Link to={"/expenses"}>Expenses Page</Link></li>
                    <li><Link to={"/inventory"}>Inventory Page</Link></li>
                </ul>

            </div>
            <Footer />
        </div>
    )
}

export default home; 
