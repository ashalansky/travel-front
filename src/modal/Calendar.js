import React from "react";
import Calendar from "react-calendar";
import "./styles/calendar.css";

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
    console.log(values)
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
        selectRange="true"
        onClick = {(value) => alert('New date is: ', value)}
      />
    </section>
  )

}