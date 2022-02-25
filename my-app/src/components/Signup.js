import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Button, Container} from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from "react-router-dom";


export default function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

const handleAction = useCallback(async e => {
    
    e.preventDefault();
    // alert(password+"  "+email);

    const auth = getAuth()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
        // alert("signup: "+ user);
        navigate('/profile');
        props.setLogged(true);
        // ...
      })
    } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
        } else {
            toast.error(e.message);
        }
      
    }

  }, [password, email])

    return (
        <div>
            <h1>Sign Up</h1>

        <Container>
            <Form onSubmit={handleAction}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Sign Up
                </Button>
            </Form>
        </Container>
        </div>
    )
}