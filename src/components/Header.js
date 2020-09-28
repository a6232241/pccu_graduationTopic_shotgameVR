import React from 'react'
import { Nav, Container, Row, Col, Carousel } from 'react-bootstrap'
import logo from '../assets/image/logo.png'
import bg from '../assets/image/bg.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row className='justify-content-center'>
          <Carousel className='mw-100 h-50 d-inline-block'>
            <Carousel.Item>
              <img className='d-block w-100' src={bg} alt='First slide' />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={bg} alt='First slide' />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={bg} alt='First slide' />
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
        <Row className='bg-dark'>
          <Col md={2} className='px-5 align-self-center'>
            <Link to='/'>
              <img src={logo} alt='img' className='mw-100' />
            </Link>
          </Col>
          <Col md={8} className='align-self-center'>
            <Nav
              className='justify-content-center text-center'
              style={{ fontWeight: '900', fontSize: '1.5rem' }}
            >
              <Nav.Item className='col-sm-12 col-md-auto'>
                <Link to='/' className='text-light'>
                  主頁
                </Link>
              </Nav.Item>
              <Nav.Item className='col-sm-12 col-md-auto'>
                <Link to='/aboutus' className='text-light'>
                  關於我們
                </Link>
              </Nav.Item>
              <Nav.Item className='col-sm-12 col-md-auto'>
                <Link to='/introduction' className='text-light'>
                  故事大綱
                </Link>
              </Nav.Item>
              <Nav.Item className='col-sm-12 col-md-auto'>
                <Link to='/operating' className='text-light'>
                  操作玩法
                </Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
