
import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Form } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    // const handleAction = () => {
    //     // 
    //     const authentication = getAuth();
    //       signInWithEmailAndPassword(authentication, email, password)
    //         .then((response) => {
    //           navigate('/home')
    //           sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    //         })
    //         .catch((error) => {
    //           console.log(error.code)
    //           if (error.code === 'auth/wrong-password') {
    //             toast.error('Please check the Password');
    //           }
    //           if (error.code === 'auth/user-not-found') {
    //             toast.error('Please check the Email');
    //           }
    //         })
    //     }


      const handleAction = useCallback(async e => {
  
        e.preventDefault();
        alert(password+"  "+email);
    
        const auth = getAuth()
        try {
          await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            console.log(userCredential) 
            const user = userCredential.user;
            sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
            alert("login "+ user);
            navigate('/');
            // ...
          })
        } catch (e) {
          if (e.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (e.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          } else {
            alert(e.message);
          }
          
        }

      }, [password, email])
      

    return (
        <Container>
            <Form onSubmit={handleAction}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}