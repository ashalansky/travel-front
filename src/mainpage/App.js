import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Itinerary from '../itin';
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
  const [error, setError] = useState({
    signUpEmail: false,
    loginEmail: false,
    loginPassword: false    
  })

  const [state, setState] = useState({
    username: cookies.get('username'),
    userId: undefined
  })

  const resetErrors = function() {
    setError(
      {...error, signUpEmail: false, loginEmail: false, loginPassword:false}
    )
  }

  const login = ((email, password) => {
     return axios.post(process.env.REACT_APP_API_BASE_URL+"users/login", {email, password})
     .then((data)=>{
       if (data.data === "invalid email") {
        resetErrors();
        setError({...error, signUpEmail: false, loginEmail: true, loginPassword: false})
       } else if (data.data === "incorrect password") {
        resetErrors();
        setError({...error, signUpEmail: false, loginEmail: false, loginPassword: true})
       } else {
         let name = data.data.user[0].username;
         let id = data.data.user[0].id;
         cookies.set('username', name);
         cookies.set('userId', id);
         setState({...state, username:name, userId:id });
         resetErrors();
         setLoginModal(false);
       }
     });
  })

  const register = ((username, email, password, city) => {
    let url = process.env.REACT_APP_API_BASE_URL+"users/register";
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
    .then((data) => {
      if (data.data === "Email already exists") {
        resetErrors();
        setError({...error, signUpEmail: true, loginEmail: false, loginPassword: false})
      } else {
        let name = data.data.user[0].username 
        let id = data.data.user[0].id
        cookies.set('username', name)
        cookies.set('userId', id)
        setState({...state, username:name, userId:id })
        resetErrors();
        setSignUpModal(false);
      }
    });
    
  })
   
  const logout = function(){
    cookies.remove('username')
    setState({...state, username:"", userId: undefined })
  }

  const closeModal = function(){
    resetErrors();
    setLoginModal(false);
    setSignUpModal(false);
  }
  
  return(
  
    <Router>

      <NavBar user={state.username} setLoginModal={setLoginModal} setSignUpModal={setSignUpModal} LoginOn={LoginOn} SignUpOn={SignUpOn} logout={logout}></NavBar>
      <LoginModal login={login} open={LoginOn} closeModal={closeModal} emailError={error.loginEmail} passwordError={error.loginPassword} errorReset={resetErrors}></LoginModal>
      <SignupModal register={register} open={SignUpOn} closeModal={closeModal} emailError={error.signUpEmail} errorReset={resetErrors}></SignupModal>

      <Route 
        exact path="/" 
        render={() => <Home login={login} setLoginModal={setLoginModal} open={LoginOn} closeModal={closeModal} emailError={error.loginEmail} passwordError={error.loginPassword} errorReset={resetErrors}></Home>}
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

