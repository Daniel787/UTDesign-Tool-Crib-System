import React from "react";
import Holds from "../../../Holds/Holds.js";
import Image from "./image.js";
import buy from "./Images/buy.jpg";
import rent from "./Images/rent.jpeg";
import holds from "./Images/holds.jpg";
import { Container, Row, Col } from "react-bootstrap";

function grid() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image url={buy} to="/buy" cap="buy" />
          </Col>
          <Col>
            <Image url={rent} to="/rent" cap="rent" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image url={holds} to="/holds" cap="holds" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default grid;
