import React from "react";
import Nav from "../Components/Nav/Nav.js";
import styles from "./Home.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Footer from '../Components/Footer/Footer.js';

function home() {
    return (
        <div className={styles.Home}>
            <Nav />
            <div className={styles.Body}>
                <h1>Home Page</h1>
                <Link to="/"><Button>Logout</Button></Link>
            </div>
            <Footer />
        </div>


    )

}

export default home; 
