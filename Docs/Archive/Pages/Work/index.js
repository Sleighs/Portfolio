import React from 'react';
import './style-mobile.css';
import './style.css'
import realityCalcPic from '../../Resources/Images/portfolio-realitycalc03.png';

const WorkPage = (props) => {
  return (
    <div id='work-container'>
      <div className='section work-section' id='work'>
        <div id="work-header">
          <h3 id="work-title" className="section-title"><strong>Work</strong></h3>
        </div>
        <div className="row" id="project1">
          <div className="col-md-7 project-description">
            <h3 className="projects-row-title"><strong>RealityCalc.com</strong></h3>
            <p>Lead developer for RealityCalc.com, home to the popular online tool The Male Reality Calculator hosted at RealityCalc.com. Built with React and Redux, the calculator uses U.S. Census Bureau statistics to calculate the user's odds of meeting their dream woman.</p>
            <p>
              <a target="_blank" href="https://realitycalc.com/" rel="noreferrer">Check it out</a>
            </p>
          </div>
          <div className="col-md-5">
            <a className="projects-pic-container-realitycalc" target="_blank" href="https://realitycalc.com"rel="noreferrer" title="Check it out">
              <img className="img-responsive rounded projects-pic mx-auto d-block" alt="RealityCalc.com" src={realityCalcPic}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkPage;
