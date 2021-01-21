import React, { Component } from 'react';
import MapContainer from './Map';
import '../App.css';

class Location extends Component {
    componentDidMount(){

    }

    render(){
        return(
            <div id="map-container" className="container mx-auto d-block">
                <h3 className="title"><strong>WHERE AM I?</strong></h3>
                <MapContainer />
            </div>
        )
    }
}

export default Location;