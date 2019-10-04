import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AOS from 'aos'


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 80,
    display: 'grid',
    gridTemplateRows: '35% 25% auto',
    gridTemplateColumns: '90px auto 90px',
    width: '100%',
    background: 'linear-gradient(0deg, rgba(54,104,173,1) 0%, rgba(255,255,255,1) 0%, rgba(100,148,233,1) 100%)',
    height: '100vh',
  },
  button: {
    gridRow: 3,
    gridColumn: 2,
    textAlign: 'center',
    placeSelf: 'center',
    background: '#ffc250',
    border: '2px solid',
    borderColor: '#ffc250',
    height: 63,
    width: 250,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
  },
  title: {
    gridRow: 1,
    gridColumn: 2,
    placeSelf: 'center',
    fontFamily: 'Ubuntu',
    color: 'white',
    textAlign: 'center',

  },
  plane: {
    gridRow: 2,
    gridColumn: 2,
    placeSelf: 'center',
    color: 'white',
    fontSize: 70,
    animation: 0.3,
    rotate: '90deg'
  }
}))

export default function HeroBanner(props) {
  const classes = useStyles();
  AOS.init()
  
  return (
    <div className={classes.container}>
        <Typography className={classes.title} data-aos='fade-up' data-aos-delay='900' data-aos-easing='ease-in-out' data-aos-duration='700' variant="h1" >Travel Bum</Typography>
        <AirplanemodeActiveIcon className={classes.plane} data-aos='fade-up' data-aos-delay='1000' data-aos-easing='ease-in-out' data-aos-duration='900'></AirplanemodeActiveIcon>
        <Button className={classes.button} onClick={() => props.setModal(!props.modalOn)}>Create Trip</Button>
    </div>
    );
};