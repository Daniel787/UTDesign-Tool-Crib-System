import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "react-bootstrap";

function formComp() {
  const [info, setinfo] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const url = "http://localhost:5000/inventory";
  const [list, setList] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);

  function refreshList() {
    Axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  function search(newurl, request) {
    Axios.get(url + newurl + request).then((response) => {
      response.data.length > 0 ? setList(response.data) : refreshList();
    });
    setIdsearch(0);
    setNamesearch("");
  }

  function addToCart(item, amount) {
    let exists = props.cart.map((el) => {
      return el.item.part_id;
    });
    let newCart = [...props.cart];
    let index = exists.indexOf(item.part_id);
    if (index < 0) {
      newCart.push({ item: item, quantity: 1, total: item.current_cost });
    } else {
      if (
        newCart[index].quantity &&
        newCart[index].quantity < newCart[index].item.quantity_available
      ) {
        newCart[index].quantity++;
        newCart[index].total =
          newCart[index].quantity * newCart[index].item.current_cost;
      }
    }
    props.setCart(newCart);
    refreshList();
  }

  return (
    <Form>
      <FormGroup>
        <label> ID </label>
      </FormGroup>
      <FormGroup>
        <label>Quantity </label>
      </FormGroup>
      <FormGroup>
        <label> Price </label>
      </FormGroup>
      <Button> Submit </Button>
    </Form>
  );
}

export default formComp;
