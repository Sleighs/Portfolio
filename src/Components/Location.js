import React, { Component } from 'react';
import MapContainer from './Map';
import '../App.css';

class Location extends Component {
    componentDidMount(){
        
        var nodes = document.getElementById('map-container').childNodes;
        var node = nodes[1].children;

        console.log('map mounted', nodes)
        
        console.log(node)
        //node[0].style.width = '500px';
        //node[0].style.position = 'relative';
    }

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