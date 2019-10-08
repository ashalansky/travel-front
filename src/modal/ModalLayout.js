import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Map from "./Map";
import Search from "./Search";
import { DragDropContext, Droppable} from "react-beautiful-dnd";
import Route from './Route'


const RouteList = React.memo(function({ routes, deleteCity }) {
  return routes.map((route, index) => (
    <Route route={route} index={index} key={route.id} deleteCity={deleteCity} />
  ));
});


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

export default function ModalLayout(props) {
  
  const classes = useStyles();

  return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
           
            <Search addCity={props.addCity}></Search>
            <DragDropContext onDragEnd={props.onDragEnd}>
              <Droppable droppableId="list">
                {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <RouteList routes={props.routes}  deleteCity={props.deleteCity}/>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12}>
          <Paper className={classes.paper}>
            <Map key={props.key} routes={props.routes}></Map>
          </Paper>
        </Grid>
      </Grid>
  );
}
