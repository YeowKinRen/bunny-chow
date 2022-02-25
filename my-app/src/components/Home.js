import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function Home() {

    // let navigate = useNavigate();
    // useEffect(() => {
    //     let authToken = sessionStorage.getItem('Auth Token')
    //     // alert(authToken)
    //     if (authToken) {
    //         navigate('/profile')
    //     }

    //     if (!authToken) {
    //         navigate('/home')
    //     }
    // }, [])

    return (
        <div>
            <h1>Home</h1>
            
            <h3>Login Authentication Project in React</h3>
            <p> Sign up Firebase </p>
        </div>
    )
}