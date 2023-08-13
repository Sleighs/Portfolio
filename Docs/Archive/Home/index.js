import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import { 
  Header,
  Skills,
  Projects,
  Location,
  Contact,
  Footer
} from '../../Components';
import '../../App.css';

const cookiesDarkMode = new Cookies()
const darkModeCookies = cookiesDarkMode.get('darkModeData')

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      textColor: 'black',
      backgroundColor: 'white',
      darkMode: false,
    }
  }

  render() {
    let portfolioStyle = {
      fontSize: '1.2em',
    }
    let pageStyle = {
      height: '100%',
      maxWidth: '871px',
      margin: 'auto',
      color: this.state.textColor,
      backgroundColor: this.state.backgroundColor,
    }

    return (
      <div style={pageStyle}> 
        {/*<div 
          id="portfolio" 
          className={"container-md"} 
          style={portfolioStyle}
        >
          <Header  resumePage={false}/>
          <Contact />
          <Skills />
          <hr/>
          <Projects />
          
          <hr/>
          <Footer />
        </div>*/}
      </div>
    );
  }
}

const Home = (props) => {
  return (
    <div>

    </div>
  )
}

export default Home;
