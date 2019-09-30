import React from 'react';
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalNav from './Nav';
import AddButton from './AddButton';
import RouteList from './RouteList';

const useStyles = makeStyles({
  container: {
    flexgrow: 1,
    justify: 'center',
    
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
});

export default function ModalLayout() {
  const classes = useStyles();

  return (
  <Grid container spacing={3}>
    <Grid item xs={5}>
      <Paper className={classes.paper}>
        <RouteList></RouteList>
      </Paper>
    </Grid>
    <Grid item xs={7}>
      <Paper className={classes.paper}>
        Map
      </Paper>
    </Grid>
    <AddButton></AddButton>
    <Grid item xs={12}>
      <ModalNav className={classes.nav}></ModalNav>
    </Grid>
  </Grid>

  );
}
