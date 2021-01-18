import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Map from './Map';
import Contact from './Contact';

class Portfolio extends Component {
  render() {
    let portfolioStyle = {
      //   fontFamily: "Helvetica Neue"
    }
    let footerStyle = {
      textAlign: 'center'
    }

    return (
      <div className={"portfolio", "m-5", "container"}>
            <Header />
            <Skills />
            <Projects />
            <div>Info Section 1</div>
            <div>Info Section 2</div>
            <div>
              <div>DO I HAVE A GITHUB?</div>
              <a href="http://www.github.com/sleighs" target="blank">Yes.</a>
            </div>
            <Map />
            <Contact />
            <div style={footerStyle}>
              <span>Thank you for reading!</span>
              <br/>
              <a href="github.com/sleighs/cv" target="blank">View The Source Code</a>
            </div>
      </div>
    );
  }
}

export default Portfolio;
