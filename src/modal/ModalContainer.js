import React, {  useReducer } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import ModalFirstPage from "./ModalLayout"
import ModalSecondPage from "./Calendar"
import ModalLastPage from "./FlightComp"
import ModalNav from "./Nav";
import { Grid, Button, Typography } from "@material-ui/core";

const HANDLE_NEXT = "HANDLE_NEXT";
const HANDLE_BACK = "HANDLE_BACK";
const HANDLE_RESET = "HANDLE_RESET";
const ADD_CITY = "ADD_CITY";
const DELETE_CITY = "DELETE_CITY";
const ON_DRAG_END = "ON_DRAG_END"
const CHANGE_SELECTED_CITY = "CHANGE_SELECTED_CITY"
const UPDATE_TRAVEL_DATES = "UPDATE_TRAVEL_DATES"
const UPDATE_DEPARTURE_DATE = "UPDATE_DEPARTURE_DATE"

const useStyles = makeStyles({
 modal: {
   width: "90%",
   height: "95%",
   margin: "auto",
   background: "white"
 },
 div: {
  textAlign: 'center',
  },
  container: {
    backgroundColor: "#FFF",
    borderRadius: "5px",
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
        return {...state, routes: newRoutes, key: currentKey + 1, selectedCity: newRoutes[0].name}
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
        if (updatedRoutesInformation[i].name === action.selectedCity) {
          updatedRoutesInformation[i]["departureDate"] = action.departureDate;
        }
      }
      return {...state, routes: updatedRoutesInformation}
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
    selectedCity: "",
    travelDates : []
  })

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

  const steps = getSteps();

  const currentDisplay  = function(){
    if (state.step === 0) {
      return (<ModalFirstPage routes = {state.routes} key={state.key} addCity={addCity} deleteCity={deleteCity} onDragEnd={onDragEnd}></ModalFirstPage>)
    } else if (state.step === 1) {
      return (<ModalSecondPage cities = {state.routes} city = {state.selectedCity} travelDates = {state.travelDates} changeSelectedCity={changeSelectedCity} updateTravelDates={updateTravelDates} updateDepartureDate={updateDepartureDate}></ModalSecondPage>)
    } else if (state.step === 2) {
      return (<ModalLastPage cities = {state.routes} city = {state.selectedCity}></ModalLastPage>)
    }
  }

  const departureDateCheck = function () {
    let counter = 0;
    for (let route of state.routes) {
      if (route.departureDate) {
        counter ++
      }
    }
    if (counter === state.routes.length) {
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
              Finished
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
            <Button disabled={state.routes.length < 2}> Finished </Button>
          </div>
        </div>
      ))
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
