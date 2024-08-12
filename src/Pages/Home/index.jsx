import React, { createRef, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Contact, ContactInfo, Projects, Skills, Sparkle, Work, Intro, HomeAbout, Nav } from '../../Components';
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

      {/* <Nav 
        pageLocation={pageLocation} 
        setPageLocation={setPageLocation}
      /> */}
      <Navigation />
      
      <Intro />
      
      <HomeAbout />
      
      
      {/* <div className="section-header" id="work" style={{display: '',}}>
        <h3 className="section-title"><strong>Work I've Done</strong></h3>
      </div>
      <div className="home-projects__container" style={{display: '',}}>
        <Work />
      </div> */}
      {/* <Skills /> */}
      <div className="section-header"  id="contact">
        <h3 className="section-title"><strong>Get in Touch</strong></h3>
      </div>
      <Contact />
    </div>
  )
}

export default HomePage;