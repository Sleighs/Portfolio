import React from 'react';
import githubPic from '../../Resources/Images/portfolio-github.png';
import emailPic from '../../Resources/Images/envelope-solid.png';

import './style-mobile.css';
import './style.css'
import { Contact } from '../../Components';

const ContactPage = (props) => {
  return (
    <div id='contact-container'>
      <div className='section contact-section' id='contact'>
        <div id="contact-header">
            <h3 id="contact-title" className="section-title"><strong>Contact</strong></h3>
        </div>
        <div style={{display: 'flex',}}>                
            <div className="img-contact-link">
                <img className="" alt="" src={emailPic}
                    style={{
                        width: 20,
                        marginRight: 8,
                        marginBottom: 5,
                    }}/>
                <a className="portfolio-link" 
                    href="mailto:wsright987@gmail.com">wsright987@gmail.com</a>
            </div>
            <div className="img-contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{
                    width: 20,
                    marginRight: 8,
                    marginBottom: 5,
                }}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                <a className="portfolio-link" 
                    href="https://www.linkedin.com/in/samuelwrightdev/">Samuel Wright</a>
            </div>
            <div className="img-contact-link">
                <img className="" alt="" src={githubPic}
                    style={{
                        width: 20,
                        marginRight: 8,
                        marginBottom: 5,
                    }}/>
                <a className="portfolio-link" 
                    href="http://www.github.com/sleighs" target="blank">github.com/sleighs</a>
            </div>
        </div>

        <Contact />
      </div>
    </div>
  )
}

export default ContactPage;
