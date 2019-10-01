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
    background: '#255525',
  },
  reactCalendarTileSelectedPrevious2: {
    background: '#559364',
  },
  reactCalendarTileSelectedPrevious3: {
    background: '#016367',
  },
  reactCalendarTileSelectedPrevious4: {
    background: '#44af92',
  },
  reactCalendarTileSelectedPrevious5: {
    background: '#9fedd4',
  },
  reactCalendarTileSelectedPrevious6: {
    background: '#d6dfc2',
  }
}));


const classnames = require('classnames');

const cities = [
  "Calgary", "Edmonton", "Toronto", "Montreal"
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
          console.log("in default")
          console.log(index);
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
  })
  
  const onChange = (values) => {
    const arrivalDate = values[0];
    const departingDate = values[1];

    console.log("departing date", departingDate);
    console.log("arriving date", arrivalDate);
    console.log("state.lastDate", state.lastDate);
    console.log("departingDate before lastDate", moment(departingDate).add(1, 'days').isSameOrBefore(state.lastDate));
    console.log("arrivingDate before lastDate", moment(arrivalDate).add(1, 'days').isSameOrBefore(state.lastDate));
    const dateArray = getDates(arrivalDate,departingDate);
    const newDate = setNewDate(departingDate);
    let newValues = state.values.concat([dateArray]);
    let cityNumber = state.numberOfCities + 1;
    if (state.values.length < state.cities.length && !(moment(departingDate).add(1, 'days').isSameOrBefore(state.lastDate)) && !(moment(arrivalDate).add(1, 'days').isSameOrBefore(state.lastDate))) {
      setState({...state, values: newValues, numberOfCities: cityNumber, firstDate: arrivalDate, lastDate: newDate["_d"]})
    } 
  }

  return (
    <section>
      {cityList}
      <Calendar
        calendarType="US"
        minDate={new Date()}
        value = {state.lastDate}
        selectRange={true}
        onChange={(value) => {onChange(value)}}
        tileClassName={(tile) => {
          let setActive = [];
          for (let i = 0; (i< state.values.length) && (i < 6); i++) {
            if (tile.view === "month" && state.values[i].includes(tile.date.toDateString()) && state.values[i].indexOf(tile.date.toDateString()) === 0) {
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