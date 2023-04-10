import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
     <Container>
       <Navbar.Brand href="/">
          <img src="event_logo.png" id="logo" />
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
         <Nav.Link href="/cart"><i class="fa-solid fa-cart-plus"></i>Cart</Nav.Link>
         <Nav.Link href="/login"><i class="fa-regular fa-user"></i>Log In</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
    </Navbar>
   </header>
  )
}

export default Header
