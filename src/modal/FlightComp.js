import React from 'react'
// import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    justify: 'center',
    margin: 'auto',
    display: 'grid',

     
  },
  paper: {
    display: 'grid',
    gridTemplateColumns: '40% auto 40%',
    gridTemplateRows: '50% 50%',
    textAlign: "center",
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    height: 90,
    fontFamily: 'Ubuntu',
    borderRadius: 15,
    color: '#a5a0aa',
    '&:hover': {
      boxShadow: '-5px 0px 1px 0px rgba(155,139,247,1);'
    }
  },
  button: {
    margin: theme.spacing(1),
    background: 'white',
    cursor: 'pointer',
    border: '1px solid #f29e92',
    color: '#a5a0aa',
    width: '60%',
    margin: 'auto',
    borderRadius: 15,
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      boxShadow: '0 2px 5px 2px rgba(255, 105, 135, .3)',
    }
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
            <Typography variant="body2" style={{ gridColumn: 1, fontSize: 25}}>
              YYC
            </Typography>
            <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
            <Typography variant="body2" style={{ gridColumn: 3, fontSize: 25}}>
              YEG
            </Typography>
            <Typography>
              23 Oct, 16:30
            </Typography>
            <Typography style={{ fontSize: 24, color: '#9b8bf7'}}>
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