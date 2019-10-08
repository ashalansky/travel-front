import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import PeopleTab from './PeopleTab';
import VerticalTabs from './TabPanel'

const useStyles = makeStyles(theme => ({
  container: {
    justify: 'center',
    margin: 'auto',
    display: 'grid',
    gridTemplateRows: '90% 10%',
  },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 15,
      color: '#9b8bf7',
      padding: '0px',
      width: '50%'
    },
    formInput: {
      color: '#9b8bf7', 
      fontSize: 10,
  },
  paper: {
    justifyItems: 'center',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '25% 25% 25% 25%',
    alignItems: 'center',
    margin: 'auto',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Ubuntu',
    borderRadius: 15,
    marginLeft: 10,
  },
  flight: {
    display: 'grid',
    gridTemplateColumns: '40% auto 40%',
    gridTemplateRows: '50% 50%',
    textAlign: "center",
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    height: "60vh",
    fontFamily: 'Ubuntu',
    border: '1px solid #8d9ae8',
    borderRadius: 15,
    color: '#a5a0aa',
    '&:hover': {
      boxShadow: '-5px 0px 1px 0px rgba(155,139,247,1);'
    }
  },
  button: {
    // margin: theme.spacing(1),
    background: 'white',
    cursor: 'pointer',
    border: '2px solid #f29e92',
    color: '#a5a0aa',
    fontSize: 20,
    width: '50%',
    margin: 'auto',
    padding: '2px 8px',
    borderRadius: 15,
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      boxShadow: '0 2px 5px 2px rgba(255, 105, 135, .3)',
    }
  },
}));

export default function FlightComp(props) {
  const [values, setValues] = React.useState({
    children: '',
    infants: '',
    adults: '',
    name: 'hai',
  })


  const classes = useStyles();

  return (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
              <PeopleTab cities={props.cities} flightPlans={props.flightPlans} updateFlightPlans={props.updateFlightPlans} updateCityCode={props.updateCityCode}></PeopleTab>
          </Grid>
          <Grid item xs={12} sm={7}>
            <VerticalTabs cities={props.cities} flightPlans={props.flightPlans} selectedFlight={props.selectFlightPlan}>
            </VerticalTabs>
          </Grid>
        </Grid>
  )
}