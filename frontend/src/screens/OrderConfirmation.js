import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { CART_RESET } from "../constants/cartConstants";

const OrderConfirmation = () => {

  const orderInfo = useSelector((state) => state.orderCreate)
  const {data, error} = orderInfo
  // console.log('paypal data:', data) 

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart)
  console.log(cartItems)

  useEffect(() => {
    dispatch({type: CART_RESET})
  }, [dispatch])

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
