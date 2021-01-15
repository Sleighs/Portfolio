import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skills';

class Portfolio extends Component {
  render() {
    return (
      <div className={"Portfolio", 'm-5'}>
            <Header />
            <Skills />
            <Projects />
      </div>
    );
  }
}

export default Portfolio;
