import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Footer(props) {
  return (
    <Navbar className={styles.Navbar} fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className={styles.links}>
          <>
            <style type="text/css">
              {`
          .btn-green {
            background-color : #008542;
            color : white;
          }
          `}
            </style>
            <Button variant="green" onClick={() => props.setToken(false)}>
              Made with React
            </Button>
          </>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer;
