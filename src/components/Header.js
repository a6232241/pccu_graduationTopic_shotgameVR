import React from 'react'
import { Navbar, Nav, Container, Row, Col, Carousel } from 'react-bootstrap'
import logo from '../assets/image/logo.png'
import carousel1 from '../assets/image/carousel1.png'
import carousel2 from '../assets/image/carousel2.png'
import carousel3 from '../assets/image/carousel3.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row className='justify-content-center'>
          <Carousel className='w-100 d-inline-block'>
            <Carousel.Item>
              <img
                className='d-block mx-auto'
                src={carousel1}
                alt='carousel'
                style={{ maxHeight: '647px' }}
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block mx-auto'
                src={carousel2}
                alt='carouse2'
                style={{ maxHeight: '647px' }}
              />
              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block mx-auto'
                src={carousel3}
                alt='carousel3'
                style={{ maxHeight: '647px' }}
              />
              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className='bg-dark'>
          <Col md={2} sm={12} className='align-self-center text-center'>
            <Link to='/'>
              <img
                src={logo}
                alt='img'
                className='w-75'
                style={{ minWidth: '140px', maxWidth: '200px' }}
              />
            </Link>
          </Col>
          <Col md={8} sm={12} className='align-self-center'>
            <Navbar expand='md'>
              <Navbar.Toggle aria-controls='basic-navbar-nav' className='mx-auto' />
              <Navbar.Collapse id='basic-navbar-nav' className='justify-content-center'>
                <Nav className='text-center' id='header-menu'>
                  <Nav.Item className='col-sm-12 col-md-auto'>
                    <Link to='/'>主頁</Link>
                  </Nav.Item>
                  <Nav.Item className='col-sm-12 col-md-auto'>
                    <Link to='/introduction'>敵人&槍枝</Link>
                  </Nav.Item>
                  <Nav.Item className='col-sm-12 col-md-auto'>
                    <Link to='/operating'>闖關流程</Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
