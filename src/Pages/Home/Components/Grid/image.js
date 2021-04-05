import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./image.module.css";

function Image(props) {
  return (
    <figure>
      <Link to={props.to}>
        <img className={styles.image} src={props.url} />
        <figcaption> {props.cap} </figcaption>
      </Link>
    </figure>
  );
}

export default Image;
