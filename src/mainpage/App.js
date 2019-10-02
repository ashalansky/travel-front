import React, { useState } from 'react';
import NavBar from './NavBar';
import HeroBar from './HeroBar';
import CardGrid from './CardGrid';
import AppDescription from './AppDescription';
import ModalContainer from '../modal/ModalContainer';
import SignupModal from '../mainpage/SignupModal';
import LoginModal from '../mainpage/LoginModal';


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
        <LoginModal open={LoginOn} closeModal={closeModal}></LoginModal>
        <SignupModal open={SignUpOn} closeModal={closeModal}></SignupModal>
        <div><CardGrid></CardGrid></div>
        <div><AppDescription></AppDescription></div>
      </div>
     
  )
}