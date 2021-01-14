import React, { Component } from 'react';

import AppManager from '../AppManager';

class Skills extends Component {


    render (){
        return (
            <div className="header-container">
                <span id="name">Samuel Wright</span>
                <br/>
                <span id="title">SOFTWARE </span>
                <span id="log"></span>
                <span id='glyph'> |</span>
                <button id={'init-btn'} onClick={ ()=>{this.init(this.state.n)} }>Start</button>
            </div>
        )
    }
}

export default Skills;