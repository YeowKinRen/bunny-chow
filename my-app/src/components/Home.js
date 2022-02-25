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
            
            <h3>Simple Login Authentication Project in React</h3>
            <p> This project implements simple sign up and log in using Firebase authentication. 
            <br></br>
            Before authenticated, the profile page will be locked and redirect to the login page.
            <br></br>
            After authenticated, the sign up and log in navigation bar links will be disabled and 
            the navigation bar button will be a logout button. 
            <br></br>
            The links to profile page is also
            be opened.
            <br></br>
            The profile is a dummy page with a counter program.
            </p>
        </div>
    )
}