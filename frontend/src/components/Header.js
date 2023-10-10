import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'
import LinkContainer from 'react-router-bootstrap/LinkContainer';
export default function Header() {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant='dark' expand='md' collapseOnSelect>
            <Container>
                <LinkContainer to="/"><Navbar.Brand ><img src={logo}></img>ProShop</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                    <LinkContainer to="/cart"><Nav.Link ><FaShoppingCart></FaShoppingCart></Nav.Link></LinkContainer>
                    <LinkContainer to="/login"><Nav.Link><FaUser></FaUser></Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </header>
    </div>
  )
}
