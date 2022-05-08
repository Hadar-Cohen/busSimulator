import React from "react";
import GoogleMapReact, {} from 'google-map-react';

import busImage from '../Images/bus.png'
const AnyReactComponent = ({ text }) => <div><img src={busImage} style={{height:30, width: 50}}/></div>;

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
  defaultCenter={{lat: 32.4365, lng: 34.9196}}
  defaultZoom={11}
  yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
         <AnyReactComponent
          lat={32.4365}
          lng={34.9196}
          text="My Marker"
        />
</GoogleMapReact>
    </div>
  );
}