import React from "react";
import Nav from "../Components/Nav/Nav.js";
import styles from "./Home.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function home() {
    return (
        <div className={styles.Home}>
            <Nav />
            <div className={styles.Body}>
                <h1>Home Page</h1>
                <Link to="/"><Button>Logout</Button></Link>
            </div>
        </div>


    )

}

export default home; 
