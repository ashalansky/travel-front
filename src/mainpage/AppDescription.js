import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import ShareIcon from '@material-ui/icons/Share';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EventIcon from '@material-ui/icons/Event';
   

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    marginTop: '40px',
    marginBottom: '60px'

  },
  item: {
    minHeight: 72,
    maxWidth: '24%'
  },
  title: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'grey',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(4),
    fontFamily: 'Ubuntu',
    marginTop: '32px'
  },
  typography: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    fontFamily: 'Ubuntu'
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  description: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 24,
    fontFamily: 'Ubuntu'
  },
  icon: {
    fontSize: 100,
    color: '#ffc250'
  }
}));

export default function AppDesc(props) {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.container} >
        <Grid item xs={12} data-aos='fade-up' 
            data-aos-delay='150' 
            data-aos-anchor-placement='top-bottom' 
            data-aos-easing='ease-in-out' 
            data-aos-duration='700'>
          <Typography className={classes.title} variant="h4"> 
            BECOME A TRAVEL BUM
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={3} data-aos='fade-up' 
              data-aos-delay='300' 
              data-aos-anchor-placement='top-bottom' 
              data-aos-easing='ease-in-out' 
              data-aos-duration='900'>
          <Typography className={classes.typography}>
            <LocationCityIcon className={classes.icon}/>
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={3} 
            data-aos='fade-up' 
            data-aos-delay='400' 
            data-aos-anchor-placement='top-bottom' 
            data-aos-easing='ease-in-out' 
            data-aos-duration='900'>   
          <Typography className={classes.typography}>
            <EventIcon className={classes.icon}/>
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={3}
            data-aos='fade-up' 
            data-aos-delay='450' 
            data-aos-anchor-placement='top-bottom' 
            data-aos-easing='ease-in-out' 
            data-aos-duration='900'>
          <Typography className={classes.typography}>
            <LocalAirportIcon className={classes.icon}/>
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={3} 
            data-aos='fade-up' 
            data-aos-delay='500' 
            data-aos-anchor-placement='top-bottom' 
            data-aos-easing='ease-in-out' 
            data-aos-duration='900'>
          <Typography className={classes.typography}>
            <ShareIcon className={classes.icon}
            />
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={3}>
          <Typography className={classes.description}>
            Choose your destinations
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={3}>
          <Typography className={classes.description}>
            Pick your dates
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={3}>
          <Typography className={classes.description}>
            Select your flights
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={3}>
          <Typography className={classes.description}>
            Share your plan with your friends
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}