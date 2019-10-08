import React from 'react'
import { Grid } from "@material-ui/core";
import PeopleTab from './PeopleTab';
import VerticalTabs from './TabPanel'

export default function FlightComp(props) {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5}>
        <PeopleTab cities={props.cities} flightPlans={props.flightPlans} updateFlightPlans={props.updateFlightPlans} updateCityCode={props.updateCityCode} setPassenger={props.setPassenger} flightReset={props.resetFlightPlans}></PeopleTab>
      </Grid>
      <Grid item xs={12} sm={7}>
        <VerticalTabs cities={props.cities} flightPlans={props.flightPlans} selectedFlight={props.selectFlightPlan}>
        </VerticalTabs>
      </Grid>
    </Grid>
  )
}