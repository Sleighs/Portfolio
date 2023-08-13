import React from 'react';
import { Skills } from '../../Components';
import Intro from '../../Components/Intro';

import './style-mobile.css';
import './style.css'

const AboutPage = (props) => {
  return (
    <div id='about-container'>
      <div className='section about-section' id='about'>
        <div id="about-header">
          <h3 id="about-title" className="section-title"><strong>About</strong></h3>
        </div>
        <Intro />
        <Skills />
      </div>
    </div>
  )
}

export default AboutPage;
