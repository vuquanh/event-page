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

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log('qty:', qty)

  const cart = useSelector((state) => state.cart);
 
  const { cartItems } = cart;

  useEffect(() => {
    if(eventId) {
      dispatch(addToCart(eventId, qty)) 
    }
  }, [dispatch, eventId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  const goBackHandler = () => {
    navigate(-1)
  }


  return (
    <Row>
      <Col md={8}>
    <h1>Shopping Cart</h1>
    {cartItems.length === 0? (
      <Message>
        Your cart is empty <Link to="/">Go Back</Link>
      </Message>
    ): (
      <ListGroup variant='flush' className=''>
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
                dispatch(addToCart(item.event, Number(e.target.value)))
                }
                >
                  {[...Array(item.openSpots).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))
                }
                </Form.Control>
    
              </Col>
              <Col md={2}>
                <Button 
                  type="button"
                  variant='light'
                  onClick={() => removeFromCartHandler(item.event)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
    }
    <Row>
      <Col>
    <Button  className='mt-4 p-2'  type='button' onClick={goBackHandler}> 
      Go Back
    </Button> 
    </Col>
    </Row>
      </Col>
      <Col md={4} className='d-flex align-items-center justify-content-center'>
         <Card className='w-100 h-90 d-inline-block p-3'>
          <ListGroup.Item>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            $ 
            {cartItems.reduce((acc, item) => acc + item.qty * item.fee, 0).toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block mt-2'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
          </ListGroup.Item>
        </Card> 

{/* <Card>
      <Card.Header as="h3"> Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button
              type='button'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
      </Card.Body>
    </Card> */}

      </Col>
    </Row>
  )
}

export default CartScreen