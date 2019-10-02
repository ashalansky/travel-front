import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  }
}));


const classnames = require('classnames');

const cities = [
  "Calgary", "Edmonton", "Toronto", "Montreal", "Kelowna", " Vancouver" 
]

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
    cities: cities,
    values: [],
    numberOfCities: 0,
    lastDate: new Date(),
    city: cities[0],
  });

  //Changes selected city
  const changeSelectedCity = function (cityName) {
    setState({...state, city: cityName});
  }

  // Creates list of cities
  const cityList = state.cities.map((city) => {
    if (city === state.city) {
      const index = state.cities.indexOf(city) + 1;
      let selectedClass = classnames(classes.fab)
      switch (index) {
        case 1:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious1)
          if (state.values.length !== state.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 2:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious2)
          if (state.values.length !== state.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 3:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious3)
          if (state.values.length !== state.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 4:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious4)
          if (state.values.length !== state.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 5:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious5)
          if (state.values.length !== state.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 6:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious6)
          if (state.values.length !== state.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        default:
          selectedClass = classnames(classes.fab)
          if (state.values.length !== state.cities.length){
            return (
            <Fab variant="extended" className={selectedClass}>
              {city}
            </Fab>
            )
          }
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
      }
    }
    let selectedClass = classnames(classes.fab)
    if (state.values.length !== state.cities.length){
      return (
      <Fab variant="extended" className={selectedClass}>
        {city}
      </Fab>
      )
    }
    return (
      <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
        {city}
      </Fab>
    )
  });

  // Displays the number of days in certain city
  const numberOfDaysAtCity = state.cities.map((city) => {
    const index = state.cities.indexOf(city);
    let stayDuration = 0
    if (state.values[index]) {
      let departureDate = state.values[index].slice(-1)[0];
      stayDuration = state.values[index].length;
    
      if (index === 0 && state.values[index]) {
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
    let index = state.cities.indexOf(city);
    if (index === 0 && state.values[index]) {
      let departingDate = state.values[index].slice(-1)[0];
      let departDate = moment(departingDate);
      let newDate = moment(departDate);
      return newDate["_d"]
    }

    if (!state.values[index-1]) {
      return new Date()
    }

    
    let departingDate = state.values[index-1].slice(-1)[0];
    let departDate = moment(departingDate);
    let newDate = moment(departDate).add(1, 'days');
    return newDate["_d"]
   
  }

  const updateDates = function(startDate, stopDate, selectedCity) {
    let index = state.cities.indexOf(selectedCity);
    let currentDates = [...state.values];
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

    let newValues = state.values.concat([dateArray]);
    let cityNumber = state.numberOfCities;
    
    if (state.numberOfCities < state.cities.length){
      cityNumber++;
      let selectedCity = state.cities[cityNumber];
      if (cityNumber === state.cities.length) {
        selectedCity = state.cities[cityNumber - 1];
      }
      if (state.values.length < state.cities.length && !(moment(departingDate).add(1, 'days').isSameOrBefore(state.lastDate)) && !(moment(arrivalDate).add(1, 'days').isSameOrBefore(state.lastDate))) {
        setState({...state, values: newValues, numberOfCities: cityNumber, lastDate: newDate["_d"], city: selectedCity})
      } 
    }

    if (state.numberOfCities === state.cities.length && state.city){
      let updatedDates = updateDates(arrivalDate, departingDate, state.city);
      let selectedCity = state.cities[updatedDates.length];
      if (updatedDates.length !== state.cities.length) {
        cityNumber = updatedDates.length;
      } else {
        let index = state.cities.indexOf(state.city);
        selectedCity = state.cities[index];
      }
      setState({...state, values: updatedDates, numberOfCities: cityNumber, lastDate: newDate["_d"], city: selectedCity})
    }
  }

  return (
    <section>
      {cityList}
      <Calendar
        calendarType="US"
        minDate={new Date()}
        selectRange={true}
        value={updateArrivingDate(state.city)}
        onChange={(value) => {onChange(value)}}
        tileClassName={(tile) => {
          let setActive = [];
          for (let i = 0; (i< state.values.length) && (i < 6); i++) {
            if (i === 0 && tile.view === "month" && state.values[i].indexOf(tile.date.toDateString()) === (state.values[i].length -1)){
              setActive.push(classnames([`react-calendar__tiles-leavingOriginCity`]));
            }  else if (tile.view === "month" && state.values[i].includes(tile.date.toDateString()) && (state.values[i].indexOf(tile.date.toDateString()) === 0) && state.values[i].length === 1) {
              setActive.push(classnames([`react-calendar__tile-onlySelectedPrevious${i+1}`]))
            } else if (tile.view === "month" && state.values[i].includes(tile.date.toDateString()) && state.values[i].indexOf(tile.date.toDateString()) === 0) {
              setActive.push(classnames([`react-calendar__tile-firstSelectedPrevious${i+1}`]))
            } else if (tile.view === "month" && state.values[i].includes(tile.date.toDateString()) && state.values[i].indexOf(tile.date.toDateString()) === (state.values[i].length - 1)) {
              setActive.push(classnames([`react-calendar__tile-lastSelectedPrevious${i+1}`])) 
            } else if (tile.view === "month" && state.values[i].includes(tile.date.toDateString())) {
              setActive.push(classnames([`react-calendar__tile-selectedPrevious${i+1}`]))
            }
          }
          return setActive
        }}
      />
    </section>
  )

}