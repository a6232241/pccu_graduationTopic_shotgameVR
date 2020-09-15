import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsPerson, BsEnvelope } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-dark p-5'>
      <Container className='w-50'>
        <Row>
          {/* <Col>
              <h5 className='border-bottom border-white'>關於我們</h5>
              <p>衣服、褲襪、飾品</p>
            </Col> */}
          <Col className='text-center'>
            <h5>
              <p>聯絡我們</p>
            </h5>
            <p>
              <BsPerson />
              <span className='align-middle'> Mr.Wang</span>
            </p>
            <p>
              <BsEnvelope />
              <span className='align-middle'> a6232364@g.pccu.edu.tw</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
