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
    <Navbar bg="success" expand="lg" className='d-flex' style={{width : '100%', position:'fixed', alignItems:'center', zIndex:'2'}}>
    <Container>
        <Link to='home' style={{textDecoration:'none', alignItems:'center'}}>
      <Navbar.Brand > <b>E-shop</b></Navbar.Brand>
        </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link>Home</Nav.Link>
          <Link to='/cart' style={{textDecoration:'none', alignItems:'center', color:'black', paddingTop:'8px'}}>
          <BiCart size='1.5rem'/> 
          {!isEmpty && <span style={{position:'relative', left:'-15px', top: '-10px' }}>{totalItems}</span>}
          <span style={{marginLeft:!isEmpty? '-10px':0 }}>Cart</span>
          </Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header