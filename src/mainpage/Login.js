import React, { useReducer } from 'react';
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
    fontFamily: 'Ubuntu',
    fontSize: '1.5rem'
  },
  button: {
    margin: theme.spacing(2),
    fontFamily: 'Ubuntu',
    cursor: 'pointer',
    border: '1px solid #f29e92',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    '&:hover': {
      boxShadow: '0 2px 5px 2px rgba(255, 105, 135, .3)',
    }
  }
}));

const SET_EMAIL= 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';

const reducer = ((state, action) => {
  switch(action.type) {
    case SET_EMAIL:
      return { ...state, email: action.email}
    case SET_PASSWORD:
      return { ...state, password: action.password}
  }
})

export default function Login(props) {
  const[state, dispatch] = useReducer(reducer, {
    email: "",
    password: ""
  })
  const classes = useStyles();

  const login = (() => {
    props.login(state.email, state.password)
    props.close()
  })

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
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              autoComplete="current-email"
              margin="normal"
              variant="outlined"
              onChange={(e) => dispatch({type: SET_EMAIL, email : e.target.value})}
              value={state.email}
            />
            </div>
            <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              onChange={(e) => dispatch({type: SET_PASSWORD, password : e.target.value})}
              value={state.password}
            />
            </div>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => login()} >
              Login
            </Button>
          </Paper>
      </Grid>
  )
}