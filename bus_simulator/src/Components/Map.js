import React from "react";npm
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
  bootstrapURLKeys={{ key: 'AIzaSyCCwWKnfacKHx3AVajstMk6Ist1VUoNt9w' }}
  defaultCenter={this.props.center}
  defaultZoom={this.props.zoom}
  yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
 
</GoogleMapReact>
    </div>
  );
}