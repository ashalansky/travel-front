import React from 'react';
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ModalNav from './Nav';
import AddButton from './AddButton';
import RouteList from './RouteList';
import Map from './Map';
import Search from './Search';


const useStyles = makeStyles({
  container: {
    justify: 'center',
    
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  },
});

export default function ModalLayout() {
  const classes = useStyles();

  return (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={5}>
      <Paper className={classes.paper}>
        <Search></Search>
        <RouteList></RouteList>
      </Paper>
      <AddButton></AddButton>
    </Grid>
    <Grid item sm={7} xs={12}>
      <Paper className={classes.paper}>
        <Map></Map>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <ModalNav className={classes.nav}></ModalNav>
    </Grid>
  </Grid>
  );
}
