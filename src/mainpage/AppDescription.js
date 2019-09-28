import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import ShareIcon from '@material-ui/icons/Share';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EventIcon from '@material-ui/icons/Event';
import BlueGrey from '@material-ui/core/colors/blueGrey';
import LightBlue from '@material-ui/core/colors/lightBlue';


const useStyles = makeStyles(theme => ({
  container: {
    gridGap: theme.spacing(3),
    alignItems: 'center',
    justify: 'center',
    background: LightBlue[50],
  },
  title: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(2),
  },
  typography: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  description: {
    textAlign: 'center',
    color: BlueGrey[500],
    fontSize: 24,
  },
  icon: {
    fontSize: 100,
  }
}));

export default function AppDesc(props) {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4"> 
            Become a Travel Bum
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.typography}>
            <LocationCityIcon className={classes.icon}/>
          </Typography>
        </Grid>
        <Grid item xs={3}>   
          <Typography className={classes.typography}>
            <EventIcon className={classes.icon}/>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.typography}>
            <LocalAirportIcon className={classes.icon}/>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.typography}>
            <ShareIcon className={classes.icon}/>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.description}>
            Choose your destinations
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.description}>
            Pick your dates
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.description}>
            Select your flights
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.description}>
            Share your plan with your friends
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}