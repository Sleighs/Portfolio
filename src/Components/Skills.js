import React, { Component } from 'react';
import '../App.css';

class Skills extends Component {
    render (){
        let containerStyle = {
			margin: '30px auto 30px auto'
		}
		let titleStyle = {
			margin: '25px auto'
		}
        let doStyle = {
			textAlign: 'center',
			margin: '40px auto 0 auto'
		}
		let knowStyle = {
			margin: '50px auto 5px auto'
		}

        return (
            <div className={"container"} id="skills-container" style={containerStyle}>
                <div id="do" style={doStyle}>
					<div className="header-box" style={titleStyle}>
						<h3 className="title"><strong>WHAT DO I DO?</strong></h3>
					</div>
					<p>Work at AweSumo Enterprises creating software</p>
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
                <div id="know" style={knowStyle}>
					<div className="header-box" style={titleStyle}>
						<h3 className="title"><strong>WHAT DO I KNOW?</strong></h3>
					</div>
					<ul>
						<li>Javascript, PHP, C#, Python and several other programming languages</li>
						<li>How to design user friendly UX with React, SASS, HTML5 Canvas, and other front end technologies</li>
						<li>How to write efficient queries in both MySQL and MSSQL</li>
						<li>How to use a feature/dev/master branch workflow in Git</li>
						<li>How to configure Apache, setup CRONs, manage packages, exit VIM, and other Linux Sys Admin tasks</li>
						<li>How to query and interpret data to make meaningful insights</li>
						<li>How to ask a great question on <a target="_blank" href="https://stackoverflow.com/" rel="noreferrer" >Stack Overflow</a></li>
						<li>How to make an excellent <a target="_blank" href="https://github.com/Sleighs/google-maps-react-tutorial/blob/master/README.md" rel="noreferrer">Github Repository</a></li>
					</ul>
				</div>
            </div>
        )
    }
}

export default Skills;