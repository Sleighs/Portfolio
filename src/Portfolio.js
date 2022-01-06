import React, { Component } from 'react';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Location from './Components/Location';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

class Portfolio extends Component {
  render() {
    let portfolioStyle = {
      fontSize: '1.2em'
    }

    return (
      <div id="portfolio" className={"container-md"} style={portfolioStyle}>
        <Header />
        <Skills />
        <hr/>
        <Projects />
        <hr/>
        <Github />
        <hr/>
        <Location />
        <hr/>
        <Contact />
        <hr/>
        <Footer />
      </div>
    );
  }
}


class Github extends Component {
  render() {
    return(
      <div id="github-container" >
        <h3 className="title"><strong>DO I HAVE A GITHUB?</strong></h3>
        <p id="github-text"><a  href="http://www.github.com/sleighs" target="blank">Yes.</a></p>
      </div>
    )
  }
  
}

/*class Info extends Component {
  render() {
    return(
      <div id="info-container" className="container">
        <div></div>
      </div>
    )
  }
}*/

export default Portfolio;
