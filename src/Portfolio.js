import React, { Component } from 'react';
import { 
  Header,
  Skills,
  Projects,
  Location,
  Contact,
  Footer
} from './Components';
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
