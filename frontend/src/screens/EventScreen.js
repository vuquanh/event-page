import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, Card, ListGroup} from 'react-bootstrap'
import axios from 'axios'

const EventScreen = () => {
    const params = useParams();
    const [event, setEvent] = useState({})

    useEffect(() => {
      const fetchEvent = async () => {
        const {data} = await axios.get(`/api/event/${params.id}`);
        setEvent(data)
      }
      fetchEvent();
    })

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
            <h2 className='eventScreen-EventName'>{event.name}</h2>
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