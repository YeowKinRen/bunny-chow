
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";

function NavBar() {


  // const Navlog = (            
  // <Nav className="me-auto">
  // <Nav.Link href="/home">Home</Nav.Link>
  // <Nav.Link href="/login">Login</Nav.Link>
  // <Nav.Link href="/signup">Sign Up</Nav.Link>
  // <Nav.Link href="/profile">Profile</Nav.Link> 
  // </Nav>);
  const isAuthenticated = () => {

  let authToken = sessionStorage.getItem('Auth Token');
  return authToken;
  };



    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
       
      
          <Navbar.Brand href="/home">React-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Navlog/> */}
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              {!isAuthenticated && (<Nav.Link href="/login">Login</Nav.Link>)}
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" bg="dark" variant="dark" >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
};


export default NavBar;