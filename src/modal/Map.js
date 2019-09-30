import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
const mapsApiKey = process.env.REACT_APP_MAPS_API_KEY

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsApiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.95}
            lng={30.33}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;