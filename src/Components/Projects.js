import React, { Component } from 'react';

class Projects extends Component {
    render (){
        let containerStyle = {
            margin: 'auto'
        }
        let tableHeader = {
            textAlign: 'center'
        }
        let rowStyle = {
            borderBottom: '1pt solid'
        }

        return (
            <div className={"container","projects-container"} style={containerStyle}>
                <div style={tableHeader}>WHAT I'VE BUILT</div>
                <div className="projects-row" style={rowStyle}>
                    CashFlow JS
                </div>
                <div className="projects-row" style={rowStyle}>
                    Mint 2048
                </div>
            </div>
        )
    }
}

export default Projects;