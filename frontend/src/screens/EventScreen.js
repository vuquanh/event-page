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
    <Link className='btn btn-outline-danger my-3 ' to='/'>
      Go Back
    </Link>  
    <Row>
      <Col md={6}>
        <Image src={event.image} alt={event.name} fluid />
        <p style={{marginTop: "20px"}}><strong>Description:</strong> {event.description}</p>
      </Col> 
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{event.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>Date: {event.date_Time}</ListGroup.Item>
          <ListGroup.Item>Location: {event.location}</ListGroup.Item>
          <ListGroup.Item>Fee: ${event.fee}</ListGroup.Item>
          <ListGroup.Item>Company: {event.company}</ListGroup.Item>
        </ListGroup>
      </Col>                     
    </Row>  

  </>
  )
}

export default EventScreen