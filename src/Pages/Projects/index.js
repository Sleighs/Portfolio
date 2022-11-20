import React from 'react';
import { Projects } from '../../Components';
import './style-mobile.css';
import './style.css'

const ProjectsPage = (props) => {
  return (
    <div id='projects-container'>
      <div className='section projects-section' id='projects'>
        <Projects />
      </div>
    </div>
  )
}

export default ProjectsPage;
