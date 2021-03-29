import React from "react";
import styles from "../../Buy.module.css";
import { Button } from "react-bootstrap";

function RefreshList(props) {
  return (
    <Button
      className={styles.Container}
      onClick={() => {
        props.refreshList();
      }}
    >
      Refresh List
    </Button>
  );
}

export default RefreshList;
