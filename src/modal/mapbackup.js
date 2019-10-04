import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const mapsApiKey = process.env.REACT_APP_MAPS_API_KEY;

export default function Map(props) {
  const [state, setState] = useState({
    map: null,
    maps: null,
    mapLoaded: false
  });

  const mapDefaults = {
    center: {
      lat: 52.9399,
      lng: -106.4509
    },
    zoom: 0
  };

  if (props.routes.length > 0) {
    mapDefaults.center.lat = props.routes[0].lat;
    mapDefaults.center.lng = props.routes[0].lng;
    mapDefaults.zoom = 5;
  }

  const markerComponents = props.routes.map(route => (
    <Marker lat={route.lat} lng={route.lng} name={route.name} color="blue" />
  ));
  console.log(mapDefaults);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapsApiKey }}
        defaultCenter={mapDefaults.center}
        defaultZoom={mapDefaults.zoom}
        onGoogleApiLoaded={({ map, maps }) => {
          this.setState({ map: map, maps: maps, mapLoaded: true });
        }}
        yesIWantToUseGoogleMapApiInternals
      >
        {markerComponents}
      </GoogleMapReact>
    </div>
  );
}
