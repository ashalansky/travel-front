import React from 'react';
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  grid: {
    width: '40%',
    justify: "center",
    margin: 'auto'
  },
  paper: {
    padding: 30,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    alignItems: 'center',
    boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);',
    fontFamily: 'Ubuntu'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
      <Grid className={classes.grid} noValidate autoComplete="off">
        <Paper className={classes.paper}>
          <div>
            <TextField variant='outlined' placeholder='Email'> 
            </TextField>
          </div>
          <div>
            <TextField variant='outlined' placeholder='Password'>
            </TextField>
          </div>
          <Button variant="contained" color="primary" className={classes.button}>
            Login
          </Button>
        </Paper>
      </Grid>
  )
}