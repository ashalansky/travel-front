import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Itin from '../itin';
import axios from 'axios';
import Home from './Home'
import NavBar from './NavBar';
import SignupModal from '../mainpage/SignupModal';
import LoginModal from '../mainpage/LoginModal';
import Cookies from 'universal-cookie';
import MyTrips from '../MyTrips';

const cookies = new Cookies();

export default function App() {
  const [LoginOn, setLoginModal] = useState(false);
  const [SignUpOn, setSignUpModal] = useState(false);

  const [state, setState] = useState({
    username: cookies.get('username'),
    userId: undefined
  })

  const login = ((email, password) => {
     return axios.post("http://localhost:8080/users/login", {email, password})
     .then((data)=>{
       console.log(data);
       let name = data.data.user[0].username
       let id = data.data.user[0].id
       cookies.set('username', name)
       cookies.set('userId', id)
       setState({...state, username:name, userId:id })
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
      let id = data.data.user[0].id
      cookies.set('username', name)
      cookies.set('userId', id)
      setState({...state, username:name, userId:id })
    });
    
  })
   
  const logout = function(){
    cookies.remove('username')
    setState({...state, username:"", userId: undefined })
  }

  const closeModal = function(){
    setLoginModal(false);
    setSignUpModal(false);
  }

  
  return(
  
    <Router>

      <NavBar user={state.username} setLoginModal={setLoginModal} setSignUpModal={setSignUpModal} LoginOn={LoginOn} SignUpOn={SignUpOn} logout={logout}></NavBar>
      <LoginModal login={login} open={LoginOn} closeModal={closeModal}></LoginModal>
      <SignupModal register={register} open={SignUpOn} closeModal={closeModal}></SignupModal>

      <Route 
        exact path="/" 
        component={Home}
      />

      <Route 
        path="/itineraries/:id" 
        component={Itinerary}
      />


      <Route 
        path="/mytrips/" 
        component={MyTrips}
      />

    </Router>

 

  )
}

