// import logo from './logo.svg';
import './App.css';
import {Router, BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { app } from './firebase-config';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useState, useEffect} from 'react';
// import { app } from '../firebase-config';

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log(logged)
  }, [logged]);


  const PrivateRoute = ({children }) => {
    // let authToken = sessionStorage.getItem('Auth Token');
    return logged ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      
      <ToastContainer />
      
        <BrowserRouter>
        <NavBar logged={logged} setLogged={setLogged}/>
        
            <Routes>

              <Route path="/" component={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/login' element={<Login logged={logged} setLogged={setLogged}/>} />
              <Route path='/signup' element={<Signup logged={logged} setLogged={setLogged}/>} />
              <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
            </Routes>
      </BrowserRouter> 
      


    </div>
  );
}

export default App;
