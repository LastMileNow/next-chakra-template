// https://github.com/google-map-react/google-map-react
// https://nextjs.org/docs/basic-features/environment-variables
import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 41.141,
      lng: -73.358
    },
    zoom: 11
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GMAP_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={41}
          lng={-73}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}