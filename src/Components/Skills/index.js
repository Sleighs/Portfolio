import React, { Component } from 'react';
import AppManager from '../../AppManager';
import '../../App.css';

class Skills extends Component {
    render (){
        return (
            <div className="container" id="skills-container">
				<div className="header-box" id="skills-title1">
					<h3 className="title"><strong>WHAT DO I DO?</strong></h3>
				</div>
				<div id="do-list">
					{/*!AppManager.company ? null : <p>Work at AweSumo creating software</p>*/}
					<p>Create fun web projects in my spare time</p>
					<p>Write quality code</p>
					<p>Keep my functions small, focused, and easy to understand</p>
					<p>Leave comments as I create and maintain code</p>
					<p>Make tests for the code I write</p>
					<p>Document every feature</p>
					<p>Keep track of every bug</p>
					<p>Strictly follow security best practices</p>
					<p>Never stop learning</p>
				</div>
				<hr/>
				<div id="skills2-header">
					<h3 id="skills2-title"><strong>WHAT DO I KNOW?</strong></h3>
				</div>
				<ul id="know-list">
					<li>HTML, CSS, Javascript (ES5, ES6) and Typescript languages</li>
					<li>Node JS, MongoDB and Firebase server side technologies</li>
					<li>How to design user friendly UX with React, React Native, Redux, JQuery, HTML5 Canvas, SASS</li>
					<li>How to use a feature/dev/master branch workflow in Git</li>
					<li>How to design, develop, deploy and support RESTful services</li>
					<li>How to query and interpret Google Analytics data to make meaningful insights</li>
					<li>How to make an excellent <a target="_blank" href="https://github.com/Sleighs/google-maps-react-tutorial/" rel="noreferrer">Github Repository</a></li>
				</ul>
            </div>
        )
    }
}

export default Skills;