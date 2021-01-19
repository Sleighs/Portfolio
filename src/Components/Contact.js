import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
    render (){
        let titleStyle = {
            textAlign: 'center',
            color: '#62c246'
        }
        let contactInfoStyle = {
            textAlign: 'center'
        }
        let infoTextStyle = {
            color: 'rgb(0,0,0)'
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
                <div style={titleStyle}>
                    <h3 className="title"><strong>HOW CAN YOU REACH ME?</strong></h3>
                </div>
                <div style={contactInfoStyle}>
                    <a href="mailto:wsright987@gmail.com">WSRIGHT987@GMAIL.COM</a>
                    <br/>
                    <strong>609-472-2897</strong>
                    <div style={infoTextStyle}>Or use this contact form below:</div>
                </div>
                
                <form style={contactFormStyle}>
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