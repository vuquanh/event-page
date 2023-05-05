import React, {useEffect} from 'react'
import {Link, useNavigate, useParams, useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart, removeFromCart} from '../actions/cartActions'


const CartScreen = () => {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const eventId = params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  useEffect(() => {
    if(eventId) {
      dispatch(addToCart(eventId, qty)) 
    }
  }, [dispatch, eventId, qty])

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }


  return (
    <Row>
      <Col md={8}>
    <h1>Shopping Cart</h1>
    {cartItem.length === 0? (
      <Message>
        Your cart is empty <Link to="/">Go Back</Link>
      </Message>
    ): (
      <ListGroup variant='flush'>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.event}>
            <Row>
              <Col md={2}>
                <Image src={item.image} alt={item.name} fluid rounded/>
              </Col>
              <Col md={3}>
                <Link to={`/event/${item.event}`}>{item.name}</Link>
              </Col>
              <Col md={2}>${item.fee}</Col>
              <Col md={2}>
                <Form.Control
                as='select'
                value={item.qty}
                onChange={(e) => 
                dispatch(AddToCart(item.evnet, Number(e.target.value)))
                }
                >
                  ----------------------------------
                </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}


      </ListGroup>
    )

    }
      </Col>
    </Row>
  )
}

export default CartScreen