import React from 'react';
import { Projects } from '../../Components';
import './style-mobile.css';
import './style.css'

const ProjectsPage = (props) => {
  return (
    <div id='projects-container'>
      <div className='section projects-section' id='projects'>
        <div id="projects-header">
          <h3 id="projects-title" className="section-title"><strong>Projects</strong></h3>
        </div>
        <Projects />
      </div>
    </div>
  )
}

export default ProjectsPage;
