import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import {Animated} from "react-animated-css";


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 40,
    display: 'grid',
    gridTemplateRows: '25% 25% auto',
    gridTemplateColumns: '90px auto 90px',
    width: '100%',
    background: 'rgb(54,104,173)',
    background: 'linear-gradient(0deg, rgba(54,104,173,1) 0%, rgba(255,255,255,1) 0%, rgba(100,148,233,1) 100%)',
    fontFamily: 'Roboto',
    height: '70vh',
  },
  button: {
    gridRow: 3,
    gridColumn: 2,
    textAlign: 'center',
    placeSelf: 'center',
    background: 'none',
    border: '1px solid',
    borderColor: 'black',
    height: 48,
    width: 200,
    color: 'black',
  },
  title: {
    gridRow: 1,
    gridColumn: 2,
    placeSelf: 'center',
    fontStyle: "Helvetica Neue",
    color: 'black',

  },
  plane: {
    gridRow: 2,
    gridColumn: 2,
    placeSelf: 'center',
    color: 'black',
    fontSize: 70,
    animation: 0.3,
  }
}))

export default function HeroBanner(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <Animated animationIn="fadeInUp" className={classes.title}>
        <Typography variant="h4" >Travel Bum</Typography>
      </Animated>
        <AirplanemodeActiveIcon className={classes.plane}></AirplanemodeActiveIcon>
        <Button className={classes.button}>Create Trip</Button>
    </div>
    );
};