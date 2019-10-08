import React, { useState, Fragment } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Itin from '../itin';
import axios from 'axios';
import Home from './Home'
import { classes } from 'istanbul-lib-coverage';
import NavBar from './NavBar';
import SignupModal from '../mainpage/SignupModal';
import LoginModal from '../mainpage/LoginModal';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const register = ((username, email, password, city) => {
  let url = "http://localhost:8080/users/register";
  let data = {
    username,
    email,
    password,
    city
  }
  
  axios.post(
    url,
    data
  )
  .then(() => {
    cookies.set('username', data.username)
  })
})



export default function App() {
  const [LoginOn, setLoginModal] = useState(false);
  const [SignUpOn, setSignUpModal] = useState(false);

  const [username, setUsername] = useState(cookies.get('username'));

  const login = ((email, password) => {
     return axios.post("http://localhost:8080/users/login", {email, password})
     .then((data)=>{
       let name = data.data.user[0].username 
       cookies.set('username', name)
       setUsername(name)
     });
  })

  const register = ((username, email, password, city) => {
    let url = "http://localhost:8080/users/register";
    let data = {
      username, 
      email,
      password,
      city
    }
    console.log(data)
    axios.post(
      url,
      data
    )
    .then((data) => {
      let name = data.data.user[0].username 
      setUsername(name)
    });
    
  })
   
  const logout = function(){
    cookies.remove('username')
    setUsername("")
  }

  const closeModal = function(){
    setLoginModal(false);
    setSignUpModal(false);
  }

  
  return(
  
    <Router>

      <NavBar user={username} setLoginModal={setLoginModal} setSignUpModal={setSignUpModal} LoginOn={LoginOn} SignUpOn={SignUpOn} logout={logout}></NavBar>
      <LoginModal login={login} open={LoginOn} closeModal={closeModal}></LoginModal>
      <SignupModal register={register} open={SignUpOn} closeModal={closeModal}></SignupModal>

      <Route 
        exact path="/" 
        component={Home}
      />

      <Route 
        path="/itineraries/:id" 
        component={Itin}
      />

    </Router>

 

  )
}

