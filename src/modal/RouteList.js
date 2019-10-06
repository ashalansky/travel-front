import React from 'react';
import Route from './RouteListItem';



export default function RouteList(props) {

  const RouteList = React.memo(function({ routes }) {
    return routes.map((route, index) => (
      <Route route={route} index={index} key={route.id} />
    ));
  });

}
