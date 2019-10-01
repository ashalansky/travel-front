import React, { useState } from 'react';
import NavBar from './NavBar';
import HeroBar from './HeroBar';
import CardGrid from './CardGrid';
import AppDescription from './AppDescription';
import ModalLayout from '../modal/ModalLayout';
import ModalContainer from '../modal/ModalContainer';
//IM A COMMENT
//Im another comment
export default function App() {
  const [modalOn, setModal] = useState(false);
 
  return (
    <div>
      <NavBar></NavBar>
      <HeroBar setModal={setModal} modalOn={modalOn}></HeroBar>
      <ModalContainer open={modalOn}></ModalContainer>
      <div><CardGrid></CardGrid></div>
      <div><AppDescription></AppDescription></div>
     
    </div>
  )
}