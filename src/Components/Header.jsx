import React from 'react'
import {Container, Nav, Navbar, } from 'react-bootstrap';
import './Header.css'
import {BiCart} from 'react-icons/bi';
import { Link } from '@reach/router';
import { useCart } from 'react-use-cart';
const Header = () => {
const {
    isEmpty,
    totalItems,
} =useCart();


  return (
    <Navbar bg="success" expand="lg" style={{width : '100%', position:'fixed', alignItems:'center'}}>
    <Container>
        <Link to='home'>
      <Navbar.Brand > <b>E-shop</b></Navbar.Brand>
        </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link >Link</Nav.Link>
          <Link to='/cart'>
          <BiCart size='1.5rem'/> 
          {!isEmpty && <span style={{position:'relative', left:'-21px', top: '21px' }}>{totalItems}</span>}
          <span style={{marginLeft:!isEmpty? '-13px':0 }}>Cart</span>
          </Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header