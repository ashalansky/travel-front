import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Flight from '@material-ui/icons/Flight';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Ubuntu',
  },
  button: {
    fontFamily: 'Ubuntu',
  }
}));

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Flight/>
          <Typography variant="h6" className={classes.title}>
            Travel-Bum
          </Typography>
          <Button color="inherit" className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
