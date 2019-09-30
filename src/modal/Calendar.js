import React, { useState } from 'react';
import Calendar from "react-calendar";
import "./styles/calendar.css";
import moment from 'moment';
const classnames = require('classnames');

const cities = [
  "Calgary", "Edmonton", "Toronto"
]

const colors = [

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

export default function CalendarComponent(props) {
  const [state, setState] = useState({
    cities: cities,
    values: [],
    city: "Calgary",
    numberOfCities: 0
  })
  
  const onChange = (values) => {
    
    const dateArray = getDates(values[0],values[1]);

    let newValues = state.values.concat([dateArray]);
    let cityNumber = state.numberOfCities + 1;
    console.log(cityNumber);
    setState({...state, values: newValues, numberOfCities: cityNumber})
  }

  const cityList = cities.map(city => {

    return (
      city
    )

  })

  return (
    <section>
      {cityList}
      <Calendar
        calendarType="US"
        minDate={new Date()}
        selectRange={true}
        onChange={(value) => {onChange(value)}}
        tileClassName={(tile) => {
          let setActive = state.values.map((value) => {
            if (tile.view === "month" && value.includes(tile.date.toDateString())) {
              return classnames([`react-calendar__tile-selectedPrevious${state.numberOfCities}`])
            } else {
              return "react-calendar__tile"
            }
          })
          return setActive
        }}
      />
    </section>
  )

}