import React from 'react';
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  grid: {
    width: '50%',
    margin: 'auto'
  },
  paper: {
    padding: 30,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    alignItems: 'center',
    boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);',
    fontFamily: 'Ubuntu',
    width: '70%',
    borderRadius: 5
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    margin: theme.spacing(1),
    width: '70%',
    fontFamily: 'Ubuntu'
  },
  title: {
    flexGrow: 1,
    margin: theme.spacing(1),
    fontFamily: 'Ubuntu'
  },
  button: {
    margin: theme.spacing(2),
    fontFamily: 'Ubuntu'
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
      <Grid 
        container 
        spacing={0} 
        direction="column"
        alignItems="center"
        justify="center"
        style={{minHeight: '100vh'}}
        className={classes.grid} noValidate autoComplete="off">
          <Paper className={classes.paper}>
            <div>
              <Typography variant="h6" className={classes.title}>
              Login
              </Typography>
            </div>
            <div>
              <TextField 
                variant='outlined' 
                placeholder='Email' 
                className={classes.textField}> 
              </TextField>
            </div>
            <div>
              <TextField 
                variant='outlined' 
                placeholder='Password' 
                className={classes.textField}>
              </TextField>
            </div>
            <Button variant="contained" color="primary" className={classes.button} >
              Login
            </Button>
          </Paper>
      </Grid>
  )
}