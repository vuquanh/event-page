import React, {useEffect, useState} from "react";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import Event from "../components/Event";
import Carousel from "../components/Carousel";


const HomeScreen = () => {
  const[events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const {data} = await axios.get('/api/events')
      setEvents(data)
    }
    fetchEvents()
  })
  return(
    <>
        <Carousel items = {events}/>


      <Row>
        <Col xl={3}></Col>
      </Row>
      <h1> Events Near You </h1>
      <Row>
        {events.map((e, i) => (
          <Col sm={12} md={6} lg={4} xl={3} key={i}>
            <Event event={e} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
