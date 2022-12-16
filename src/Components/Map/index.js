import React, { Component, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../../App.css';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

export function MapContainer(props) {
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {
      lat: 39.855,
      lng: -75.008
    },          
    selectedPlace: {}          
  })

  useEffect(() => {
    document.getElementById('map-container').children[1].children[0].style.position = 'relative';
  },[])
    
  /*const toggleBounce = () => {
      if (state.marker.getAnimation() !== null) {
        //marker.setAnimation(null);
      } else {
        //this.setState({ });
        //marker.setAnimation(window.google.maps.Animation.BOUNCE);
      }
  }*/

  const onMarkerClick = (props, marker, e) => {
    setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: false
    });

    //toggleBounce();
  }
    
  /*
  const onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };*/

  const mapStyle = {
    width: '100%',
    height: '280px',
    position: 'relative',
    display: 'flex',
    margin: '20px 0',
  };

  return (
    <Map
      google={props.google}
      zoom={6}
      style={mapStyle}
      initialCenter={
        {
          lat: 39.8534057,
          lng: -74.9828451
        }
      }
    >
      <Marker
        onClick={onMarkerClick}
        name={'Where I\'m At'}
        draggable={false}
        animation={window.google.maps.Animation.DROP}
        visible={true}
      />
      <Marker 
        name={'Favorite place to eat'}
        draggable={false}
        position={{
          lat: 39.8569142,
          lng: -75.0034956,
        }} 
        visible={false}
      />
      <Marker 
        name={'Favorite park'}
        draggable={false}
        position={{
          lat: 39.9169778,
          lng: -75.0581273,
        }} 
        visible={false}
      />
      <InfoWindow
        marker={state.activeMarker}
        visible={state.showingInfoWindow}
        onClose={props.onClose}
      >
        <div className="map-info">
          <h4>{state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);