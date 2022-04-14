import React, { Component } from 'react';
import { Map } from '..';
import '../../App.css';

class Location extends Component {
    render(){
        return(
            <div id="map-container" className="container mx-auto d-block">
                <h3 id="map-title" className="title"><strong>WHERE AM I?</strong></h3>
                <Map />
            </div>
        )
    }
}

export default Location;