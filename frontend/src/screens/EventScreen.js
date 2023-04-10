import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, Card, ListGroup} from 'react-bootstrap'
import events from '../events'

const EventScreen = () => {
    const params = useParams();
    const event = events.find(e => e._id === params.id)
  // console.log('EventScreen:', eventItem)
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
      Go Back
    </Link>  
    <Row>
      <Col md={6}>
        <Image src={event.image} alt={event.name} fluid />
      </Col> 
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{event.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>Date: {event.date_Time}</ListGroup.Item>
          <ListGroup.Item>Location: {event.location}</ListGroup.Item>
          <ListGroup.Item>Fee: ${event.fee}</ListGroup.Item>
          <ListGroup.Item>Company: {event.description}</ListGroup.Item>
        </ListGroup>
      </Col>                     
    </Row>  
  </>
  )
}

export default EventScreen