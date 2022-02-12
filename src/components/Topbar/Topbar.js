import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import UserImage from '../../assets/user.png';

export default function Topbar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">EVENTS</Nav.Link>
                <Nav.Link href="#features">FEATURES</Nav.Link>
                <Nav.Link href="#pricing">COMMUNITY</Nav.Link>
                <Nav.Link href="#pricing">CATALOGUE</Nav.Link>
            </Nav>
        </Container>
        <Image src={UserImage} roundedCircle width={40}/>
    </Navbar>
  )
}
