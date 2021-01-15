import React, { Component } from 'react';
import AppManager from '../AppManager';

class Projects extends Component {
    render (){
        let containerStyle = {
            margin: 'auto'
        }

        return (
            <div className="projects-container" style={containerStyle}>
                <div>What I've Built</div>
                Projects Table
            </div>
        )
    }
}

export default Projects;