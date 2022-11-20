import React, { Component } from 'react';
import AppManager from '../../AppManager';
import '../../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // The algorithm types and deletes each word in the array
            arr: [
              /*"ENGINEER", "ARCHITECT", "DEVELOPER", */ 
              "FRONT-END ENGINEER",
              "REACT DEVELOPER",
              "FULL STACK DEVELOPER"
            ],
            pos: 0,
            text: null,
            typedText: [],
            newText: "",
            a: [],
            reverse: false,
            interval: null,
            n: 'start'
        }
 
        this.init = this.init.bind(this);
        this.getText = this.getText.bind(this);
    }

    componentDidMount() {
      AppManager.primaryInterval = setTimeout(()=>{
        this.init('start');
      }, 1090)
      
    }
    // For precise interval times per word
    getInterval(type){
      var time;
      //var random = Math.floor(Math.random() * 2800) + 200;
      
      switch(type){
        case 1:
          time = 500;
          break;
        case 2:
          time = 1800;
          break;
        case 0:
          time = 2000;
          break;
        default:
          time = 2000
      }
      return time;
    }

    getText() {
        // Get word from array
        var word = this.state.arr[this.state.pos];
        // Transform word from string to array
        var newArr = word.split("");

        var typedText = this.state.typedText;
        var reverse = this.state.reverse;
        var a = this.state.a;
        var newText = this.state.newText;

        // Changes the time interval timer for spelling or deleting
        var randomTime;
        if (reverse === true){
          randomTime = Math.floor(Math.random() * 200) + 25;
        } else {
          randomTime = Math.floor(Math.random() * 275) + 75;
        }
        AppManager.newIntervalTime = randomTime;
      
        // Delete text if reverse is true
        if (reverse === true) {
          // Remove last letter from word
          typedText.splice(-1, 1);
          // Build new word
          for (var i = a.length; i > typedText.length; i--) {
            a.splice(-1, 1);
            newText = a.join("");
      
            // Once word is fully deleted switch to next word
            if (a.join("") === "") {
              typedText = [];
              reverse = false;

              //stop after full word delete
              clearInterval(AppManager.interval);


              var rand1 = Math.floor(Math.random() * 1800) + 200;

              AppManager.primaryInterval = setTimeout(()=>{
                this.init('start');
              }, rand1)
              
              // Stops interval after one cycle through word list
              /*if (this.state.pos === this.state.arr.length - 1) {
                  this.setState({
                    n: "start"
                  });
                  //initBtn.innerHTML = "Start";
                  
                  clearInterval(AppManager.interval);
              }*/
      
              // Move to next word or return to first word if at last word
              if (this.state.pos < this.state.arr.length - 1) {
                this.setState({
                    pos: this.state.pos + 1
                });
              } else {
                this.setState({
                    pos: 0
                });
              }
            }
          }
      
          // Type word if reverse is false
        } else if (!this.state.reverse) {
          a = [];

          // Add next letter in word
          typedText.push(newArr[typedText.length]);
      
          // Create new word
          for (var j = 0; j < typedText.length; j++) {
            a.push(newArr[j]);
            newText = a.join("");
      
            // If new word equals complete word make reverse true to begin delete animation
            if (newText === word) {
              reverse = true;

              //stop after full word typed
              clearInterval(AppManager.interval);
              var rand2 = Math.floor(Math.random() * 4000) + 100;
              AppManager.primaryInterval = setTimeout(()=>{
                this.init('start');
              }, rand2)
            }
          }
        }

        // Save the typed text for next iteration
        this.setState({
            typedText: typedText,
            reverse: reverse,
            a: a,
            newText: newText
        })
      }
            
      init(type) {
        var log = document.getElementById("log");
      
        if (type === "stop") {
            this.setState({
                n: 'start'
            });
          
          clearInterval(AppManager.interval);
          clearInterval(AppManager.primaryInterval);
        }
      
        if (type === "start") {
            this.setState({
                n: 'stop'
            });

            AppManager.interval = setInterval((interval) => {
                this.getText();
                log.innerHTML = this.state.newText;
            }, AppManager.newIntervalTime);
        }
      }
  
    render (){

      // Custom styling for resume view
      let HeaderContainerStyle = (
        this.props.resumePage === true 
        ? {
            padding: '3% 1% 5% 1%',
          } 
        : {
          padding: '4% 1%',
        }
      )
      let NameStyle = (
        this.props.resumePage === true 
        ? {
            fontSize: '48px',
          } 
        : {}
      )
      let HeaderTextStyle = (
        this.props.resumePage === true 
        ? {
            marginTop: -15,
            textAlign: 'center',
          } 
        : {
          textAlign: 'center',
        }
      )
      let LogStyle = (
        this.props.resumePage === true 
        ? {
          fontSize: '44px',
          } 
        : {}
      )
      let GlyphStyle = (
        this.props.resumePage === true 
        ? {
            //fontSize: '56px',
          } 
        : {}
      )

        return (
            <div id="header-container" className="container" 
              onClick={ ()=>{this.init(this.state.n)}}
              style={HeaderContainerStyle}
            >
              <div>
                <div id="name-container">
                  <h1 id="name" style={NameStyle}><strong>SAMUEL WRIGHT</strong></h1>
                </div>
                <div className="header-text" id="header-description" 
                  style={HeaderTextStyle}>
                  <h2>
                    <span id="title" >{/* For a static word */}</span>
                    <span id="log" style={LogStyle}></span>
                    <span id='glyph' style={GlyphStyle}>|</span>
                  </h2>
                </div>
              </div>
              {this.props.resumePage === true ? 
                <div className='github-text'
                  style={{
                    textAlign: 'center',
                    margin: 'auto',
                    marginTop: '-15px',
                  }}
                >
                  <span style={{
                    fontSize: 25,
                  }}>
                    (609)<span style={{fontSize: 14,}}> </span>472-2897 &#8226; wsright987@gmail.com
                  </span>
                  <a  href="http://www.github.com/sleighs" 
                    target="blank"
                    style={{
                      color: 'white',
                      fontSize: 35,
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    github.com/sleighs
                  </a>
                </div>
              : <></> }
            </div>
        )
    }
}

export default Header;