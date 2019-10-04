import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
const mapsApiKey = process.env.REACT_APP_MAPS_API_KEY;


class Map extends Component {
  
  renderPolylines (map, maps) {
    /** Example of rendering geodesic polyline */
   
    const routesList = this.props.routes;
    console.log("ROUTESLIST", routesList)
    if(routesList.length > 1){
      for(let i = 0; i < routesList.length -1; i++){
        const markersArr = [{lat: routesList[i].lat, lng: routesList[i].lng},{lat: routesList[i+1].lat, lng: routesList[i+1].lng} ]

        let geodesicPolyline = new maps.Polyline({
          path: markersArr,
          geodesic: true,
          strokeColor: '#00a1e1',
          strokeOpacity: 1.0,
          strokeWeight: 4
        })
        geodesicPolyline.setMap(map)



      }
    }    
    this.fitBounds(map, maps)
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.routes) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  createMarkers(routes){
   return routes.map(route => (
    <Marker text={route.name} lat={route.lat} lng={route.lng} />
     ));
  }


  render () {
    return (
      <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: mapsApiKey }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({map, maps}) => this.renderPolylines(map, maps)}>
        {this.createMarkers(this.props.routes)}
      </GoogleMap>
      </div>
    )
  }
}

Map.defaultProps = {
  markers: [
    {lat: 53.42728, lng: -6.24357},
    {lat: 43.681583, lng: -79.61146}
  ],
  center: [47.367347, 8.5500025],
  zoom: 4
}

export default Map