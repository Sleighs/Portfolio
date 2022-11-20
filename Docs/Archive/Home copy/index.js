import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import { 
  Header,
  Skills,
  Projects,
  Location,
  Contact,
  Footer,
  Nav
} from '../../Components';
import '../../App.css';
import './style.css'

const Home = (props) => {
  return (
    <div id='logo'>
      <Nav />
      <div className='intro-section'>
        <p>Hi, I'm Samuel Wright</p>
      </div>
      <div className='section projects-section' id='projects'>
        <Projects resumePage={false}/>
      </div>
      <div className='section skills-section' id='skills'>
        <Skills />
      </div>
      <div className='section contact-section' id='contact'>
        <Contact />
      </div>
      <div className='section work-section' id='work'>
        <h3>Work</h3>
      </div>
    </div>
  )
}

export default Home;
