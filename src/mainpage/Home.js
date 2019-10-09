import React, { useState, Fragment } from 'react';
import HeroBar from './HeroBar';
import CardGrid from './CardGrid';
import AppDescription from './AppDescription';
import ModalContainer from '../modal/ModalContainer';
import Cookies from 'universal-cookie';
import LoginModal from './LoginModal';

const cookies = new Cookies();

export default function Home(props){
  const [modalOn, setModal] = useState(false);

  const closeMainModal = function(){
    setModal(false)
  }

  const loggedIn = function() {
    if (cookies.get("username")) {
      return (
        <Fragment>
          <HeroBar setModal={setModal} modalOn={modalOn}></HeroBar>
          <ModalContainer open={modalOn} closeModal={closeMainModal} userId={cookies.get("userId")}></ModalContainer>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <HeroBar setModal={props.setLoginModal} modalOn={props.open}></HeroBar>
          <LoginModal login={props.login} open={props.open} closeModal={props.closeModal} emailError={props.emailError} passwordError={props.passwordError} errorReset={props.errorReset}></LoginModal>
        </Fragment>
      )
    }
  }

return (
      <div>
        {loggedIn()}
        <div><CardGrid setModal={setModal} modalOn={modalOn}></CardGrid></div>
        <div><AppDescription></AppDescription></div>
      </div>
  )



}



