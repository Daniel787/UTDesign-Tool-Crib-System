import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./image.module.css";

function Image(props) {
  return (
    <Link to={props.to}>
      <img className={styles.image} src={require("" + props.url)} />
    </Link>
  );
}

export default Image;
