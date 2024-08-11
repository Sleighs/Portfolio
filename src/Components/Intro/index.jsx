import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../Context/DataContext'
import { ThemeContext } from '../../Context/ThemeContext'

import './style.css'
import ContactInfo from '../ContactInfo';

export default function Intro() {
  const { theme } = useContext(ThemeContext);
  const { setPageLocation } = useContext(DataContext);

  const hiddenRef = useRef();

  useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  
  const scrollHandler = () => {
      if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop) {
          setPageLocation('home')
      }
  }

  return (
    <div className={"intro-container intro-container-" + theme} id="home"> 
      <div className={"about-intro about-intro-" + theme } ref={hiddenRef} 
        style={{
          overflow: 'hidden',
        }}
      >
        <div className="about-intro__content">
          <div className="about-intro__title">
            Your Trusted South Jersey Web Developer for Strategic Web and Marketing Solutions
          </div>
          <div className="about-intro__description">I'm Samuel, your partner in making solutions that reflect your vision and connect with contemporary audiences.</div>
          
          <button className={"about-intro__button about-intro__button-" + theme}
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });        
            }}
            style={{
              fontSize: '1.5em',
              padding: '0.25em 1.5em',
              marginTop: '1.75em',
              backgroundColor: 'transparent',
              border: theme === 'light' ? '5px solid rgb(255, 77, 70)' : '5px solid rgb(255, 77, 70)',
              color: theme === 'light' ? 'rgb(255, 77, 70)' : 'rgb(255, 255, 255)',
            }}
          >
            Get in touch
          </button>
        </div>

      </div>
    </div>
  )
}
