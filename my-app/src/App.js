// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { app } from './firebase-config';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect} from 'react';
// import { app } from '../firebase-config';

function App() {
  // let navigate = useNavigate();
  // this.setState({ key: Math.random() });

  const PrivateRoute = ({children }) => {
    let authToken = sessionStorage.getItem('Auth Token');
    return authToken ? children : <Navigate to="/login" />;
  };


  return (
    <div className="App">
      <NavBar/>
      <ToastContainer />
      
        <BrowserRouter>
            <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              {/* <Route path='/profile' element={<Profile/>} /> */}
              <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
            </Routes>
      </BrowserRouter> 
      {/* <Home/> */}
      


    </div>
  );
}

export default App;
