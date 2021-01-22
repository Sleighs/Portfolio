import React, { Component } from 'react';
import AppManager from '../AppManager';
import '../App.css';

class Skills extends Component {
    render (){
        return (
            <div className="container" id="skills-container">
				<div className="header-box" id="skills-title1">
					<h3 className="title"><strong>WHAT DO I DO?</strong></h3>
				</div>
				<div id="do-list">
					{!AppManager.company ? null : <p>Work at AweSumo creating software</p>}
					<p>Create fun projects in my spare time</p>
					<p>Write quality code</p>
					<p>Keep my functions small, focused, and easy to understand</p>
					<p>Leave comments as I create and maintain code</p>
					<p>Make tests for the code I write</p>
					<p>Document every feature</p>
					<p>Keep track of every bug</p>
					<p>Strictly follow security best practices</p>
					<p>Never stop learning</p>
				</div>
				<br/>
				<div className="header-box" id="skills-title2">
					<h3 className=""><strong>WHAT DO I KNOW?</strong></h3>
				</div>
				<ul id="know-list">
					<li>Javascript, PHP, C#, Python and several other programming languages</li>
					<li>How to design user friendly UX with React, SASS, HTML5 Canvas, and other front end technologies</li>
					<li>How to write efficient MySQL queries</li>
					<li>How to use a feature/dev/master branch workflow in Git</li>
					<li>How to query and interpret data to make meaningful insights</li>
					<li>How to ask a great question on Stack Overflow</li>
					<li>How to make an excellent <a target="_blank" href="https://github.com/Sleighs/google-maps-react-tutorial/" rel="noreferrer">Github Repository</a></li>
				</ul>
            </div>
        )
    }
}

export default Skills;