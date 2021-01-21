import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
    render (){
        let contactInfoStyle = {
            textAlign: 'center',
            fontSize: '1.2em'
        }
        let formOptionStyle = {
            textAlign: 'center'
        }
        let contactFormStyle = {
            maxWidth: 450,
            margin: 'auto'
        }
        let contactFormBtn = {
            /*margin: 'auto',
            padding: '5px 15px',
            outline: 'none'*/
        }
        
        return (
            <div className={"container"} id="contact-container">
                <div id="contact-title">
                    <h3><strong>HOW CAN YOU REACH ME?</strong></h3>
                </div>
                <div style={contactInfoStyle}>
                    <a href="mailto:wsright987@gmail.com">WSRIGHT987@GMAIL.COM</a>
                    <br/>
                    <strong>609-472-2897</strong>
                    
                </div>

                
                <form style={contactFormStyle}>
                    <div style={formOptionStyle}>
                        <p>Or use this contact form below:</p>
                    </div>
                    <div className="form-group"> 
                        <label for="inputName">Your Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="inputEmail1">Your Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label for="inputMessage" className="form-text">Your Message </label>
                        <textarea type="text" className="form-control"/>
                    </div>
                    <input type="submit" className={"input for-control submit"} style={contactFormBtn} value="Send"/>
                </form>
            </div>
        )
    }
}

export default Contact;