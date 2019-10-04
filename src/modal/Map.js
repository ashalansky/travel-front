import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
const mapsApiKey = process.env.REACT_APP_MAPS_API_KEY;


class Map extends Component {
  
  renderPolylines (map, maps) {
    //Renders lines on the map using the GoogleMapApi
    //The entire map has to be re-rendered to update these
    //Above in ModalLayout the map key is updated to force a re-render
   
    const routesList = this.props.routes;
   
    if(routesList.length > 1){
      console.log(routesList);
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
    if(routesList.length > 0)
      this.fitBounds(map, maps)
  }

  fitBounds (map, maps) {
    //updates the bounds of the map so as much of the routes are shown as possible

    let bounds = new maps.LatLngBounds()
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
  center: [51.0447, -114.0719],
  zoom: 0
}

export default Map