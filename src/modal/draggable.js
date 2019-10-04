import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from '@material-ui/core/ListItem';

const initial = [{ id: 1, content: "I am 1" }, { id: 2, content: "I am 2" }];


const grid = 8;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

//Builds And returns a quoteItem
//Create a draggable, 
//Creates a quoteItem
//
function Route({ route, index }) {
  return (
    <Draggable draggableId={route.id} index={index}>
      {provided => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {route.content}
        </ListItem>
      )}
    </Draggable>
  );
}

const RouteList = React.memo(function QuoteList({ routes }) {
  return routes.map((route, index) => (
    <Route route={route} index={index} key={route.id} />
  ));
});


export default function QuoteApp() {
  const [state, setState] = useState({ routes: initial });

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

    setState({ routes });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <RouteList routes={state.routes} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<QuoteApp />, rootElement);
