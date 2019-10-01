import React, { useState } from 'react';
import Calendar from "react-calendar";
import "./styles/calendar.css";
import moment from 'moment';
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
  const [state, setState] = useState({
    values: [],
    numberOfCities: 0,
    firstDate: new Date(),
    lastDate: new Date(),
  })
  
  const onChange = (values) => {
    const arrivalDate = values[0];
    const departingDate = values[1];
    const dateArray = getDates(arrivalDate,departingDate);
    const newDate = setNewDate(departingDate);
    console.log(newDate);
    
    let newValues = state.values.concat([dateArray]);
    let cityNumber = state.numberOfCities + 1;
    if (state.values.length < 6) {
      setState({...state, values: newValues, numberOfCities: cityNumber, firstDate: arrivalDate, lastDate: newDate["_d"]})
    } else {
      setState({...state, values: newValues, numberOfCities: cityNumber})
    }

  }

  return (
    <section>
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