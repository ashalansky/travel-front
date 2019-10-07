import React from 'react'
// import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const axios = require("axios");

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
    gridTemplateColumns: '100%',
    gridTemplateRows: '25% 25% 25% 25%',
    alignItems: 'center',
    margin: 'auto',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Ubuntu',
    borderRadius: 15,
    marginLeft: 10
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
    height: 60,
    fontFamily: 'Ubuntu',
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
    border: '1px solid #f29e92',
    color: '#a5a0aa',
    fontSize: 12,
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

  const callFlightsApi = (() => {
    
    let apiParams = {
      "infants_lap":values.infants || 0,
      "children": values.children || 0,
      "seniors": "0",
      "pax": values.adults || 0,
      "country":"CA",
      "cabin":"Coach"
    }
    for (let i = 0 ; i < props.cities.length - 1; i++) {
      apiParams[`from${i}`] = props.cities[i].cityCode
      apiParams[`to${i}`] = props.cities[i + 1].cityCode
      apiParams[`date${i}`] = props.cities[i].departureDate
    }

    axios({
      "method":"GET",
      "url":"https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host": process.env.REACT_APP_HIPMUNK_HOST,
      "x-rapidapi-key": process.env.REACT_APP_HIPMUNK_KEY
      },
      "params": apiParams
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
  })
  

  const getCityCodes = (() => {
    console.log("in getCityCodes");
    for (let i = 0; i < props.cities.length; i++) {

    axios({
      "method":"GET",
      "url":"https://apidojo-hipmunk-v1.p.rapidapi.com/locations/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host": process.env.REACT_APP_HIPMUNK_HOST,
      "x-rapidapi-key": process.env.REACT_APP_HIPMUNK_KEY
      },"params":{
      "query": props.cities[i].name
      }
      })
      .then((response)=>{
        props.updateCityCode(response.data.normalized, response.data.endpoints.station[0].code)
      })
      .catch((error)=>{
        console.log(error)
      });

    if (i === props.cities.length - 1) {
      axios({
        "method":"GET",
        "url":"https://apidojo-hipmunk-v1.p.rapidapi.com/locations/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host": process.env.REACT_APP_HIPMUNK_HOST,
        "x-rapidapi-key": process.env.REACT_APP_HIPMUNK_KEY
        },"params":{
        "query": props.cities[i].name
        }
        })
        .then((response)=>{
          props.updateCityCode(response.data.normalized, response.data.endpoints.station[0].code)
        })
        .then(() => {
          callFlightsApi();
        })
        .catch((error)=>{
          console.log(error)
        });
    }
    }
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();

  return (
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <FormControl variant="outlined" className={classes.formControl} style={{gridColumn: 1, gridRow: 1}}>
                <InputLabel className={classes.formInput} ref={inputLabel} htmlFor="outlined-adults-simple">
                  Adults
                </InputLabel>
                <Select
                  value={values.adults}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'adults',
                    id: 'outlined-adults-simple',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={3}>4</MenuItem>
                  <MenuItem value={3}>5</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl} style={{gridColumn: 1, gridRow: 2}}>
                <InputLabel className={classes.formInput} ref={inputLabel} htmlFor="outlined-adults-simple">
                  Children
                </InputLabel>
                <Select
                  value={values.children}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'children',
                    id: 'outlined-children-simple',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={3}>4</MenuItem>
                  <MenuItem value={3}>5</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl} style={{gridColumn: 1, gridRow: 3}}>
                <InputLabel className={classes.formInput} ref={inputLabel} htmlFor="outlined-adults-simple">
                  Infants
                </InputLabel>
                <Select
                  value={values.infants}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'infants',
                    id: 'outlined-infants-simple',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={3}>4</MenuItem>
                  <MenuItem value={3}>5</MenuItem>
                </Select>
              </FormControl>
              <Button variant="outlined" className={classes.button} style={{ gridRow: 4, gridColumnStart: 1, gridColumnEnd: 3, width: '50%', padding: 5} } onClick={() => getCityCodes()}>Generate Flights </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper className={classes.flight}>
              <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
                YYC
              </Typography>
              <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
              <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
                YEG
              </Typography>
              <Typography style={{ fontSize: 12}}>
                23 Oct, 16:30
              </Typography>
              <Typography style={{ fontSize: 18, color: '#9b8bf7'}}>
                $450
              </Typography>
              <Button variant="outlined" className={classes.button}>
                SELECT
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
  )
}