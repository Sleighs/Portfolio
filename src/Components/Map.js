import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../App.css';

const mapStyles = {
  width: '600px',
  height: '300px',
  //margin: 'auto',
  display: 'block',
  position: 'relative'
};

export class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
                showingInfoWindow: false,  // Hides or shows the InfoWindow
                activeMarker: {},          // Shows the active marker upon click
                selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
              };
        }
    componentDidMount() {
        
    }
    toggleBounce() {
        if (this.state.marker.getAnimation() !== null) {
        //marker.setAnimation(null);
        } else {
            this.setState({

            });
        //marker.setAnimation(window.google.maps.Animation.BOUNCE);\
        }
        //https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications#step-2-%E2%80%94-using-map-and-googleapiwrapper
        //https://developers.google.com/maps/documentation/javascript/markers#maps_marker_animations-javascript
    }

    onMarkerClick = (props, marker, e) => {
        //this.toggleBounce();

        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
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
        style={mapStyles}
        initialCenter={
          {
            lat: 40.699,
            lng: -73.921
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'My area'}
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
    apiKey: 'AIzaSyClQckeNCdjuNJZVUas8aVEIGYu4ekTKqs'
  })(MapContainer);
