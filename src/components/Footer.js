import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsPerson, BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark p-3">
      <Container>
        <Row style={{ fontSize: "0.8rem" }}>
          <Col className="text-center">
            <h5>
              <p>聯絡我們</p>
            </h5>
            <p>
              <BsPerson />
              <span className="align-middle"> Mr.Wang</span>
            </p>
            <p>
              <BsEnvelope />
              <span className="align-middle"> a6232364@g.pccu.edu.tw</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
