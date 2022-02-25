
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Nav, NavDropdown, Navbar, Button} from "react-bootstrap";
import {useNavigate, useLocation } from "react-router-dom";

function NavBar(props) {
  let navigate = useNavigate();

  // const [value, setValue] = React.useState(
  //   sessionStorage.getItem('Auth Token') || ''
  // );


  // useEffect(() => {
  //   // document.title = `You clicked ${count} times`;
  //   console.log("rerender");
  // }, [value]);

  // const isAuthenticated = () => {

  //   let authToken = sessionStorage.getItem('Auth Token');
  //   console.log("authToken")
  //   return authToken;
  
  // };



  const handleLogout = () => {
    console.log("logout");
    sessionStorage.removeItem('Auth Token');
    navigate('/home')
    props.setLogged(false);
  }




    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
       
      
          <Navbar.Brand href="/home">React-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Navlog/> */}
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
             
              <Nav.Link disabled={props.logged} href="/login">Login</Nav.Link>
              <Nav.Link disabled={props.logged} href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" bg="dark" variant="dark" >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav  className="ms-auto">
              {!props.logged && (
              <a href="/signup"><button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="button" href="/signup">Signup</button></a>)}
              <br/>
              
              {!props.logged && (
              <a href="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="button">Login</button></a>)}
              {props.logged && (
              <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={handleLogout}>Logout</button>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
};


export default NavBar;