import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalNav from "./Nav";
import AddButton from "./AddButton";
import RouteList from "./RouteList";
import Map from "./Map";
import Search from "./Search";

const useStyles = makeStyles({
  container: {
    justify: "center"
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    height: "60vh"
  }
});





//Need to check if next selected is the same city lat lng as the previous
export default function ModalLayout() {
  const [cities, setCities] = useState([]);
  
  console.log(cities)
  const removeCity = function(index){
    let arr = [...cities];
    delete arr[index]

    setCities(arr)
  

  }
  const addCity = function(city){
    let arr = [...cities];
    arr.push(city);
    setCities(arr);
  }
  
  const classes = useStyles();

  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ModalNav className={classes.nav}></ModalNav>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <AddButton></AddButton>
            <Search addCity={addCity}></Search>
            <RouteList cities={cities}></RouteList>
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12}>
          <Paper className={classes.paper}>
            <Map cities={cities}></Map>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}


