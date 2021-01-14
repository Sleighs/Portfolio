import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skills';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
            <Header />
            <Skills />
      </div>
    );
  }
}

export default Portfolio;
