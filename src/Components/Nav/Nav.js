import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function nav() {
  return (
    <Navbar className={styles.Navbar} fluid>
      <Navbar.Brand as={Link} to="/home" className={styles.Brand}>
        <p> UTDesign Crib </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className={styles.links}>
          <Nav.Link as={Link} to="/buy"> <p> Buy </p> </Nav.Link>
          <Nav.Link as={Link} to="/rent"> <p> Rents </p> </Nav.Link>
          <Nav.Link as={Link} to="/holds"> <p> Holds</p> </Nav.Link>
          <Nav.Link as={Link} to="/expenses"> <p> Expenses </p> </Nav.Link>
          <Nav.Link as={Link} to="/inventory"> <p> Inventory </p></Nav.Link>
          <Nav.Link as={Link} to="/login"> <p> Logout </p> </Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default nav;
