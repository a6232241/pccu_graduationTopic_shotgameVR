import React from 'react'
import { Row, Col } from 'react-bootstrap'

const IntroContainer = (props) => {

  return (
    <Row className='w-100'>
      <Col md={6} sm={12}>
        <img src={props.imageUrl} alt='img' className='w-100' />
      </Col>
      <Col md={6} sm={12}>
        <h4>{props.title}</h4>
        <p>{props.intro}</p>
      </Col>
    </Row>
  )
}

export default IntroContainer
