import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
  // console.log('Event.js:', event)
  return (
    <Card className='my-3 p-3 rounded'>
     <Link to={`/event/${event._id}`}> 
      <Card.Img src={event.image} variant='top' />
    </Link>
    <Card.Body>
      <Link to={`/event/${event._id}`}>
        <Card.Title as='div'>
          <strong>{event.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as='div'>
      <p>{event.date_Time}</p>
      <p>{event.location}</p>
      </Card.Text>

      <Card.Text as='p'>
        {event.description}
      </Card.Text>


      <Card.Text as='h3'>
        ${event.fee}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Event