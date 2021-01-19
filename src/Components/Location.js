import React, { Component } from 'react';
import MapContainer from './Map';
import '../App.css';

class Location extends Component {
    render(){
        return(
            <div id="map-container" className="container">
                <h3 className="title"><strong>WHERE AM I?</strong></h3>
                <MapContainer />
            </div>
        )
    }
}

export default Location;