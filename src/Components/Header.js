import React, { Component } from 'react';
import AppManager from '../AppManager';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // The algorithm types and deletes each word in the array
            arr: ["ENGINEER", "ARCHITECT", "DEVELOPER"],
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
      this.init('start');
    }

    getText() {
        var name = document.getElementById("name");
        var title = document.getElementById("title");
        var log = document.getElementById("log");
        var initBtn = document.getElementById("init-btn");

        // Get word from array
        var word = this.state.arr[this.state.pos];
        // Transform word from string to array
        var newArr = word.split("");

        var text = this.state.arr[this.state.pos];

        var typedText = this.state.typedText;
        var reverse = this.state.reverse;
        var a = this.state.a;
        var newText = this.state.newText;
      
        //count += 1;
      
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
      
              // Stops interval after one cycle through word list
              /*if (this.state.pos === this.state.arr.length - 1) {
                  this.setState({
                    n: "start"
                  });
                  initBtn.innerHTML = "Start";
                  
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
            if (a.join("") === word) {
              reverse = true;
            }
          }
        }

        this.setState({
            typedText: typedText,
            reverse: reverse,
            a: a,
            newText: newText

        })
      }
            
      init(type) {
        var initBtn = document.getElementById("init-btn");
        var log = document.getElementById("log");

        //var rand;
      
        if (type === "stop") {
            this.setState({
                n: 'start'
            });
          
          initBtn.innerHTML = "Start";
          clearInterval(AppManager.interval);
        }
      
        if (type === "start") {
            this.setState({
                n: 'stop'
            });

            AppManager.interval = setInterval((interval) => {
                this.getText();
                log.innerHTML = this.state.newText;
            }, 175)
            initBtn.innerHTML = "Stop";
        }
      }

    render (){
        let containerStyle = {
            textAlign: 'center',
            margin: 'auto',
            fontSize: '2em',
            fontWeight: 'bold'
        }
        let buttonStyle = {
          display: 'none'
        }
        
        return (
            <div className={"header-container", "m-5"} style={containerStyle}>
                <span id="name">SAMUEL WRIGHT</span>
                <br/>
                <span id="title">SOFTWARE </span>
                <span id="log"></span>
                <span id='glyph'> |</span>
                <button id={'init-btn'} onClick={ ()=>{this.init(this.state.n)}} style={buttonStyle}>Start</button>
            </div>
        )
    }
}

export default Header;