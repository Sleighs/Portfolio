import React, { Component, useState } from 'react';
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

class Resume extends Component {
  constructor(props){
    super(props)
    this.state = {
      textColor: 'black',
      backgroundColor: 'white',
      darkMode: false,
    }

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount(){
    if (darkModeCookies === true){
      this.setState({
        textColor: 'white',
        backgroundColor: 'black',
        darkMode: true,
      })
    }
  }

  toggleDarkMode(){
    if (!this.state.darkMode){
      this.setState({
        textColor: 'white',
        backgroundColor: 'black',
        darkMode: true,
      })
      cookiesDarkMode.set(
        'darkModeData', 
        true, 
        {path:'/', maxAge: 1200,}
      )
    } else {
      this.setState({
        textColor: 'black',
        backgroundColor: 'white',
        darkMode: false,
      })
      cookiesDarkMode.set(
        'darkModeData', 
        false, 
        {path:'/', maxAge: 1200,}
      )
    }
    
  }

  render() {
    let portfolioStyle = {
      fontSize: '1.2em',
    }

    return (
      <div 
        style={{
          height: '100%',
          maxWidth: '871px',
          margin: 'auto',
          color: this.state.textColor,
          backgroundColor: this.state.backgroundColor,
        }}
      > 
        <div 
          id="portfolio" 
          className={"container-md"} 
          style={portfolioStyle}
        >
          <Header resumePage={true}/>
          <Skills resumePage={true}/>
          <hr/>
          <br/>
          <Projects resumePage={true}/>
          <br/>
        </div>
      </div>
    );
  }
}


class Github extends Component {
  render() {
    return(
      <div id="github-container" >
        <h3 className="title"><strong>DO I HAVE A GITHUB?</strong></h3>
        <p id="github-text" style={{
            fontSize: 28,
        }}>Yes.</p>
        <p className='github-text'><a  href="http://www.github.com/sleighs" target="blank">github.com/sleighs</a></p>
      </div>
    )
  }
  
}

const DarkMode = (props) => {
  const { 
    modeState,
    toggle
  } = props

  const [darkModeState, getDarkModeState] = useState(modeState)

  return(
    <div id="dark-mode-container" 
      style={{
        display: 'none',
        position: 'absolute',
      }}>
      <button onClick={()=>{
        if (darkModeState === true){
          toggle()
          getDarkModeState(false)
        } else {
          toggle()
          getDarkModeState(true)
        }

        //console.log('darkMode ', modeState )
      }}>
        {modeState === true ? 'Dark On' : 'Light On'}
      </button>
    </div>
  )
}

export default Resume;
