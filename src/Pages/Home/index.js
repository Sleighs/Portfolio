import React, { Component, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'universal-cookie'

import { DataContext } from '../../Context/DataContext';
import './style-mobile.css';
import './style.css'

const HomePage = (props) => {
  const {pageLocation, setPageLocation} = useContext(DataContext)

  return (
    <div id='home-container'>    
      <div className='intro-section'>
        <div className='intro-section__contact-info'>
          <div className='home-contact-info__link'>email <a target="_blank" href="mailto:wsright987@gmail.com" rel="noreferrer">wsright987@gmail.com</a></div>
          <div className='home-contact-info__link'><a target="_blank" href="http://github.com/sleighs" rel="noreferrer">github.com/sleighs</a></div>
          <div className='home-contact-info__link'>tel <a target="_blank" href="tel:609-472-2897" rel="noreferrer">+1 (609) 472-2897</a></div>
        </div>

        <div className='intro-section__description'>
          <p>Hi, I'm Samuel Wright, a <strong>full-stack developer</strong> focused on creating <strong>beautiful</strong> and <strong>user friendly</strong> applications while writing <strong>clean code</strong>.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
