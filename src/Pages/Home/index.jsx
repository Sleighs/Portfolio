import React, { createRef, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Contact, ContactInfo, Projects, Skills, Sparkle, Work, Intro, HomeAbout, Nav, RiskReversal } from '../../Components';
import { ThemeContext } from '../../Context/ThemeContext';
import './style-svg.css';
import './style.css';
import { DataContext } from '../../Context/DataContext';
import Navigation from '../../Components/Nav/Navigation';

const HomePage = (props) => {
  const { theme } = useContext(ThemeContext);
  const { pageLocation, setPageLocation } = useContext(DataContext);

  const homeRef = createRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div id='home-container' ref={homeRef}>   
      <Sparkle parentRef={null} />

      <Navigation />

      {/* <Nav /> */}
      
      <Intro />
      
      {/* <HomeAbout /> */}
      
      {/* <RiskReversal /> */}

      {/* <Work /> */}

      <Projects />

      <Skills />
      
      <Contact />
    </div>
  )
}

export default HomePage;