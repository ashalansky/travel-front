import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CityComp from './CityComp'
import Calendar from './Calendar'
import FlightComp from './FlightComp'

const useStyles = makeStyles(theme => ({

}))


export default function FirstStep (props) {
  let state = {
    step: 1,
    city: ''
  }

  const { step } = state;
  const { city } = state;
  const values = { city }

    // Proceed to next step
    const nextStep = () => {
      // const { step } = state;
      setState({
        step: step + 1
      });
    }
    
    // Go back to prev step
    const prevStep = () => {
      // const { step } = state;
      setState({
        step: step - 1
      });
    }
    
    // Handle fields change
    const handleChange = input => e => {
      this.setState({[input]: e.target.value});
    }

  switch(state.step) {
    case 1:
      return (
        <CityComp
        nextStep={nextStep}
        handleChange={handleChange}
        values={values}
        />
      )
    case 2:
      return (
        <Calendar 
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={values}
        />
      )
    case 3:
      return (
        <FlightComp 
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={values}
        />
      )
    case 4:
      return (
        <h1>Successfully saved to your plans!</h1>
      )
  }
  
}