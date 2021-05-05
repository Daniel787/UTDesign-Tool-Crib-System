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
          <Nav.Link className={styles.item} as={Link} to="/buy">
            {" "}
            <p> Buy </p>{" "}
          </Nav.Link>
          <Nav.Link className={styles.item} as={Link} to="/rent">
            {" "}
            <p> Rents </p>{" "}
          </Nav.Link>
          <>
            <style type="text/css">
              {`
          .btn-green {
            background-color : #008542;
            color : white;
          }
          `}
            </style>
            {/* <Button
              className={styles.item}
              variant="green"
              onClick={() => props.setToken(false)}
            >
              Logout
            </Button> */}
          </>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default nav;
