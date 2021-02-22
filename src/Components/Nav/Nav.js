import React from 'react'; 
import {Link} from 'react-router-dom'; 
import styles from './Nav.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function nav() {
    return (
         <Navbar className={styles.Navbar} fluid>
      <Navbar.Brand as={Link} to="/" className={styles.Brand}>
        <p> UTDesign Crib </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse>
        <Nav className={styles.links}> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>  
      ) ;
}

export default nav; 