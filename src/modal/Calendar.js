import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
import Calendar from 'react-calendar';
import './styles/calendar.css';
import moment from 'moment';
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
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
  }
}));

const classnames = require('classnames');

const getDates = function (startDate, stopDate) {
  let dateArray = [];
  let currentDate = moment(startDate);
  stopDate = moment(stopDate);
  while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate)["_d"].toDateString());
      currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
};

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
    if (city.name === props.city) {
      let index = 0;
      for (let i = 0; i < props.cities.length; i++) {
        if (props.cities[i].name === props.city) {
          index = i + 1;
        }
      }
      let selectedClass = classnames(classes.fab)
      switch (index) {
        case 1:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious1)
          if (props.travelDates.length !== props.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.name)}>
              {city.name}
            </Fab>
          )
        case 2:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious2)
          if (props.travelDates.length !== props.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.name)}>
              {city.name}
            </Fab>
          )
        case 3:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious3)
          if (props.travelDates.length !== props.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.name)}>
              {city.name}
            </Fab>
          )
        case 4:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious4)
          if (props.travelDates.length !== props.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.name)}>
              {city.name}
            </Fab>
          )
        case 5:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious5)
          if (props.travelDates.length !== props.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.name)}>
              {city.name}
            </Fab>
          )
        case 6:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious6)
          if (props.travelDates.length !== props.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.name)}>
              {city.name}
            </Fab>
          )
        default:
          selectedClass = classnames(classes.fab)
          if (props.travelDates.length !== props.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city.name}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.name)}>
              {city.name}
            </Fab>
          )
      }
    }
    let selectedClass = classnames(classes.fab)
    if (props.travelDates.length !== props.cities.length){
      return (
      <Fab variant="extended" className={selectedClass}>
        {city.name}
      </Fab>
      )
    }
    return (
      <Fab variant="extended" className={selectedClass} onClick= {() => props.changeSelectedCity(city.name)}>
        {city.name}
      </Fab>
    )
  });

  // Displays the number of days in certain city
  const numberOfDaysAtCity = props.cities.map((city) => {
    const index = props.cities.indexOf(city);
    let stayDuration = 0
    if (props.travelDates[index]) {
      let departureDate = props.travelDates[index].slice(-1)[0];
      stayDuration = props.travelDates[index].length;
    
      if (index === 0 && props.travelDates[index]) {
        return (
          <div>
            You are leaving {city} on the  {departureDate}
          </div>
        )
      }
      if (stayDuration === 1) {
        return (
          <div>
            You are staying at {city} for {stayDuration} day, you are leaving on {departureDate}
          </div>
        )
      }
      return (
        <div>
          You are staying at {city} for {stayDuration} days, you are leaving on {departureDate}
        </div>
      )
    }
    
    if (index === 0 ) {
      return (
        <div>
          You are leaving {city} on the 
        </div>
      )
    }

    return (
      <div>
        You are staying at {city} for {stayDuration} days
      </div>
    )
  })
  
  const updateArrivingDate = function(city) {
    let index = 0
    for (let i = 0; i < props.cities.length; i++) {
      if (props.cities[i].name === city) {
        index = i;
      }
    }
    
    if (index === 0 && props.travelDates[index]) {
      let departingDate = props.travelDates[index].slice(-1)[0];
      let departDate = moment(departingDate);
      let newDate = moment(departDate);
      return newDate["_d"]
    }

    if (!props.travelDates[index-1]) {
      return new Date()
    }

    
    let departingDate = props.travelDates[index-1].slice(-1)[0];
    let departDate = moment(departingDate);
    let newDate = moment(departDate).add(1, 'days');
    return newDate["_d"]
   
  }

  const updateDates = function(startDate, stopDate, selectedCity) {
    let index = 0
    for (let i = 0; i < props.cities.length; i++) {
      if (props.cities[i].name === selectedCity) {
        index = i;
      }
    }
    let currentDates = [...props.travelDates];
    let currentDate = moment(startDate);
    stopDate = moment(stopDate);
    if (currentDates[index+1]) {
      if(currentDates[index].includes(moment(stopDate)["_d"].toDateString())){
        let foundIndex = currentDates[index].indexOf(moment(stopDate)["_d"].toDateString());
        let joiningDates = currentDates[index].slice(foundIndex + 1, currentDates[index].length);
        let changedDates = currentDates[index].slice(0, foundIndex + 1);
        let updatedDates = joiningDates.concat(currentDates[index + 1]);
        currentDates[index] = changedDates;
        currentDates[index + 1] = updatedDates;
      } else if (currentDates[index + 1].includes(moment(stopDate)["_d"].toDateString())) {
        let foundIndex = currentDates[index + 1].indexOf(moment(stopDate)["_d"].toDateString());
        let joiningDates = currentDates[index + 1].slice(0, foundIndex + 1);
        let changedDates = currentDates[index + 1].slice(foundIndex + 1, currentDates[index + 1].length);
        let updatedDates = currentDates[index].concat(joiningDates);
        currentDates[index] = updatedDates;
        currentDates[index + 1] = changedDates;
      } else {
        currentDates[index] = [];
        while (currentDate <= stopDate) {
          currentDates[index].push(moment(currentDate)["_d"].toDateString());
          currentDate = moment(currentDate).add(1, 'days');
        }
        let newDates = currentDates.slice(0, index + 1);
        currentDates = newDates;
      }
    } else {
      let lastChosenDate = moment(currentDates[index - 1].slice(-1)[0]);
      while (currentDate <= lastChosenDate) {
        currentDate = moment(currentDate).add(1, 'days');
      }
      currentDates[index] = [];
      while (currentDate <= stopDate) {
        currentDates[index].push(moment(currentDate)["_d"].toDateString());
        currentDate = moment(currentDate).add(1, 'days');
      }
      let newDates = currentDates.slice(0, index + 1);
      currentDates = newDates;
    }
    
    return currentDates;
  }
  

  const onChange = (values) => {

    const arrivalDate = values[0];
    const departingDate = values[1];
    let dateArray = getDates(arrivalDate,departingDate);
    const newDate = setNewDate(departingDate);

    let newValues = props.travelDates.concat([dateArray]);
    let cityNumber = state.numberOfCities;
    
    if (state.numberOfCities < props.cities.length){
      cityNumber++;
      let selectedCity = "";
      if (cityNumber < props.cities.length){
        selectedCity = props.cities[cityNumber].name
      }
      if (cityNumber === props.cities.length) {
        selectedCity = props.cities[cityNumber - 1].name;
      }
      if (props.travelDates.length < props.cities.length && !(moment(departingDate).add(1, 'days').isSameOrBefore(state.lastDate)) && !(moment(arrivalDate).add(1, 'days').isSameOrBefore(state.lastDate))) {
        setState({...state, numberOfCities: cityNumber, lastDate: newDate["_d"]})
        props.updateTravelDates(newValues);
        props.changeSelectedCity(selectedCity);
      } 
    }

    if (state.numberOfCities === props.cities.length && props.city){
      let updatedDates = updateDates(arrivalDate, departingDate, props.city);
      let selectedCity = props.cities[updatedDates.length - 1].name;
      if (updatedDates.length !== props.cities.length) {
        cityNumber = updatedDates.length;
      } else {
        let index = 0;
        for (let i = 0; i < props.cities.length; i++) {
          if (props.cities[i].name === props.city) {
            index = i;
          }
        }
        selectedCity = props.cities[index].name;
      }
      setState({...state, numberOfCities: cityNumber, lastDate: newDate["_d"]})
      props.updateTravelDates(updateDates);
      props.changeSelectedCity(selectedCity);
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5}>
        <Paper className={classes.paper}>
          {cityList}
        </Paper>
      </Grid>
      <Grid item sm={7} xs={12}>
        <Paper className={classes.paper}>
          <Calendar
            calendarType="US"
            minDate={new Date()}
            selectRange={true}
            value={updateArrivingDate(props.city)}
            onChange={(value) => {onChange(value)}}
            tileClassName={(tile) => {
              let setActive = [];
              for (let i = 0; (i < props.travelDates.length) && (i < 6); i++) {
                if (i === 0 && tile.view === "month" && props.travelDates[i].indexOf(tile.date.toDateString()) === (props.travelDates[i].length -1)){
                  setActive.push(classnames([`react-calendar__tiles-leavingOriginCity`]));
                }  else if (tile.view === "month" && props.travelDates[i].includes(tile.date.toDateString()) && (props.travelDates[i].indexOf(tile.date.toDateString()) === 0) && props.travelDates[i].length === 1) {
                  setActive.push(classnames([`react-calendar__tile-onlySelectedPrevious${i+1}`]))
                } else if (tile.view === "month" && props.travelDates[i].includes(tile.date.toDateString()) && props.travelDates[i].indexOf(tile.date.toDateString()) === 0) {
                  setActive.push(classnames([`react-calendar__tile-firstSelectedPrevious${i+1}`]))
                } else if (tile.view === "month" && props.travelDates[i].includes(tile.date.toDateString()) && props.travelDates[i].indexOf(tile.date.toDateString()) === (props.travelDates[i].length - 1)) {
                  setActive.push(classnames([`react-calendar__tile-lastSelectedPrevious${i+1}`])) 
                } else if (tile.view === "month" && props.travelDates[i].includes(tile.date.toDateString())) {
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