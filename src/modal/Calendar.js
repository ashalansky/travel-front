import React from "react";
import Calendar from "react-calendar";
import "./styles/calendar.css";
const classNames = require('classnames');

const cities = [
  "Calgary", "Edmonton", "Toronto"
]

export default function calendar(props) {
  let state = {
    cities: cities,
    values: [],
    city: "Calgary"

  }

  const onChange = (values) => {
    console.log(typeof values)
    state.values = state.values.concat([values])
    values = state.values.map(value => {
      console.log(value)
      return value
    });
    return values
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
        onClickDay={(value) => console.log('Clicked day: ', value)}
        tileClassName={(tile) => {
          console.log(tile)
          let newTiles = state.values.map((value) => {
            return value
          })
          console.log(newTiles)
        }}
      />
    </section>
  )

}