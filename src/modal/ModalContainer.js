import React, {  useReducer } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import ModalFirstPage from "./ModalLayout"
import ModalSecondPage from "./Calendar"
import ModalLastPage from "./FlightComp"
import ModalNav from "./Nav";
import { Grid, Button, Typography } from "@material-ui/core";
import { Redirect } from 'react-router';
const axios = require("axios");

const HANDLE_NEXT = "HANDLE_NEXT";
const HANDLE_BACK = "HANDLE_BACK";
const HANDLE_RESET = "HANDLE_RESET";
const ADD_CITY = "ADD_CITY";
const DELETE_CITY = "DELETE_CITY";
const ON_DRAG_END = "ON_DRAG_END";
const CHANGE_SELECTED_CITY = "CHANGE_SELECTED_CITY";
const UPDATE_TRAVEL_DATES = "UPDATE_TRAVEL_DATES";
const UPDATE_DEPARTURE_DATE = "UPDATE_DEPARTURE_DATE";
const UPDATE_CITY_CODE = "UPDATE_CITY_CODE";
const UPDATE_FLIGHT_PLAN = "UPDATE_FLIGHT_PLAN";
const SELECT_FLIGHT_PLAN = "SELECT_FLIGHT_PLAN"
const SET_PASSENGER = "SET_PASSENGER";
const FINISH_PLAN = "FINISH_PLAN";
const RESET_FLIGHT_PLANS = "RESET_FLIGHT_PLANS";
const SET_TRIP_NAME = "SET_TRIP_NAME";
const CLEAR_URL = "CLEAR_URL";

const useStyles = makeStyles({
 modal: {
   width: "90%",
   height: "95%",
   margin: "auto",
   background: "white",
   borderColor: '#a5a0aa',
   
 },
 div: {
  textAlign: 'center',
  },
  container: {
    backgroundColor: "#FFF",
    borderRadius: "5px",
    fontFamily: 'Ubuntu'
  },
  instructions: {
    justifyContent: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '1.2em'
  },
  nav: {
    fontSize: '1.2em'
  }
});

const getSteps = function () {
  return ['Select Destinations', 'Select Dates', 'Select Flights'];
}

const getStepContent = function (step) {
  switch (step) {
    case 0:
      return 'Select Destinations';
    case 1:
      return 'Select Dates';
    case 2:
      return 'Select Flights';
    default:
      return 'Unknown step';
  }
}

const getNextAvailableId = function(routesArr) {
  //Hardcoded for six possible spots

  const arr = [-1, 0, 0, 0, 0, 0, 0];
  if (routesArr.length < 6) {
    for (let i = 0; i < routesArr.length; i++) {
      arr[routesArr[i].id] = routesArr[i].id;
    }

    for (let j = 1; j < arr.length; j++) {
      if (arr[j] <= 0) {
        return j;
      }
    }
  }
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const reducer = function(state, action) {
  switch (action.type) {
    case HANDLE_NEXT:
      let oldStep = action.step;
      let newStep = oldStep + 1;
      return {...state, step: newStep};
    case HANDLE_BACK:
      let currentStep = action.step;
      let updateStep = currentStep - 1;
      return {...state, step: updateStep};
    case HANDLE_RESET:
      return {
        step: 0,
        routes: [],
        key: 1
      };
    case ADD_CITY:
      if(state.routes.length !== 6){
        const id = getNextAvailableId(action.routes);
        const newCity = action.city;
        newCity.id = id;
        let currentRoutes = [...action.routes];
        let currentKey = state.key;
        let newRoutes = currentRoutes.concat([newCity]);
        return {...state, routes: newRoutes, key: currentKey + 1, selectedCity: newRoutes[0].id}
      }
      return {...state}
    case DELETE_CITY:
      let arr = [...state.routes]
      if (arr.length === 1) {
        arr.splice(action.index,1)
        return {...state, routes: arr, key: (state.key + 1), selectedCity: null}
      } else {
        arr.splice(action.index,1)
        return {...state, routes: arr, key: (state.key + 1)}
      }
    case ON_DRAG_END:
      if (!action.result.destination) {
        return {...state};
      }
  
      if (action.result.destination.index === action.result.source.index) {
        return {...state};
      }
  
      const routes = reorder(
        state.routes,
        action.result.source.index,
        action.result.destination.index
      );
  
      return {...state, routes, key : (state.key + 1), selectedCity: routes[0].name}

    case CHANGE_SELECTED_CITY:
      return {...state, selectedCity: action.city}
    case UPDATE_TRAVEL_DATES:
      return {...state, travelDates: action.travelDates}
    case UPDATE_DEPARTURE_DATE:
      let updatedRoutesInformation = [...state.routes]
      for (let i = 0; i < updatedRoutesInformation.length; i++) {
        if (updatedRoutesInformation[i].id === action.selectedCity) {
          updatedRoutesInformation[i]["departureDate"] = action.departureDate;
        }
      }
      return {...state, routes: updatedRoutesInformation}
    case UPDATE_CITY_CODE:
      
      let newCityCodeInformation = [...state.routes]
      for (let i = 0; i < newCityCodeInformation.length; i++) {
        if (newCityCodeInformation[i].name.toLowerCase() === action.cityName) {
          newCityCodeInformation[i]["cityCode"] = action.cityCode;
        }
      }
      return {...state, routes: newCityCodeInformation}
    case UPDATE_FLIGHT_PLAN:
      let generatedFlightPlans = [...state.flightPlans];
      let newUrls = [...state.urls];
      newUrls.push(action.url);
      generatedFlightPlans.push(action.flightPlans)
      return {...state, flightPlans: generatedFlightPlans, urls: newUrls}
    case SELECT_FLIGHT_PLAN:
      let updatedFlightPlans = {...state.selectedFlightPlans};
      let flightUrls = [...state.urls];
      flightUrls[action.index - 1] += `;fl=${action.selectedFlight.routing_idens[0]}`;
      updatedFlightPlans[action.cityCode] = action.selectedFlight
      return {...state, selectedFlightPlans: updatedFlightPlans, urls: flightUrls}
    case SET_PASSENGER:
      let numberOfPassengers = action.adults + action.children + action.infants;
      return {...state, numberOfPassengers}
    case RESET_FLIGHT_PLANS:
      return {...state, flightPlans: [], selectedFlightPlans: {}}
    case FINISH_PLAN:
      axios.post(process.env.REACT_APP_API_BASE_URL+"trips/trip", {cityInformation: state.routes, name: state.name, flightInformation: state.selectedFlightPlans, userId: action.userId, passengers: action.passengers, url: state.urls})
      return {...state, finished: true} 
    case SET_TRIP_NAME:
      return {...state, name: action.name}
    case CLEAR_URL:
      return {...state, urls: []}
    default:
      return {...state};
  }
}

export default function(props) {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, {
    step: 0,
    routes: [],
    key: 1,
    selectedCity: 0,
    flightPlans: [],
    selectedFlightPlans: {},
    numberOfPassengers: 0,
    name:"",
    finished: false,
    urls: []
  })

  if (state.finished) {
   
    return <Redirect to="/mytrips"/>
  }

  const addCity = function(city) {
    dispatch({ type: ADD_CITY, routes: state.routes, city})
   };
 
   const deleteCity = function(index){
     dispatch({ type: DELETE_CITY, index})
   }
 
   const onDragEnd = function (result) {
     dispatch({ type: ON_DRAG_END, result})
   }

   const changeSelectedCity = function (cityName) {
    dispatch({ type:CHANGE_SELECTED_CITY, city: cityName });
  }

  const updateTravelDates = function (travelDates) {
    dispatch({ type: UPDATE_TRAVEL_DATES, travelDates})
  }

  const updateDepartureDate = function (departureDate, selectedCity) {
    dispatch({ type: UPDATE_DEPARTURE_DATE, departureDate, selectedCity})
  }

  const updateCityCode = function (cityName, cityCode) {
    dispatch({ type: UPDATE_CITY_CODE, cityName, cityCode});
  }

  const updateFlightPlans = function (flightPlans, url) {
    dispatch( {type: UPDATE_FLIGHT_PLAN, flightPlans, url})
  }

  const selectFlightPlan = function (selectedFlight, cityCode, index) {
    dispatch( {type:SELECT_FLIGHT_PLAN, selectedFlight, cityCode, index})
  }

  const finishedPlan = function() {

    dispatch({ type: FINISH_PLAN, userId: props.userId, passengers: state.numberOfPassengers })
   
  }

  const setPassenger = function(adults, children, infants) {
    dispatch({ type: SET_PASSENGER, adults, children, infants})
  }

  const flightReset = function() {
    dispatch({ type: RESET_FLIGHT_PLANS })
  }

  const setTripName = function(name) {
    dispatch({ type:SET_TRIP_NAME, name})
  }

  const clearUrls = function() {
    dispatch({ type:CLEAR_URL})
  }

  const steps = getSteps();

  const currentDisplay  = function(){
    if (state.step === 0) {
      return (<ModalFirstPage routes = {state.routes} key={state.key} addCity={addCity} deleteCity={deleteCity} onDragEnd={onDragEnd} setTripName={setTripName} name={state.name}></ModalFirstPage>)
    } else if (state.step === 1) {
      return (<ModalSecondPage cities = {state.routes} city = {state.selectedCity} travelDates={state.travelDates} changeSelectedCity={changeSelectedCity} updateTravelDates={updateTravelDates} updateDepartureDate={updateDepartureDate}></ModalSecondPage>)
    } else if (state.step === 2) {
      return (<ModalLastPage cities = {state.routes} flightPlans={state.flightPlans} selectedFlightPlan={state.selectedFlightPlans} updateCityCode={updateCityCode} updateFlightPlans={updateFlightPlans} selectFlightPlan={selectFlightPlan} setPassenger={setPassenger} resetFlightPlans={flightReset} clearUrls={clearUrls}></ModalLastPage>)
    }
  }

  const departureDateCheck = function () {
    let counter = 0;
    for (let i =0; i < state.routes.length - 1; i++) {
      if (state.routes[i].departureDate) {
        counter ++
      }
    }
    if (counter === state.routes.length -1 ) {
      return true
    } else {
      return false
    }
    
  }

  const navBarDisplay = function() {
    if (state.step === 0) {
      return (state.routes.length >= 2 ? (
        <div className={classes.div}>
          <Typography className={classes.instructions}>{getStepContent(state.step)}</Typography>
          <div>
            <Button disabled={state.step === 0} onClick={() => dispatch({type: HANDLE_BACK, step: state.step})} className={classes.button}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch({type: HANDLE_NEXT, step: state.step})}
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className={classes.div}>
          <Typography className={classes.instructions}>{getStepContent(state.step)}</Typography>
          <div>
            <Button disabled={state.step === 0} onClick={() => dispatch({type: HANDLE_BACK, step: state.step})} className={classes.button}>
              Back
            </Button>
            <Button disabled={state.routes.length < 2}> Next </Button>
          </div>
        </div>
      ))
    } else if (state.step === 1) {
      return (
       departureDateCheck() ? (
          <div className={classes.div}>
            <Typography className={classes.instructions}>{getStepContent(state.step)}</Typography>
            <div>
              <Button disabled={state.step === 0} onClick={() => dispatch({type: HANDLE_BACK, step: state.step})} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch({type: HANDLE_NEXT, step: state.step})}
                className={classes.button}
              >
                Next
              </Button>
            </div>
          </div>
        ) : (
          <div className={classes.div}>
            <Typography className={classes.instructions}>{getStepContent(state.step)}</Typography>
            <div>
              <Button disabled={state.step === 0} onClick={() => dispatch({type: HANDLE_BACK, step: state.step})} className={classes.button}>
                Back
              </Button>
              <Button disabled={true}> Next </Button>
            </div>
          </div>
        )
      )
    } else if (state.step === 2) {
      if (typeof state.selectedFlightPlans === "object") {
        return ((state.routes.length-1) === Object.keys(state.selectedFlightPlans).length ? (
          <div className={classes.div}>
            <Typography className={classes.instructions}>{getStepContent(state.step)}</Typography>
            <div>
              <Button disabled={state.step === 0} onClick={() => dispatch({type: HANDLE_BACK, step: state.step})} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => finishedPlan()}
                className={classes.button}
              >
                Finish
              </Button>
            </div>
          </div>
        ) : (
          <div className={classes.div}>
            <Typography className={classes.instructions}>{getStepContent(state.step)}</Typography>
            <div>
              <Button disabled={state.step === 0} onClick={() => dispatch({type: HANDLE_BACK, step: state.step})} className={classes.button}>
                Back
              </Button>
              <Button disabled={true}> Finish </Button>
            </div>
          </div>
        ))
      } else {
        return (
          <div className={classes.div}>
            <Typography className={classes.instructions}>{getStepContent(state.step)}</Typography>
            <div>
              <Button disabled={state.step === 0} onClick={() => dispatch({type: HANDLE_BACK, step: state.step})} className={classes.button}>
                Back
              </Button>
              <Button disabled={true}> Finish </Button>
            </div>
          </div>
        )
      }
    }
  }

  const closeAndReset = function(){
    props.closeModal();
    dispatch({ type: HANDLE_RESET})
  }

  return (
    <Modal className={classes.modal} open={props.open} onClose={closeAndReset}>
        <Grid container className={classes.container} spacing={3}>
          <Grid item xs={12}>
            <ModalNav steps={steps} activeStep={state.step} className={classes.nav}></ModalNav>
          </Grid>
          <Grid item xs={12}>
            {currentDisplay()}
          </Grid>
          <Grid item xs={12}>
            <div>
              {navBarDisplay()}
            </div>
          </Grid>
        </Grid>
    </Modal>
  );
}
