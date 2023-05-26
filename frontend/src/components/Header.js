import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin); 
  const { userInfo } = userLogin;

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  let totalCartItems;
  if(cartItems) {
  totalCartItems = cartItems.reduce((acc, item) => acc + item.qty, 0) 
}

  const logoutHandler = () => {
    //when you logout it should go back to the main page. 
    navigate('/')
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="picturetopeople_logo.png" id="logo" alt="Brand logo" />
             
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i class="fa-solid fa-cart-plus"></i>

                {totalCartItems === 0 ? null 
                : ( <span class='badge badge-warning' id='lblCartCount'>{totalCartItems}</span>)}
             
                   Cart
                </Nav.Link>
              </LinkContainer>
            {userInfo? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout</NavDropdown.Item>
              </NavDropdown>
            )
            : (
                <LinkContainer to="/login">
                  <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
                </LinkContainer>

            )
          }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
