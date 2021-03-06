import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render(){
        return(
            <footer id="footer-container" className="container">
              <p>Thank you for reading!</p>
              <small>
                <a href="http://www.github.com/sleighs/Portfolio" target="blank">View The Source Code</a>
              </small>
            </footer>
        )
    }
}

export default Footer;