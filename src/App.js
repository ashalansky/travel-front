import React from 'react';
import NavBar from './mainpage/NavBar';
import HeroBar from './mainpage/HeroBar';
import CardGrid from './mainpage/CardGrid';
import AppDescription from './mainpage/AppDescription';

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroBar></HeroBar>
      <div><CardGrid></CardGrid></div>
      <div><AppDescription></AppDescription></div>
    </div>
  )
}



