import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../App.css';

export class MapContainer extends Component {
    constructor(props){
      super(props);
      this.state ={
        showingInfoWindow: false,
        activeMarker: {},          
        selectedPlace: {}          
      };
    }

    componentDidMount(){
      document.getElementById('map-container').children[1].children[0].style.position = 'relative';
    ;
    
    }
    toggleBounce() {
        if (this.state.marker.getAnimation() !== null) {
        //marker.setAnimation(null);
        } else {
            this.setState({

            });
        //marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
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
    const mapStyle = {
      width: '100%',
      maxWidth: '600px',
      height: '265px',
      position: 'relative',
      display: 'block',
      margin: 'auto 0',
      float: 'left'
    };

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
          <div className="map-infor">
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
