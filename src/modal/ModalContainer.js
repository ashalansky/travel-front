import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import ModalFirstPage from "./ModalLayout"
import ModalSecondPage from "./Calendar"
import ModalLastPage from "./FlightComp"
import ModalNav from "./Nav";
import { Grid, Paper, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles({
 modal: {
   width: "80%",
   height: "80%",
   padding: "5% 5% 10% 10%"
 },
 div: {
  textAlign: 'center',
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

export default function(props) {

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const classes = useStyles();
  return (
    <Modal className={classes.modal} open={props.open} onClose={props.closeModal}>
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ModalNav className={classes.nav}></ModalNav>
          </Grid>
          <Grid item xs={12}>
            <ModalFirstPage></ModalFirstPage>
          </Grid>
          {/* <Grid item xs={12}>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div className={classes.div}>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Grid> */}
        </Grid>
      </Paper>
    </Modal>
  );
}
