import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, Card, ListGroup} from 'react-bootstrap'
import events from '../events'

const EventScreen = () => {
    const params = useParams();
    const eventItem = events.find(e => e._id === params.id)
  // console.log('EventScreen:', eventItem)
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
      Go Back
    </Link>  
    <Row>
      <Col md={6}>
        <Image src={eventItem.image} alt={eventItem.name} fluid />
      </Col> 
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{eventItem.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>Date: {eventItem.date_Time}</ListGroup.Item>
          <ListGroup.Item>Location: {eventItem.location}</ListGroup.Item>
          <ListGroup.Item>Fee: ${eventItem.fee}</ListGroup.Item>
          <ListGroup.Item>Description: {eventItem.description}</ListGroup.Item>
        </ListGroup>
      </Col>  
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Fee:</Col>
                <Col>
                  <strong>${eventItem.fee}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>                     
    </Row>  
  </>
  )
}

export default EventScreen
