import React from "react";
import { Button } from "react-bootstrap";

function GoToCart(props) {
  return (
    <Button
      className={props.styles.Container}
      variant="primary"
      onClick={props.handleShow}
    >
      Go To Cart
    </Button>
  );
}

export default GoToCart;
