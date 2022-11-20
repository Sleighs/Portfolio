import React, { Component, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'universal-cookie'
import { Projects, Skills } from '../../Components';

import { DataContext } from '../../Context/DataContext';
import './style-mobile.css';
import './style.css'

const AboutPage = (props) => {
  return (
    <div id='about-container'>
      <div className='section about-section' id='about'>
        <div id="about-header">
          <h3 id="about-title" className="section-title"><strong>About</strong></h3>
        </div>
        
      </div>
    </div>
  )
}

export default AboutPage;
