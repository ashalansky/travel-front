import React from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";

require('dotenv').config()

const useStyles = makeStyles({
  container: {
    justify: "center"
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    height: "60vh"
  }
});

const callApi = (() => {
  
  axios({
    "method":"GET",
    "url":"https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host": process.env.REACT_APP_HIPMUNK_HOST,
    "x-rapidapi-key": process.env.REACT_APP_HIPMUNK_KEY
    },"params":{
    "infants_lap":"0",
    "children":"0",
    "seniors":"0",
    "country":"CA",
    "from0":"YYC",
    "to0":"YEG",
    "date0":"Jan 20 2020",
    "from1":"YEG",
    "to1":"YVR",
    "date1":"Jan 30 2020",
    "from2":"YVR",
    "to2":"YYC",
    "date2":"Feb 7 2020",
    "pax":"1",
    "cabin":"Coach"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
})

export default function FlightComps(props) {

  const classes = useStyles();

  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12}>
          <section>
            
          </section>
        </Grid>
      </Grid>
    </Paper>
  )
}