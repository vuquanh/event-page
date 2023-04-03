import React from 'react'
import {container, footer, row} from "react-bootstrap"

const Footer = () => {
  return (
   <header>
    <Navbar bg="dark" variant="dark" expand="lg"
    collapseOnSelect>
        <Container>
            <Navbar.brand href ="/">MyShop</Navbar.brand>
            <Navbar.toggle aria-controls="basic-navbar-nav" />
            <Navbar.collapse id="basic-narbar-nav">
                <Nav.link href="/cart"></Nav.link>
            </Navbar.collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default Footer
