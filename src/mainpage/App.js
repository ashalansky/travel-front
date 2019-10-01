import React, { useState } from 'react';
import NavBar from './NavBar';
import HeroBar from './HeroBar';
import CardGrid from './CardGrid';
import AppDescription from './AppDescription';
import ModalContainer from '../modal/ModalContainer';

export default function App() {
  const [modalOn, setModal] = useState(false);
 
  const closeModal = () => {
    setModal(false);
  }


  return (
    <div>
      <NavBar></NavBar>
      <HeroBar setModal={setModal} modalOn={modalOn}></HeroBar>
      <ModalContainer open={modalOn} closeModal={closeModal}></ModalContainer>
      <div><CardGrid></CardGrid></div>
      <div><AppDescription></AppDescription></div>
     
    </div>
  )
}