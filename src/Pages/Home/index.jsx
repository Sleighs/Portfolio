import React, { useContext } from 'react';
import { Contact, ContactInfo, Projects, Skills, Sparkle } from '../../Components';
import Intro from '../../Components/Intro';
import { ThemeContext } from '../../Context/ThemeContext';
import './style-mobile.css';
import './style-svg.css';
import './style.css';

const HomePage = (props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div id='home-container'>   
      <div className={"intro-container intro-container-" + theme} id="home">
        <Intro />
        <ContactInfo />
      </div>
      <div className="section-header"  id="about">
        <h3 className="section-title"><strong>About</strong></h3>
      </div>
      <Skills />
      <div className="section-header section-header-first" id="projects">
        <h3 className="section-title"><strong>Projects</strong></h3>
      </div>
      <div className="home-projects__container">
        <Projects />
      </div>
      <div className="section-header"  id="contact">
        <h3 className="section-title"><strong>Contact</strong></h3>
      </div>
      <Contact />
      <Sparkle /> 
    </div>
  )
}

export default HomePage;
