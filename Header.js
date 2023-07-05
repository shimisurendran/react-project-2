import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}
