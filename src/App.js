import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Calendar from './modal/Calendar';
import NavBar from './mainpage/NavBar';
import HeroBar from './mainpage/HeroBar';
import CardGrid from './mainpage/CardGrid';
import AppDescription from './mainpage/AppDescription';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  return (

    <div>
      <NavBar></NavBar>
      <HeroBar></HeroBar>
      <div><CardGrid></CardGrid></div>
      <div><AppDescription></AppDescription></div>
    </div>
  )
}



