import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./image.module.css";

function Image(props) {
  return (
    <figure>
      <Link to={props.to}>
        <img className={styles.image} src={props.url} />
      </Link>
    </figure>
  );
}

export default Image;
