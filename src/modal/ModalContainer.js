import React, { useState, useReducer } from "react";
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
    default:
      return state;
  }
}

export default function(props) {

  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, {
    step: 0,
    cities: [],
    key: 1
  })

  const steps = getSteps();

  const currentDisplay  = function(){
    if (state.step === 0) {
      return (<ModalFirstPage routes = {state.cities} key={state.keys}></ModalFirstPage>)
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
