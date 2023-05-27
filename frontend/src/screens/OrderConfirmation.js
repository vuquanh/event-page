import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { CART_RESET } from "../constants/cartConstants";
import {Card, Button }from 'react-bootstrap'


const OrderConfirmation = () => {

  const orderInfo = useSelector((state) => state.orderCreate)
  const {data, error} = orderInfo
  // console.log('paypal data:', data) 

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart)
  console.log(cartItems)

  const orderDetails = useSelector((state) => state.orderDetails)
  const {order} = orderDetails
  

  useEffect(() => {
    dispatch({type: CART_RESET})
  }, [dispatch])

  return (
    // <Row className="h-100 d-flex align-items-center justify-content-center ">
    //       <Col className="text-center thankbox p-5 container-fluid"> 
    //       {/* fix later */}
         
    //       <h1 className="thankyou">Thank you for you order!</h1>
    //       <p >Your order was completed successfully.</p>
    //       <p>You can visit <Link to={`/order/${order._id}`}>here </Link>to check the status of your order.</p>
         
    //       </Col>

    // </Row>
<div className="w-100 h-100 d-flex justify-content-center align-items-center container">
    <div>
    <Card className="padding">
    <Card.Body>
      <Card.Title style={{fontSize: '3rem', color: "#0077b6"}} className="text-center"><i class="fa-solid fa-bag-shopping fa-lg"></i></Card.Title>
      <Card.Title style={{fontSize: '3rem'}} className="text-center">Thank you for your order!</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-center mt-3 mb-3" style={{fontSize: '2rem'}}>Your order was completed successfully.</Card.Subtitle>
      <Card.Text className="text-center" style={{fontSize: '1.5rem'}}>
      You can visit <Link to={`/order/${order._id}`}>  <Button variant="primary" style={{fontSize: '.7rem', color: ""}} className="" >here</Button></Link> to check the status of your order.
      </Card.Text>
      <Card.Text>   
    
    </Card.Text>
 
    </Card.Body>

  </Card>
  </div>
  </div>
  );
};

export default OrderConfirmation;




