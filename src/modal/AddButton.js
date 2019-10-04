import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';
import Search from './Search'
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    color: 'white',
    background: '#ffc445',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.0),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  addIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    // transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 120,
      },
    },
  },
}));

export default function AddButton() {
  const classes = useStyles();


  return (
    <Grid container justify="center" xs={12}>
        <Fab variant="outlined" color="primary" aria-label="add" className={classes.fab}>
          <div className={classes.search}>
            <div className={classes.addIcon}>
              <AddIcon />
            </div>
            <InputBase
              placeholder='Add City'
              classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              }}>
            </InputBase>
          </div>
        </Fab>
    </Grid>
  )
}