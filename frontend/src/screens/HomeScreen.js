import React, {useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import Event from "../components/Event";
import Carousel from "../components/Carousel";

//For reudx
import { useSelector, useDispatch } from "react-redux";
import { listEvents } from "../actions/eventActions";
import Loader from "../components/Loader";
import Message from "../components/Message";


const HomeScreen = () => {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  // console.log('state', eventList)
  const { loading, error, events } = eventList;

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);
  
  return(
    <>
    <Carousel items={events} />

{/* <Row>
  <Col xl={3}></Col>
</Row> */}
<h1> Events Near You </h1>
{loading ? (
  <Loader />
) : error ? (
  <Message variant="danger">{error}</Message>
) : (
  <Row>
    {events.map((e, i) => (
      <Col sm={12} md={6} lg={4} xl={3} key={i}>
        <Event event={e} />
      </Col>
    ))}
  </Row>
)}
    </>
  );
};

export default HomeScreen;
