import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function nav(props) {
  return (
    <Navbar className={styles.Navbar} fluid>
      <Navbar.Brand as={Link} to="/" className={styles.Brand}>
        <p> UTDesign Crib </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className={styles.links}>
          <Nav.Link as={Link} to="/buy"> <p> Buy </p> </Nav.Link>
          <Nav.Link as={Link} to="/rent"> <p> Rents </p> </Nav.Link>
          <Button onClick={() => props.setToken(false)}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default nav;
