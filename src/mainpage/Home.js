import React, { useState } from 'react';
import HeroBar from './HeroBar';
import CardGrid from './CardGrid';
import AppDescription from './AppDescription';
import ModalContainer from '../modal/ModalContainer';
import NavBar from './NavBar';
import SignupModal from '../mainpage/SignupModal';
import LoginModal from '../mainpage/LoginModal';

export default function Home(props){
  const [modalOn, setModal] = useState(false);

  const closeMainModal = function(){
    setModal(false)
  }

 return (
      <div>
    


        <HeroBar setModal={setModal} modalOn={modalOn}></HeroBar>
        <ModalContainer open={modalOn} closeModal={closeMainModal}></ModalContainer>
        <div><CardGrid setModal={setModal} modalOn={modalOn}></CardGrid></div>
        <div><AppDescription></AppDescription></div>
      </div>
  )



}



