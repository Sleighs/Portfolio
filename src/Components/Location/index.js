import React from 'react';
import { Map } from '..';
import './style.css';

export default function Location(props){
  return(
    <div id="map-container" className="container mx-auto d-block">
      <h3 className="section-subtitle">Where am I?</h3>
      <Map />
    </div>
  )
};