import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddButton from "./AddButton";
import Map from "./Map";
import Search from "./Search";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "@material-ui/core/ListItem";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from '@material-ui/core/ListItemText';
import Route from './Route'


const initial = [{ id: 1, name: "Calgary", lat:  51.049999, lng:  -114.066666 }, { id: 3, name: "London", lat: 51.509865, lng: -0.118092 }, { id: 2, name: "Chicago", lat:  41.881832, lng: -87.623177 }];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// function Route({ route, index }) {
//   return (
//     <Draggable draggableId={route.id} index={index}>
//       {provided => (
//         <ListItem
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//         >
//           <DragIndicatorIcon />
//          <ListItemText primary={route.name}/>
//           <IconButton edge="end" aria-label="delete">
//             <DeleteOutlineIcon/>
//           </IconButton>
//         </ListItem>
//       )}
//     </Draggable>
//   );
// }

const RouteList = React.memo(function({ routes, deleteCity }) {
  return routes.map((route, index) => (
    <Route route={route} index={index} key={route.id} deleteCity={deleteCity} />
  ));
});

const getNextAvailableId = function(routesArr) {
  //Hardcoded for six possible spots

  const arr = [-1, 0, 0, 0, 0, 0, 0];
  if (routesArr.length < 6) {
    for (let i = 0; i < routesArr.length; i++) {
      arr[routesArr[i].id] = routesArr[i].id;
    }

    for (let j = 1; j < arr.length; j++) {
      if (arr[j] <= 0) {
        return j;
      }
    }
  }
};

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

export default function ModalLayout() {
  const [state, setState] = useState({ routes: [], key: 1 });

  const addCity = function(city) {
   if(state.routes.length !== 6){
    const id = getNextAvailableId(state.routes);
    const newCit = city;
    newCit.id = id;
    setState({ routes: [...state.routes, newCit], key: state.key+1 });
   }
  };

  const deleteCity = function(index){
    let arr = [...state.routes]
    arr.splice(index,1)
    setState({ routes: arr, key: state.key+1 })
  }


  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const routes = reorder(
      state.routes,
      result.source.index,
      result.destination.index
    );

    setState({ routes, key: state.key+1 });
  }

  const classes = useStyles();

  return (

      <Grid container spacing={3}>
    
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <AddButton></AddButton>
            <Search addCity={addCity}></Search>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list">
                {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <RouteList routes={state.routes}  deleteCity={deleteCity}/>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12}>
          <Paper className={classes.paper}>
            <Map key={state.key} routes={state.routes}></Map>
          </Paper>
        </Grid>
      </Grid>
  
  );
}
