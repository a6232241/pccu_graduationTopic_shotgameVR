import React from "react";
import { Navbar, Nav, Container, Row, Col, Carousel } from "react-bootstrap";
import logo from "../assets/image/logo.png";
import carousel1 from "../assets/image/carousel1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row className="justify-content-center">
          <Carousel className="w-100 d-inline-block">
            <Carousel.Item>
              <img className="d-block mx-auto" src={carousel1} alt="carousel" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={carousel1} alt="carousel" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={carousel1} alt="carousel" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="bg-dark">
          <Col md={2} sm={12} className="align-self-center text-center">
            <Link to="/">
              <img
                src={logo}
                alt="img"
                className="w-75"
                style={{ minWidth: "140px", maxWidth: "200px" }}
              />
            </Link>
          </Col>
          <Col md={8} sm={12} className="align-self-center" id="header-menu">
            <Navbar expand="md">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-auto' />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-center"
              >
                <Nav
                  className="text-center"
                  style={{ fontWeight: "900", fontSize: "1.4rem" }}
                >
                  <Nav.Item className="col-sm-12 col-md-auto">
                    <Link to="/" className="text-light">
                      主頁
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="col-sm-12 col-md-auto">
                    <Link to="/aboutus" className="text-light">
                      關於我們
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="col-sm-12 col-md-auto">
                    <Link to="/introduction" className="text-light">
                      故事大綱
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="col-sm-12 col-md-auto">
                    <Link to="/operating" className="text-light">
                      操作玩法
                    </Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
