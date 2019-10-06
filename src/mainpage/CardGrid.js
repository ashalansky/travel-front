import React, { Fragment } from "react";
import DestinationCard from "./DestinationCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    padding: 30,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    whiteSpace: 'nowrap',
    marginBottom: 30,
    color: 'grey',
  }
});

export default function() {
  const classes = useStyles();


  return (
  <Fragment>
    <Typography 
      className={classes.title}
      variant="h3"
      data-aos='fade-up' 
      data-aos-delay='150' 
      data-aos-anchor-placement='top-bottom' 
      data-aos-easing='ease-in-out' 
      data-aos-duration='600'
     > 
       Popular Destinations
    </Typography>
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      <DestinationCard></DestinationCard>
      <DestinationCard></DestinationCard>
      <DestinationCard></DestinationCard>
    </Grid>
    </Fragment>
  )

}