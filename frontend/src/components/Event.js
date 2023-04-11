import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
  // console.log('Event.js:', event)
  return (
    <Card className='my-3 p-3 rounded card-height'>
     <Link to={`/event/${event._id}`}> 
      <Card.Img src={event.image} variant='top' />
    </Link>
    <Card.Body>
      <Link to={`/event/${event._id}`}>
        <Card.Title as='h2'>
          <strong>{event.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as='h3'>
      <strong>{event.date_Time}</strong>
      </Card.Text>

      <Card.Text as='h4'>
      <p>{event.location}</p>
      </Card.Text>

      <Card.Text as='h5'>
        <strong>{event.company}</strong>
      <br />
      Starts at ${event.fee}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Event
