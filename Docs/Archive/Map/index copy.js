import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../../App.css';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

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
    } 

    /*
    toggleBounce() {
        if (this.state.marker.getAnimation() !== null) {
          //marker.setAnimation(null);
        } else {
          //this.setState({ });
          //marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
        
    }*/

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: false
        });

        //this.toggleBounce();
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
      height: '280px',
      position: 'relative',
      display: 'flex',
      margin: '20px 0',
    };

    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={mapStyle}
        initialCenter={
          {
            lat: 39.855,
            lng: -75.008
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Where I\'m At'}
          draggable={false}
          animation={window.google.maps.Animation.DROP}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div className="map-info">
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);