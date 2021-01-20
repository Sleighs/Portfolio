import React, { Component } from 'react';
import AppManager from '../AppManager';
import '../App.css';

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
        //var name = document.getElementById("name");
        //var title = document.getElementById("title");
        //var log = document.getElementById("log");

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
          randomTime = Math.floor(Math.random() * 225) + 25;
        } else {
          randomTime = Math.floor(Math.random() * 275) + 75;
        }
        AppManager.newIntervalTime = randomTime;

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

              //stop after full word delete
              clearInterval(AppManager.interval);


              var rand1 = Math.floor(Math.random() * 1750) + 200;

              AppManager.primaryInterval = setTimeout(()=>{
                this.init('start');
              }, rand1)
              

      
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
        return (
            <div id="header-container" className={"continer title"} onClick={ ()=>{this.init(this.state.n)}}>
                <div id="name-container">
                  <h2 id="name"><strong>SAMUEL WRIGHT</strong></h2>
                </div>
                <strong>
                  <span id="title">SOFTWARE </span>
                  <span id="log"></span>
                  <span id='glyph'> |</span>
                </strong>
            </div>
        )
    }
}

export default Header;