import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Flight from '@material-ui/icons/Flight';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    height: 80
  },
  title: {
    flexGrow: 3,
    fontFamily: 'Ubuntu',
    color: 'black'
  },
  button: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    color: 'black'
  },
  plane: {
    color: 'black'
  },
  user: {
    flexGrow: 0,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    color: '#ffc250',
    fontSize: 24,
    padding: '6px 16px'
  }
}));

// const LOGOUT = 'LOGOUT';

// const reducer = ((state, action) => {
//   switch(action.type) {
//     case LOGOUT:
//       return {...state}
//   }
// })

// export default function Logout(props) {
//   const [state, dispatch] = useReducer(reducer, {
//     username: "",
//     email: "",
//     password: "",
//     city: ""
//   })

//   const logout = (() => {
//     props.logout(state.username, state.email, state.password, state.city)
//   })
// }


export default function(props) {
  const classes = useStyles();

  if (props.user) {
    return(
      <div>
        <AppBar position="fixed" className={classes.root}>
            <Toolbar className={classes.root}>
              <Flight className={classes.plane}/>
              <Typography variant="h5" className={classes.title}>
                Travel-Bum
              </Typography>
              <Typography variant="h5" className={classes.user}>
                Hi, {props.user}!
              </Typography>
              <Button variant="h5" color="inherit" className={classes.button}>My Trips</Button>
              <Button variant="h5" color="inherit" className={classes.button} onClick={() => props.logout()}>Logout</Button>
            </Toolbar>
        </AppBar>
      </div>
    )
  } else {
    return (
      <div>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.root}>
            <Flight className={classes.plane}/>
            <Typography variant="h5" className={classes.title}>
              Travel-Bum
            </Typography>
            <Button variant="h5" color="inherit" className={classes.button} onClick={() => props.setLoginModal(!props.LoginOn)}>Login</Button>
            <Button color="inherit" className={classes.button} onClick={() => props.setSignUpModal(!props.SignUpOn)}>Sign Up</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
