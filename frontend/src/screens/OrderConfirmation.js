import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'

const OrderConfirmation = () => {
  const orderInfo = useSelector((state) => state.orderCreate)
  const {data, error} = orderInfo
  console.log('paypal data:', data) 

  return (
    <Container className="h-100">
      <Row className="justify-content-md-center">
        <Col  md={8} className="text-center">
          <h2>Eventlite</h2>
          <h1 className="title">Thank you for you order!</h1>
          <h2>Order ID: data</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmation;
