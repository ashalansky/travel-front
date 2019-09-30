import React, { Fragment } from "react";
import DestinationCard from "./DestinationCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    padding: 30,
    textAlign: 'center',
   
    whiteSpace: 'nowrap',
 
  }
});

export default function() {
  const classes = useStyles();


  return (
  <Fragment>
    <Typography className={classes.title} variant="h3"> 
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