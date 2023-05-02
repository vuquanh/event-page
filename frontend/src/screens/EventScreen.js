import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, Card, ListGroup} from 'react-bootstrap'

//For Redux
import { useDispatch, useSelector } from 'react-redux'
import {listEventDetails} from '../actions/eventActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const EventScreen = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const eventDetails = useSelector((state) => state.eventDetails)
    const {loading, error, event} = eventDetails;

    useEffect(()=> {
      dispatch(listEventDetails(params.id))
    }, [dispatch, params]
    )

  return (
    <>
    <Link className='btn btn-outline-danger my-3 ' to='/'>
      Go Back
    </Link> 


    {loading? (<Loader />)
              : error? 
              (<Message variant="danger">{error}</Message>)
              : (    <Row>
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
                    {/* had to add ? so it can show the name of the event for some reason... */}
                    <ListGroup.Item>
                      <p style={{marginBottom:0}}>Address:</p>
                      <strong>{event.location?.name}</strong>
                    <p>{event.location?.street}, {event.location?.city} {event.location?.state} {event.location?.zipcode}</p></ListGroup.Item>
                    <ListGroup.Item>Fee: ${event.fee}</ListGroup.Item>
                    <ListGroup.Item>Company: {event.company}</ListGroup.Item>
                  </ListGroup>
                </Col>                     
              </Row>  
          )
  }
  </>
  )
}

export default EventScreen