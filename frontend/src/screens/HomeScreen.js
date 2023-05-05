import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import {listEvents} from '../actions/eventActions';
import Event from "../components/Event";
import Loader from '../components/Loader';
import Message from '../components/message';



const HomeScreen = () => {
  const dispatch = useDispatch()
  const eventList = useSelector((state) => state.eventList)
  const {loading, error, events} = eventList

  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch] )
  
  return (
    <>
  
        
        <h1> Events Near You </h1>
        {loading ? (<Loader />)
        : error? (
          <Message variant='danger'>{error}</Message>
        )
        : (<Row>
        {events.map((e, i) => (
          <Col sm={12} md={6} lg={4} xl={3} key={i}>
            <Event event={e} />
          </Col>
        ))}
      </Row>)
     }
        
    </>
  )
}

export default HomeScreen
