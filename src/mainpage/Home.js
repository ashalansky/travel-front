import React, { useState } from 'react';
import HeroBar from './HeroBar';
import CardGrid from './CardGrid';
import AppDescription from './AppDescription';
import ModalContainer from '../modal/ModalContainer';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Home(props){
  const [modalOn, setModal] = useState(false);

  const closeMainModal = function(){
    setModal(false)
  }

 return (
      <div>
        <HeroBar setModal={setModal} modalOn={modalOn}></HeroBar>
        <ModalContainer open={modalOn} closeModal={closeMainModal} userId={cookies.get("userId")}></ModalContainer>
        <div><CardGrid setModal={setModal} modalOn={modalOn}></CardGrid></div>
        <div><AppDescription></AppDescription></div>
      </div>
  )



}



