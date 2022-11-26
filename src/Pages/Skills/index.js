import React from 'react';
import { Skills } from '../../Components';
import './style-mobile.css';
import './style.css'

const SkillsPage = (props) => {
  return (
    <div id='skills-container'>
      <div className='section skills-section' id='skills'>
        <div id="sklls-header">
          <h3 id="skills-title" className="section-title"><strong>Skills</strong></h3>
        </div>
        <Skills />
      </div>
    </div>
  )
}

export default SkillsPage;
