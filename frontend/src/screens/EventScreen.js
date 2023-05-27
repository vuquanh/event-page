import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Form,
  Card,
} from "react-bootstrap";

//For Redux
import { useDispatch, useSelector } from "react-redux";
import { listEventDetails } from "../actions/eventActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const EventScreen = () => {
  const [qty, setQty] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const EventDetails = useSelector((state) => state.eventDetails);
  const { loading, error, event } = EventDetails;

  useEffect(() => {
    dispatch(listEventDetails(params.id));
  }, [dispatch, params]);

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link className="btn btn-outline-danger my-3 " to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={event.image} alt={event.name} fluid />
            <p style={{ marginTop: "20px" }}>
              <strong>Description:</strong> {event.description}
            </p>
          </Col>

          <Col md={3} className="mb-3">
            <ListGroup variant="flush" >
              <ListGroup.Item>
                <h2 className="eventScreen-EventName">{event.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>Date: {event.date_Time} </ListGroup.Item>
              {/* had to add ? so it can show the name of the event for some reason... */}
              <ListGroup.Item>
                <p style={{ marginBottom: 0 }}>Address:</p>
                <strong>{event.location?.name}</strong>
                <p>
                  {event.location?.street}, {event.location?.city}{" "}
                  {event.location?.state} {event.location?.zipcode}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>Fee: ${event.fee}</ListGroup.Item>
              <ListGroup.Item>Company: {event.company}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} className="mb-3">
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
           
                <ListGroup.Item>
                  <Row>
                    <Col>Qty: </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(event.openSpots).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={event.openSpots === 0}
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default EventScreen;


