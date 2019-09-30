import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    color: 'white',
    background: '#ffc445',
    
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function AddButton() {
  const classes = useStyles();


  return (
    <Grid container justify="center" xs={12}>
        <Fab variant="outlined" color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
          Add Destination
        </Fab>
    </Grid>
  )
}