import React from 'react'
// import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 3fr)',
  },
  paper: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#ffc250',
    cursor: 'pointer'
  }
}));

// const callApi = (() => {
  
//   axios({
//     "method":"GET",
//     "url":"https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host": process.env.REACT_APP_HIPMUNK_HOST,
//     "x-rapidapi-key": process.env.REACT_APP_HIPMUNK_KEY
//     },"params":{
//     "infants_lap":"0",
//     "children":"0",
//     "seniors":"0",
//     "country":"CA",
//     "from0":"YYC",
//     "to0":"YEG",
//     "date0":"Jan 20 2020",
//     "from1":"YEG",
//     "to1":"YVR",
//     "date1":"Jan 30 2020",
//     "from2":"YVR",
//     "to2":"YYC",
//     "date2":"Feb 7 2020",
//     "pax":"1",
//     "cabin":"Coach"
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
// })

export default function FlightComp(props) {

  const classes = useStyles();

  return (
      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <Typography variant="body2">
              YYC
            </Typography>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
            <Typography variant="body2">
              YEG
            </Typography>
            <Typography>
              23 Oct, 16:30
            </Typography>
            <Typography variant="body2">
              $450
            </Typography>
            <Button variant="outlined" className={classes.button}>
              SELECT
            </Button>
          </Paper>
        </Grid>
      </Grid>
  )
}