import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Grid } from '@material-ui/core';

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

export default function AddButton(props) {
  const classes = useStyles();


  return (
    <Grid container justify="center" xs={12}>
        <Fab variant="outlined" color="primary" aria-label="add" className={classes.fab}>
            {/* <Search></Search> */}
        </Fab>
    </Grid>
  )
}