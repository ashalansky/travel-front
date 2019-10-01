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
    background: '#4DD0E1',
  },
  reactCalendarTileSelectedPrevious3: {
    background: '#4DB6AC',
  },
  reactCalendarTileSelectedPrevious4: {
    background: '#81C784',
  },
  reactCalendarTileSelectedPrevious5: {
    background: '#AED581',
  },
  reactCalendarTileSelectedPrevious6: {
    background: '#7986CB',
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
    firstDate: new Date(),
    lastDate: new Date(),
    city: cities[0],
  });

  const changeSelectedCity = function (cityName) {
    setState({...state, city: cityName});
  }

  const cityList = state.cities.map((city) => {
    if (city === state.city) {
      const index = state.cities.indexOf(city) + 1;
      let selectedClass = classnames(classes.fab)
      switch (index) {
        case 1:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious1)
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 2:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious2)
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 3:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious3)
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 4:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious4)
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 5:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious5)
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        case 6:
          selectedClass = classnames(classes.fab, classes.reactCalendarTileSelectedPrevious6)
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
        default:
          selectedClass = classnames(classes.fab)
          return (
            <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
              {city}
            </Fab>
          )
      }
    }
    let selectedClass = classnames(classes.fab)
    return (
      <Fab variant="extended" className={selectedClass} onClick= {() => changeSelectedCity(city)}>
        {city}
      </Fab>
    )
  });

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
  
  const onChange = (values) => {

    const arrivalDate = values[0];
    const departingDate = values[1];
    const dateArray = getDates(arrivalDate,departingDate);
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
        setState({...state, values: newValues, numberOfCities: cityNumber, firstDate: arrivalDate, lastDate: newDate["_d"], city: selectedCity})
      } 
    }
  }

  return (
    <section>
      {cityList}
      <p>
        when would you like to leave {state.city}
      </p>
      <Calendar
        calendarType="US"
        minDate={new Date()}
        selectRange={true}
        value={state.lastDate}
        onChange={(value) => {onChange(value)}}
        tileClassName={(tile) => {
          let setActive = [];
          if ((moment(tile.date).add(1, 'days').isSameOrBefore(state.lastDate))) {
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
          }
          return setActive
        }}
      />
      {numberOfDaysAtCity}
    </section>
  )

}