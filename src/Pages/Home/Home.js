import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Grid from "./Components/Grid/grid.js";

function home() {
  return (
    <div className={styles.Body}>
      <h1>Home Page</h1>
      {/*
      <ul>
        <li>
          <Link to={"/buy"}>Buy Page</Link>
        </li>
        <li>
          <Link to={"/rent"}>Rent Page</Link>
        </li>
        <li>
          <Link to={"/holds"}>Holds Page</Link>
        </li>
        <li>
          <Link to={"/expenses"}>Expenses Page</Link>
        </li>
        <li>
          <Link to={"/inventory"}>Inventory Page</Link>
        </li>
        <li>
          <Link to={"/prints"}>Print Page</Link>
        </li>
      </ul>
      */}
      <Grid />
    </div>
  );
}

export default home;
