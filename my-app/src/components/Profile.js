import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function Profile() {
    let navigate = useNavigate();
    // const handleLogout = () => {
    //     sessionStorage.removeItem('Auth Token');
    //     navigate('/home')
    // }

    const [counter, setCounter] = useState(0)
  
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
      // Counter state is incremented
      setCounter(counter + 1)
    }
    
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
      // Counter state is decremented
      setCounter(counter - 1)
    }
    let divStyle = {
        'height': '100%',
        'fontWeight': 'bold',
        "fontSize":"30px"
    }
    
        

    return (
        <div>



            <h1>Profile</h1>

            <Container>
                <div style={divStyle}>{counter}</div>
                <Row className="mx-auto my-2">
                    <Col>
                        <Button size="lg" onClick={handleClick1}>increment</Button>{' '}
                        <Button size="lg" onClick={handleClick2}>decrement</Button>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}