import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    justifyContent: 'center',
    fontFamily: 'Ubuntu'
  },
  div: {
    textAlign: 'center',
  },
  font: {
    fontFamily: 'Ubuntu',
  }
}));

export default function ModalNav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper className={classes.font}activeStep={props.activeStep}>
        {props.steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel className={classes.font}{...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}