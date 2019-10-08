import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import RemoveIcon from '@material-ui/icons/Remove';
import AOS from 'aos'


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 70,
    display: 'grid',
    gridTemplateRows: '35% 25% auto',
    gridTemplateColumns: '90px auto 90px',
    width: '100%',
    background: 'linear-gradient(0deg, rgba(54,104,173,1) 0%, rgba(255,255,255,1) 0%, rgba(100,148,233,1) 100%)',
    height: '90vh',
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
    width: 220,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    '&:hover': {
      background: 'white',
      color: '#ffc250'
    }
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
    fontSize: 150,
    transform: 'rotate(120deg) scale(1.1)'
    
  },
  line: {
    gridRow: 2,
    gridColumn: 2,
    placeSelf: 'center',
    color: '#ffc250',
    fontSize: 150,
  }
}))

export default function HeroBanner(props) {
  const classes = useStyles();
  AOS.init()
  
  return (
    <div className={classes.container}>
        <Typography className={classes.title} 
          data-aos='fade-up' 
          data-aos-delay='900' 
          data-aos-easing='ease-in-out' 
          data-aos-duration='700' 
          variant="h1" >Travel Bum</Typography>
          <RemoveIcon className={classes.line}
            data-aos='fade-right' 
            data-aos-delay='1300' 
            data-aos-easing='ease-in-out' 
            data-aos-duration='1000'></RemoveIcon>
          <RemoveIcon className={classes.line}
            data-aos='fade-right' 
            data-aos-delay='1200' 
            data-aos-easing='ease-in-out' 
            data-aos-duration='1000'></RemoveIcon>
          <RemoveIcon className={classes.line}
            data-aos='fade-right' 
            data-aos-delay='1100' 
            data-aos-easing='ease-in-out' 
            data-aos-duration='1000'></RemoveIcon>
        <AirplanemodeActiveIcon className={classes.plane} 
          data-aos='fade-right' 
          data-aos-delay='1000' 
          data-aos-easing='ease-in-out' 
          data-aos-duration='1000'
          >
          </AirplanemodeActiveIcon>
        <Button className={classes.button} 
          onClick={() => props.setModal(!props.modalOn)}
          data-aos='fade-up' 
          data-aos-delay='1000' 
          data-aos-easing='ease-in-out' 
          data-aos-duration='1000'>Create Trip</Button>
    </div>
    );
};