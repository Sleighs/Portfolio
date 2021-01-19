import React, { Component } from 'react';
import '../App.css';

class Projects extends Component {
    render (){
        let containerStyle = {
            margin: '30px auto'
        }

        let rowStyle = {
            borderBottom: '1pt solid'
        }

        return (
            <table className={"table"} style={containerStyle}>
                <thead>
                    <tr>
                        <td><h3 className="title"><strong>WHAT HAVE I BUILT?</strong></h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row" style={rowStyle}>
                        <td>Picture</td>
                        <td>Description</td>
                    </tr>
                    <tr className="row" style={rowStyle}>
                        <td>Description</td>
                        <td>Picture</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Projects;