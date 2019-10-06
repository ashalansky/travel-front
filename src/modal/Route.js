import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import ListItem from "@material-ui/core/ListItem";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from '@material-ui/core/ListItemText';
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";


export default function Route({ route, index, deleteCity }) {
  return (
    <Draggable draggableId={route.id} index={index}>
      {provided => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <DragIndicatorIcon />
         <ListItemText primary={route.name}/>
         {index === 0? "(Origin City)": ""}
          <IconButton edge="end" aria-label="delete" onClick={()=> deleteCity(index)}>
            <DeleteOutlineIcon/>
          </IconButton>
        </ListItem>
      )}
    </Draggable>
  );
}