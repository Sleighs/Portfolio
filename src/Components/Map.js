import React, { Component } from 'react';

class Map extends Component {
    render (){
        let containerStyle = {
            margin: 'auto'
        }
        let titleStyle = {
            textAlign: 'center'
        }
        let mapStyle = {
            background: '#000'
        }

        return (
            <div className={"container", "map-container"} style={containerStyle}>
                <h3 style={titleStyle}>WHERE I'M AT</h3>
                <canvas height="300" width="400" style={mapStyle}></canvas>
            </div>
        )
    }
}

export default Map;