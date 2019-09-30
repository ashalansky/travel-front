import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './mainpage/NavBar';
import HeroBar from './mainpage/HeroBar';
import CardGrid from './mainpage/CardGrid';
import AppDescription from './mainpage/AppDescription';
import AddButton from './modal/AddButton';

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroBar></HeroBar>
      <AddButton></AddButton>
      <div><CardGrid></CardGrid></div>
      <div><AppDescription></AppDescription></div>
    </div>
  )
}



