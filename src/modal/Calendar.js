import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
import Calendar from 'react-calendar';
import './styles/calendar.css';
import moment from 'moment';
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    width: "200px"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  reactCalendarTileSelectedPrevious1: {
    background: '#4FC3F7',
  },
  reactCalendarTileSelectedPrevious2: {
    background: '#81d2e0',
  },
  reactCalendarTileSelectedPrevious3: {
    background: '#49c4a1',
  },
  reactCalendarTileSelectedPrevious4: {
    background: '#edb625',
  },
  reactCalendarTileSelectedPrevious5: {
    background: '#e6186d',
  },
  reactCalendarTileSelectedPrevious6: {
    background: '#5c3a58',
  },
  container: {
    justify: "center"
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    height: "60vh"
  },
  numCircle: {
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    padding: "8px",
    border: "2px",
    color: "black",
    textAlign: "center",
    fontSize: "32px"
  }
}));

const classnames = require('classnames');

const setNewDate = function (departingDate) {
  let departDate = moment(departingDate);
  let newDate = moment(departDate).add(1, 'days');
  return newDate
}

export default function CalendarComponent(props) {

  const classes = useStyles();

  const [state, setState] = useState({
    numberOfCities: 0,
    lastDate: new Date(),
  });

  // Creates list of cities
  const cityList = props.cities.map((city) => {
    if (city.id === props.city) {
      let index = 0;
      for (let i = 0; i < props.cities.length; i++) {
        if (props.cities[i].id === props.city) {
          index = i + 1;
        }
      }
      let selectedClass = classnames(classes.fab)
      
      switch (index) {
        case 1:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious1)
          if (!Object.keys(props.cities[props.cities.length - 2]).includes("departureDate")){
            return (
              <div>
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            </div>
            )
          }
          return (
            <div>
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.id)}>
              {city.name}
            </Fab>
            </div>
          )
        case 2:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious2)
          if (!Object.keys(props.cities[props.cities.length - 2]).includes("departureDate")){
            return (
              <div>
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            </div>
            )
          }
          return (
            <div>
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.id)}>
              {city.name}
            </Fab>
            </div>
          )
        case 3:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious3)
          if (!Object.keys(props.cities[props.cities.length - 2]).includes("departureDate")){
            return (
              <div>
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            </div>
            )
          }
          return (
            <div>
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.id)}>
              {city.name}
            </Fab>
            </div>
          )
        case 4:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious4)
          if (!Object.keys(props.cities[props.cities.length - 2]).includes("departureDate")){
            return (
              <div>
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            </div>
            )
          }
          return (
            <div>
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.id)}>
              {city.name}
            </Fab>
            </div>
          )
        case 5:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious5)
          if (!Object.keys(props.cities[props.cities.length - 2]).includes("departureDate")){
            return (
              <div>
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            </div>
            )
          }
          return (
            <div>
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.id)}>
              {city.name}
            </Fab>
            </div>
          )
        case 6:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious6)
          if (!Object.keys(props.cities[props.cities.length - 2]).includes("departureDate")){
            return (
              <div>
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            </div>
            )
          }
          return (
            <div>
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.id)}>
              {city.name}
            </Fab>
            </div>
          )
        default:
          selectedClass = classnames(classes.fab)
          if (!Object.keys(props.cities[props.cities.length - 2]).includes("departureDate")){
            return (
              <div>
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            </div>
            )
          }
          return (
            <div>
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.id)}>
              {city.name}
            </Fab>
            </div>
          )
      }
    }
    
    let selectedClass = classnames(classes.fab)
    if (!Object.keys(props.cities[props.cities.length - 2]).includes("departureDate")){
      return (
        <div>
      <Fab variant="extended" className={selectedClass}>
        {city.name}
      </Fab>
      </div>
      )
    }
    return (
      <div>
      <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.id)}>
        {city.name}
      </Fab>
      </div>
    )
  });

  const instructions = function () {
    if (props.city !== props.cities[props.cities.length - 1].id) {
      for (let i = 0; i <props.cities.length; i ++) {
        if (props.city === props.cities[i].id){
          return (<p> When would you like to depart {props.cities[i].name}</p>)
        }
      }
    } else {
      return (<p> Press next when you are ready </p>)
    }
  }

  // removes all the departure dates that are stored within state
  const reset = function() {
    for (let i = 0; i < props.cities.length; i++) {
      delete props.cities[i].departureDate;
    }
    props.changeSelectedCity(props.cities[0].id);
    setState({...state, numberOfCities: 0, lastDate: new Date()})
  }

  // If a departure date is set for a city and the city is selected, the calendar focuses on the departure date
  const updateArrivingDate = function(city) {
    let index = 0
    for (let i = 0; i < props.cities.length; i++) {
      if (props.cities[i].id === city) {
        index = i;
      }
    }
    if (props.cities[index].departureDate) {
      return moment(props.cities[index].departureDate)["_d"];
    }
  }

  // This function runs every time a date is clicked on the calendar
  const onChange = (values) => {
    
    // values is the date that is currently clicked
    const departingDate = values
    // selectedCity is a number that represent a city that is being tracked in the current state
    let selectedCity = 0;
    // cityNumber is used to determine if a particular city in the state has a departure date
    let cityNumber = state.numberOfCities;
    

    if (cityNumber < props.cities.length){
      selectedCity = props.cities[cityNumber].id
    }

    if (cityNumber === props.cities.length) {
      selectedCity = props.cities[cityNumber - 1].id;
    }

    const newDate = setNewDate(departingDate);

    if (props.cities[cityNumber]){
      
      if (cityNumber === 0 && cityNumber < (props.cities.length - 1)) { // for origin city
        props.updateDepartureDate(moment(values).format("ll"), selectedCity); // updates departure date from origin city
        cityNumber++;
        selectedCity = props.cities[cityNumber].id 
        props.changeSelectedCity(selectedCity); // automatically chooses next city
        setState({...state, numberOfCities: cityNumber, lastDate: newDate["_d"]})
      } else if (!(moment(departingDate).add(1, 'days').isSameOrBefore(state.lastDate)) && cityNumber < (props.cities.length - 1)) { // for every city following the origin city excluding the last city prior to setting their departure dates
        props.updateDepartureDate(moment(values).format("ll"), selectedCity);
        if (cityNumber < props.cities.length - 1) {
          cityNumber++;
        }
        selectedCity = props.cities[cityNumber].id
        props.changeSelectedCity(selectedCity);
        setState({...state, numberOfCities: cityNumber, lastDate: newDate["_d"]})
      } else if (props.cities[cityNumber - 1].departureDate && selectedCity && cityNumber === (props.cities.length - 1)){ //for every city after departure date is set
        let selectedCity = props.cities[cityNumber].id;
        if (!(props.cities[props.cities.length - 1].id === props.city)) { // checks to see if the selected city is the last city
          let index = 0;
          for (let i = 0; i < props.cities.length - 1; i++) {
            if (props.cities[i].id === props.city) {
              index = i;
            }
          }
          selectedCity = props.cities[index].id;
          if (index === 0) { // for origin city
            props.updateDepartureDate(moment(values).format("ll"), selectedCity);
            selectedCity = props.cities[index + 1].id;
            props.changeSelectedCity(selectedCity);
            if (moment(props.cities[index].departureDate) > moment(props.cities[index+1].departureDate)) { // checks if departure date of origin city is later than departure date of next visited city
              for (let i = index + 1; i < props.cities.length; i++) {
                delete props.cities[i].departureDate;
              }
              cityNumber = index + 1
            }
            setState({...state, numberOfCities: cityNumber, lastDate: newDate["_d"]})
          } else if (index > 0 && moment(values).isAfter(moment(props.cities[index-1].departureDate)["_d"])) { // for every city after origin city excluding last visited city  
            props.updateDepartureDate(moment(values).format("ll"), selectedCity);
            if (props.cities[index + 1]){ //updates selected city
              selectedCity = props.cities[index + 1].id;
            }
            props.changeSelectedCity(selectedCity);
            if (props.cities[index + 1]){
              if (moment(props.cities[index].departureDate) > moment(props.cities[index+1].departureDate)) { // checks if departure date of current city is later than departure date of next visited city
                for (let i = index + 1; i < props.cities.length; i++) {
                  delete props.cities[i].departureDate;
                }
                cityNumber = index + 1
              }
            }
            setState({...state, numberOfCities: cityNumber, lastDate: newDate["_d"]})
          }
        }
      }
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5}>
        <Paper className={classes.paper}>
 
          {cityList}
         <div>
          <Button onClick={()=> reset()}> Reset </Button>
          </div>
        </Paper>
      </Grid>
      <Grid item sm={7} xs={12}>
        <Paper className={classes.paper}>
          {instructions()}
          <Calendar
            calendarType="US"
            minDate={new Date()}
            value={updateArrivingDate(props.city)}
            selectRange = {false}
            onChange={(value) => {onChange(value)}}
            tileClassName={(tile) => {
              let setActive = [];
              for (let i = 0; i < props.cities.length; i++) {
                if (i === 0 && tile.view === "month" && props.cities[i].departureDate === moment(tile.date).format("ll")){
                  setActive.push(classnames([`react-calendar__tiles-leavingOriginCity`]));
                } else if ( i > 0 && tile.view === "month" && props.cities[i].departureDate === moment(tile.date).format("ll") && props.cities[i].departureDate === moment(props.cities[i-1].departureDate).add(1, 'days').format("ll")) {
                  setActive.push(classnames([`react-calendar__tile-onlySelectedPrevious${i+1}`]))
                } else if ( i > 0 && tile.view === "month" && moment(props.cities[i].departureDate) >= moment(moment(tile.date).format("ll")) && moment(tile.date).format("ll") === moment(props.cities[i-1].departureDate).add(1, 'days').format("ll")) {
                  setActive.push(classnames([`react-calendar__tile-firstSelectedPrevious${i+1}`]))
                } else if ( i > 0 && tile.view === "month" && props.cities[i].departureDate === moment(tile.date).format("ll") && moment(moment(tile.date).format("ll")) > moment(props.cities[i-1].departureDate)) {
                  setActive.push(classnames([`react-calendar__tile-lastSelectedPrevious${i+1}`]))
                } else if ( i > 0 && tile.view === "month" && moment(props.cities[i].departureDate) >= moment(moment(tile.date).format("ll")) && moment(moment(tile.date).format("ll")) > moment(props.cities[i-1].departureDate)) {
                  setActive.push(classnames([`react-calendar__tile-selectedPrevious${i+1}`]))
                } 
              }
              return setActive
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  )

}


