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

function getSteps() {
  return ['Select Destinations', 'Select Dates', 'Select Flights'];
}

function getStepContent(step) {
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
      return {...state, step: 0};
    case ADD_CITY:
      if(state.routes.length !== 6){
        const id = getNextAvailableId(action.routes);
        const newCity = action.city;
        newCity.id = id;
        let currentRoutes = [...action.routes];
        let currentKey = state.key;
        let newRoutes = currentRoutes.concat([newCity]);
        return {...state, routes: newRoutes, key: currentKey + 1}
      }
      return {...state}
    case DELETE_CITY:
      let arr = [...state.routes]
      arr.splice(action.index,1)
      return {...state, routes: arr, key: (state.key + 1)}
    case ON_DRAG_END:
      if (!action.result.destination) {
        return;
      }
  
      if (action.result.destination.index === action.result.source.index) {
        return;
      }
  
      const routes = reorder(
        state.routes,
        action.result.source.index,
        action.result.destination.index
      );
  
      return {...state, routes, key : (state.key + 1)}
    default:
      return state;
  }
}

export default function(props) {

  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, {
    step: 0,
    routes: [],
    key: 1
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

  const steps = getSteps();

  const currentDisplay  = function(){
    if (state.step === 0) {
      return (<ModalFirstPage routes = {state.routes} key={state.key} addCity={addCity} deleteCity={deleteCity} onDragEnd={onDragEnd}></ModalFirstPage>)
    } else if (state.step === 1) {
      return (<ModalSecondPage></ModalSecondPage>)
    } else if (state.step === 2) {
      return (<ModalLastPage></ModalLastPage>)
    }
  }

  return (
    <Modal className={classes.modal} open={props.open} onClose={props.closeModal}>
        <Grid container className={classes.container} spacing={3}>
          <Grid item xs={12}>
            <ModalNav steps={steps} activeStep={state.step} className={classes.nav}></ModalNav>
          </Grid>
          <Grid item xs={12}>
            {currentDisplay()}
          </Grid>
          <Grid item xs={12}>
            <div>
              {state.step === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={() => dispatch({type: HANDLE_RESET})} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
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
                      {state.step === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
    </Modal>
  );
}
