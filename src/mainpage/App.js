import React, { useState } from 'react';
import NavBar from './NavBar';
import HeroBar from './HeroBar';
import CardGrid from './CardGrid';
import AppDescription from './AppDescription';
import ModalContainer from '../modal/ModalContainer';
import SignupModal from '../mainpage/SignupModal';
import LoginModal from '../mainpage/LoginModal';
import FlightComp from '../modal/FlightComp'
import axios from 'axios';

const login = ((username, password) => {
   return axios.post("/login")
})

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
    console.log("added new user");
  })
})


export default function App() {
  const [modalOn, setModal] = useState(false);
  const [LoginOn, setLoginModal] = useState(false);
  const [SignUpOn, setSignUpModal] = useState(false);
 
  const closeModal = () => {
    setModal(false);
    setLoginModal(false);
    setSignUpModal(false);

  }


  return (
      <div>
        <NavBar setLoginModal={setLoginModal} setSignUpModal={setSignUpModal} LoginOn={LoginOn} SignUpOn={SignUpOn}></NavBar>
        <HeroBar setModal={setModal} modalOn={modalOn}></HeroBar>
        <ModalContainer open={modalOn} closeModal={closeModal}></ModalContainer>
        <LoginModal login={login} open={LoginOn} closeModal={closeModal}></LoginModal>
        <SignupModal register={register} open={SignUpOn} closeModal={closeModal}></SignupModal>
        <div><CardGrid></CardGrid></div>
        <div><AppDescription></AppDescription></div>
        <div><FlightComp></FlightComp></div>
      </div>
     
  )
}

