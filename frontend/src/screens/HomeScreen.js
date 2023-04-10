import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import events from '../events'
import Event from '../components/Event'

const HomeScreen = () => {
  return (
    <>
    <Carousel />

    <Row>
    <Col xl={3} > 
      </Col>
    </Row>
    <h1> Events Near You </h1>
    <Row>
        {events.map((e, i) => (
            <Col sm={12} md={6} lg={4} xl={3} key={i}>
                <Event event={e}/>
            </Col>
            ))}
    </Row>
    </>
       
  )
}

export default HomeScreen
