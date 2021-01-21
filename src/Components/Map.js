import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../App.css';

const mapStyle = {
  width: '75%',
  maxWidth: '600px',
  height: '300px',
  position: 'relative',
  display: 'block',
  margin: 'auto -25% auto 0',
  float: 'left'

};

export class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
          showingInfoWindow: false,
          activeMarker: {},          
          selectedPlace: {}          
        };
      }
    
    toggleBounce() {
        if (this.state.marker.getAnimation() !== null) {
        //marker.setAnimation(null);
        } else {
            this.setState({

            });
        //marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
        //https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications#step-2-%E2%80%94-using-map-and-googleapiwrapper
        //https://developers.google.com/maps/documentation/javascript/markers#maps_marker_animations-javascript
    }

    onMarkerClick = (props, marker, e) => {
        //this.toggleBounce();

        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: false
        });
    }
    
    /*
    onClose = props => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        });
    }
    };*/

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyle}
        initialCenter={
          {
            lat: 40.688,
            lng: -73.921
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Where I Live'}
          draggable={false}
          animation={window.google.maps.Animation.DROP}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAcBp9-09CTRSP0hzcHK7UcxlIJ2zwcBy4'
})(MapContainer);
