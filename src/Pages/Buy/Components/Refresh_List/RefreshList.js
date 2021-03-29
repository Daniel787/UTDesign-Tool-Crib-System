import React from "react";
import { Button } from "react-bootstrap";

function RefreshList(props) {
  return (
    <Button
      className={props.styles.Container}
      onClick={() => {
        props.refreshList();
      }}
    >
      Refresh List
    </Button>
  );
}

export default RefreshList;
