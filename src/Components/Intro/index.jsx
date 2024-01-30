import React, { useContext, useEffect, useRef } from 'react'
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
      <p className="about-intro__text">Hi, I'm Samuel Wright, a <strong>full stack web developer</strong> focused on creating <strong>beautiful</strong> and <strong>user friendly</strong> applications while writing <strong>clean code</strong>.</p>
    </div>
  )
}
