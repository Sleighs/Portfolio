import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render(){
        return(
            <footer id="footer-container" className="container">
              <p>Thank you for reading!</p>
              <p>
                <a href="http://www.github.com/sleighs/cv" target="blank">View The Source Code</a>
              </p>
            </footer>
        )
    }
}

export default Footer;