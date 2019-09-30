import React from "react";
import Calendar from "react-calendar";

export default function calendar(props) {

  return (
    <Calendar
      calendarType="US"
      minDate={new Date()}
      returnValue="range"
      selectRange="true"
    />
  )

}