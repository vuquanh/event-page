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
        // console.log('EventScreenFetchData:', data)
    
        setEvent(data)
        console.log('test:', event.location.city)
       
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
          <ListGroup.Item>Date: {event.date_Time} </ListGroup.Item>
          {/* had to add ? so it can show the name of the evnet for some reason... */}
          <ListGroup.Item>
            <p style={{marginBottom:0}}>Address:</p>
            <strong>{event.location?.name}</strong>
          <p>{event.location?.street}, {event.location?.city} {event.location?.state} {event.location?.zipcode}</p></ListGroup.Item>
          <ListGroup.Item>Fee: ${event.fee}</ListGroup.Item>
          <ListGroup.Item>Company: {event.company}</ListGroup.Item>
        </ListGroup>
      </Col>                     
    </Row>  

  </>
  )
}

export default EventScreen