import React from 'react';
import { Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    justify: 'center',
    
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Container component="main" maxWidth="xs">
        <Paper>
        <TextField>
          email
        </TextField>
        <TextField>
          password
        </TextField>
        </Paper>
      </Container>
    </form>
  )
}