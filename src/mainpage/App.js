import React, { useState } from 'react';
import NavBar from './NavBar';
import HeroBar from './HeroBar';
import CardGrid from './CardGrid';
import AppDescription from './AppDescription';
import ModalContainer from '../modal/ModalContainer';
import SignupModal from '../mainpage/SignupModal';
import LoginModal from '../mainpage/LoginModal';
import axios from 'axios';

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

  const [username, setUsername] = useState("");

  const login = ((email, password) => {
     return axios.post("http://localhost:8080/users/login", {email, password})
     .then((data)=>{
       let name = data.data.user[0].username 
       setUsername(name)
     });
  })
   
  const logout = (() => {
    setUsername("")
  })

  const closeModal = () => {
    setModal(false);
    setLoginModal(false);
    setSignUpModal(false);
  }
  return (
      <div>
        <NavBar user={username} setLoginModal={setLoginModal} setSignUpModal={setSignUpModal} LoginOn={LoginOn} SignUpOn={SignUpOn} logout={logout}></NavBar>
        <HeroBar setModal={setModal} modalOn={modalOn}></HeroBar>
        <ModalContainer open={modalOn} closeModal={closeModal}></ModalContainer>
        <LoginModal login={login} open={LoginOn} closeModal={closeModal}></LoginModal>
        <SignupModal register={register} open={SignUpOn} closeModal={closeModal}></SignupModal>
        <div><CardGrid setModal={setModal} modalOn={modalOn}></CardGrid></div>
        <div><AppDescription></AppDescription></div>
      </div>
  )
}

