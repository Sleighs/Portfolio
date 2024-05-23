import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../Context/DataContext'
import { ThemeContext } from '../../Context/ThemeContext'

import './style.css'

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
    <div className={"about-intro about-intro-" + theme } ref={hiddenRef} 
      style={{
        overflow: 'hidden',
        maxWidth: '100vw',
      }}>
      <div className="about-intro__" style={{
        fontSize: '2.2em',
      }}>Hi. I'm Sam.</div>
      <div className="about-intro__" style={{
        fontSize: '2.2em',
      }}>
        I'm a full stack web developer.
      </div>
      <button className={"about-intro__button about-intro__button-" + theme}
        onClick={() => {
          document.getElementById('about').scrollIntoView({ behavior: 'smooth' });        
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
        View my work
      </button>
    </div>
  )
}
