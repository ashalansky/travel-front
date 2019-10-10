import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
const axios = require("axios");

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 15,
      color: '#9b8bf7',
      padding: '0px',
      width: '50%'
    },
    formInput: {
      color: '#9b8bf7', 
      fontSize: '15px',
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
    marginLeft: 10,
    height: "60vh"
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

export default function PeopleTab(props) {
  const [values, setValues] = React.useState({
    children: '',
    infants: '',
    adults: '',
    name: 'hai',
  })
  const classes = useStyles();

  const formatDate = function(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
  
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

  // generate a list of 5 cheapest flights that are available from the hipmunk api
  const makePlans = function(data, urlLink) {
    let cheapestFlights = [];
    let priceList = [];
    // List of flights that are provided by hipmunk
    const itineraryList = data.data.itins

    for (let itinerary in itineraryList) {
      if (!priceList.includes(itineraryList[itinerary].unrounded_price)){
        priceList.push(itineraryList[itinerary].unrounded_price)
      }
    }

    // sort the unround_price of flights from smallest to largest
    priceList.sort((a,b) => a - b);

    for (let price of priceList) {
      for (let itinerary in itineraryList) {
        if (itineraryList[itinerary].unrounded_price === price && cheapestFlights.length < 5){
          cheapestFlights.push(itineraryList[itinerary]);
        }
      }
    }
    //Update the list of flights that are available for user to select
    props.updateFlightPlans(cheapestFlights, urlLink);
  }

  //Searches for available flights given number of passengers, list of cities, the cities' airport codes, and the departure date
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
      apiParams["from0"] = props.cities[i].cityCode
      apiParams["to0"] = props.cities[i + 1].cityCode
      apiParams["date0"] = props.cities[i].departureDate
      // format the departure date to be used when creating a link to the flight details
      let formattedDate = formatDate(props.cities[i].departureDate);
      
      let url = `hipmunk.com/flights#f=${props.cities[i].cityCode};t=${props.cities[i+1].cityCode};d=${formattedDate}`
      if (values.chilren) {
        url += `;children=${values.chilren}`;
      }
      if (values.infants) {
        url += `;infants_seat=${values.infants}`;
      }
      url += `;country=CA;is_search_for_business=true;group=1`;
      
      // spread the params for the api call to prevent changing parameter values 
      let firstParam = {...apiParams};
      axios({
        "method":"GET",
        "url":"https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host": process.env.REACT_APP_HIPMUNK_HOST,
        "x-rapidapi-key": process.env.REACT_APP_HIPMUNK_KEY
        },
        "params": firstParam
        })
        .then((response)=>{
          // repeat api calls because hipmunk may return with status 200 but their search query might not be finished
          // they let developers know that their search is finished by providing a "done" key which is a boolean
          let secondParams = {...firstParam};
          console.log("secondParams", secondParams);
          if (response.data.done) {
            // If response is finished, start generating list of flights
            makePlans(response, url)
          } else {
            axios({
              "method":"GET",
              "url":"https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session",
              "headers":{
              "content-type":"application/octet-stream",
              "x-rapidapi-host": process.env.REACT_APP_HIPMUNK_HOST,
              "x-rapidapi-key": process.env.REACT_APP_HIPMUNK_KEY
              },
              "params": secondParams
              })
              .then((response2) => {
                // limit the number of times a certain city can call the api to three because hipmunk only allows 500 api calls per month for demo
                let thirdParams = {...secondParams}
                console.log("thirdParams", thirdParams);
                if (response2.data.done) {
                  makePlans(response2, url)
                } else {
                  axios({
                    "method":"GET",
                    "url":"https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session",
                    "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host": process.env.REACT_APP_HIPMUNK_HOST,
                    "x-rapidapi-key": process.env.REACT_APP_HIPMUNK_KEY
                    },
                    "params": thirdParams
                    })
                    .then((response3) => {
                      makePlans(response3, url);
                    });
              }
            });
          }
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  })

  const getCityCodes = (() => {
    // empties the current list of flights that are stored in the state if there are any
    props.flightReset();
    // empties the current list of url links to flights in the state if there are any
    props.clearUrls();
    // counts the number of passengers that are boarding the plane
    props.setPassenger(values.adults, values.children, values.infants);
    
    for (let i = 0; i < props.cities.length; i++) {

    // api call to hipmunk to get the airport codes from city names
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
        // adds the airport codes to the city information that is being tracked in the state
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
          // after the city codes are generated for every city, start searching for available flights
          setTimeout(() => {
            callFlightsApi();
          }, 2000)
        })
        .catch((error)=>{
          console.log(error)
        });
      
      }
    }
  });

  return (
    <Paper className={classes.paper}>
      <FormControl variant="outlined" className={classes.formControl} style={{gridColumn: 1, gridRow: 1}}>
        <InputLabel className={classes.formInput} ref={inputLabel} htmlFor="outlined-adults-simple">Adults</InputLabel>
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
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl} style={{gridColumn: 1, gridRow: 2}}>
          <InputLabel className={classes.formInput} ref={inputLabel} htmlFor="outlined-adults-simple">Children</InputLabel>
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
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl} style={{gridColumn: 1, gridRow: 3}}>
            <InputLabel className={classes.formInput} ref={inputLabel} htmlFor="outlined-adults-simple">Infants</InputLabel>
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
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
          </FormControl>
          <Button 
            variant="outlined" className={classes.button} 
            style={{ gridRow: 4, gridColumnStart: 1, gridColumnEnd: 3, width: '50%', padding: 5} } 
            onClick={() => getCityCodes()}
            disabled={!values.children && !values.adults}
          >
              Generate Flights
          </Button>
        </Paper>
    )
}
