import React, { createRef, useContext } from 'react';
import { Contact, ContactInfo, Projects, Skills, Sparkle, Work } from '../../Components';
import Intro from '../../Components/Intro';
import { ThemeContext } from '../../Context/ThemeContext';
import './style-mobile.css';
import './style-svg.css';
import './style.css';
import { useMediaQuery } from 'react-responsive';

const HomePage = (props) => {
  const { theme } = useContext(ThemeContext);
  const homeRef = createRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // const isMobile = () => {
  //   if(window.innerWidth <= 768) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  return (
    <div id='home-container' ref={homeRef}>   
      <Sparkle parentRef={null} />
      <div className={"intro-container intro-container-" + theme} id="home">
        <Intro />
        <ContactInfo />
      </div>
      <div className="section-header section-header-first"  id="about">
        <h3 className="section-title"><strong>About</strong></h3>
      </div>
      <p className="about__text" style={{
        width: isMobile ? '90%' : '65%',
        height: 'fit-content',
        margin: '5% auto 9% auto',
        fontSize: isMobile ? '1.2em' : '1.5em',
      }}>
        With a dedication to a philosophy of lifelong learning, I'm a full stack developer with a strong passion passion for all facets of web development. The blend of creativity, logic, and endless opportunities for discovery fuels my enthusiasm for this field. When I step away from coding, I like to immerse myself in reading, playing guitar, and staying fit.
      </p>
      <Skills />
      <div className="section-header" id="projects">
        <h3 className="section-title"><strong>Projects</strong></h3>
      </div>
      <div className="home-projects__container">
        <Projects />
      </div>
      <div className="section-header" id="work" style={{display: 'none',}}>
        <h3 className="section-title"><strong>Work</strong></h3>
      </div>
      <div className="home-projects__container" style={{display: 'none',}}>
        <Work />
      </div>
      <div className="section-header"  id="contact">
        <h3 className="section-title"><strong>Contact</strong></h3>
      </div>
      <Contact />
      {/* <Sparkle />  */}
    </div>
  )
}

export default HomePage;