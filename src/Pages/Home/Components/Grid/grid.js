import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./grid.module.css";
import Holds from "../../../Holds/Holds.js";
import Image from "./image.js";
import buy from "./Images/buy.png";
import rent from "./Images/rent.png";
import holds from "./Images/holds.png";
import expenses from "./Images/expenses.png";
import inventory from "./Images/inventory.png";
import group from "./Images/group.png";

function grid() {
  return (
    <div>
      <Container className={styles.grid}>
        <Row>
          <Col>
            <Image url={buy} to="/buy" />
          </Col>
          <Col>
            <Image url={rent} to="/rent" />
          </Col>
          <Col>
            <Image url={expenses} to="/expenses" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image url={inventory} to="/inventory" />
          </Col>
          <Col>
            <Image url={group} to="/groups" />
          </Col>
          <Col>
            <Image url={holds} to="/holds" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default grid;
