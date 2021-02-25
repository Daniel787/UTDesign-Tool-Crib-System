import React from "react";
import { Link } from "react-router-dom";
import styles from "../Footer/Footer.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar className={styles.Navbar} fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className={styles.links}>
          <Nav.Link as={Link} to="/login"> <p> Made with React </p></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer; 