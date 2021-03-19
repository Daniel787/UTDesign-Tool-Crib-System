import React, { useState } from "react";
import Axios from "axios";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "./ItemList.module.css";

export default function ItemList(props) {
    const [idsearch, setIdsearch] = useState(0);
    const [namesearch, setNamesearch] = useState("");

    function searchID() {
        if (idsearch > 0) {
            Axios.get("http://localhost:5000/inventory/searchid?id=" + idsearch).then(
                (response) => {
                    response.data.length > 0
                        ? props.setList(response.data)
                        : props.refreshList();
                    console.log(response.data);
                }
            );
        } else {
            props.refreshList();
        }
        setIdsearch(0);
    }

    function searchName() {
        if (namesearch.length > 0) {
            Axios.get("http://localhost:5000/inventory/searchname?id=" + namesearch).then(
                (response) => {
                    response.data.length > 0
                        ? props.setList(response.data)
                        : props.refreshList();
                }
            );
        } else {
            props.refreshList();
        }
        setNamesearch("");
    }

    function addToCart(item) {
        let exists = [...props.cart].map((el) => {
            return el.item.part_id;
        });
        let newCart = [...props.cart];
        let index = exists.indexOf(item.part_id);
        if (index < 0) {
            newCart.push({ item: item, quantity: 1, total: item.current_cost });
        } else {
            newCart[index].quantity++;
            newCart[index].total = newCart[index].quantity * newCart[index].item.current_cost;
        }
        props.setCart(newCart);
        props.refreshList();
    }

    return (
        <Container>
            <div className="allusers">
                <Navbar fluid>
                    <Nav className={styles.links}>
                        {/* <div className="search"> */}
                        {/*    <h3>Search</h3> */}
                        <div className={styles.label}>
                            <label>By Part ID:</label>{" "}
                            <input
                                type="number"
                                onFocus={(e) => e.target.select()}
                                value={idsearch}
                                onChange={(e) => setIdsearch(parseInt(e.target.value))}
                            ></input>
                            <button onClick={searchID}>Search</button>
                        </div>
                        <div className={styles.label}>
                            <label>By Name:</label>{" "}
                            <input
                                type="text"
                                value={namesearch}
                                onChange={(e) => setNamesearch(e.target.value)}
                            ></input>
                            <button onClick={searchName}>Search</button>
                        </div>
                    </Nav>
                </Navbar>
                {props.list.map((el, i) => {
                    return (
                        <div key={i} className="useritem">
                            <h3>{el.name}</h3>
                            <label> ID:</label> {el.part_id} <br />
                            <label>Quantity:</label> {el.quantity_available} <br />
                            <label>Price:</label> ${el.current_cost}
                            <br />
                            <button onClick={() => addToCart(el)}>Add To Cart</button>
                        </div>
                    );
                })}
                <button onClick={props.refreshList}>Refresh List</button>
            </div>
        </Container>
    );
}
