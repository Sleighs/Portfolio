import React, { Component } from 'react';
import githubPic from '../../Resources/Images/portfolio-github.png';
import emailPic from '../../Resources/Images/envelope-solid.png';

import { db } from '../../firebase';
import './style.css'

class Contact extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: '',
            email: '',
            message: '',
            dataSent: ''
       }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.resetSend = this.resetSend.bind(this)
    }

    makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = 10;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    handleSubmit(event) {
        // Make a unique name for the message
        var d = new Date();
        var msgName = String(this.state.name + '-' + d.getTime());

        // Get date of message
        var date = String( d.getMonth() + 1) + '-' + String( d.getDate()) + '-' + String(d.getFullYear())

        // Get time of message
        var minutes = ()=>{
            var a;
            if (d.getMinutes() < 10) {
                a = String('0' + d.getUTCMinutes());
            } else {
                a = String(d.getUTCMinutes());
            }

            return a;
        }

        var time = String(d.getHours()) + ':' + minutes() + '.' + String(d.getSeconds());
        
        // Make new id
        var id = this.makeid(10);

        // Add message to database
        db.collection("messages").doc(msgName).set({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            date: date,
            time: time,
            timezone: d.getTimezoneOffset(),
            id: id
        })
        .then(() => {
            console.log("Great news! Message sent successfully!");
            /*console.log({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
                date: date,
                time: time,
                timezone: d.getTimezoneOffset(),
                id: id
            })*/
        })
        .catch((error) => {
            console.error("Krikey! Error sending message: ", error);
        });

        // For component to show message was sent
        if (!this.state.datasent){
            this.setState({dataSent: true});
        } 
    }

    resetSend() {
        this.setState({dataSent: false});
    }
    
    render (){
        let contactInfoStyle = {
            textAlign: 'center',
            marginTop: 15,
            width: '100%',
        }
        let contactInfoStyle2 = {
            textAlign: 'center',
            fontSize: '.8em',
            color: 'rgb(1,1,1,.25)',
        }
        let formOptionStyle = {
            textAlign: 'center'
        }
        let contactFormStyle = {
            maxWidth: 450,
            margin: 'auto',
            padding: '0 3%',
        }
        let contactFormBtn = {
            margin: 'auto',
            display: 'block',
            padding: '5px 25px',
            outline: 'none',
            background: 'rgba(0, 187, 16, .5)',
            border: '1pt solid white',
            color: 'white',
            fontSize: '1.2em',
            borderRadius: '25px',
        }
        let contactFormBtn2 = {
            margin: 'auto',
            display: 'block',
            padding: '5px 25px',
            outline: 'none',
            background: 'lightgray',
            border: '1pt solid white',
            color: 'white',
            fontSize: '1.2em',
            borderRadius: '25px',
        }
        
        return (
            <div className={"container"} id="contact-container">
                <div id="contact-header" style={{display:'none'}}>
                    <h3 id="contact-title"><strong>CONTACT</strong></h3>
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

                <div>
                    <p style={{
                        textAlign: 'center',
                        display: 'none',
                    }}>
                        Schedule an appointment 
                        <a style={{
                        
                        }} href="https://calendly.com/sleighs" target="blank">here</a>
                    </p>
                </div>

                {this.state.dataSent ?
                <div className="msg"style={{ textAlign: 'center' }}>
                    <br/>
                    <p style={{ fontSize: '1.2em' }}>Great news! Message sent successfully!</p>
                    <button className="new-message-btn" style={contactFormBtn2} onClick={(e)=>{this.resetSend()}}>New Message</button>
                </div> :
                <form style={contactFormStyle} >
                    <div style={formOptionStyle}>
                        <p>Or use this contact form below:</p>
                    </div>
                    <div className="form-group"> 
                        <label name="inputName">Your Name</label>
                        <input type="text" 
                            className="form-control" 
                            id="name-input" 
                            name="name" value={this.state.name}  
                            onChange={(e)=>{this.setState({ name: e.target.value })}}
                        />
                    </div>
                    <div className="form-group">
                        <label name="inputEmail">Your Email</label>
                        <input type="email" 
                            className="form-control" 
                            id="email-input" 
                            aria-describedby="emailHelp" 
                            value={this.state.email} 
                            onChange={(e)=>{this.setState({ email: e.target.value })}}
                        />
                    </div>
                    <div className="form-group">
                        <label name="inputMessage" className="form-text">Your Message </label>
                        <textarea type="text" 
                            className="form-control" 
                            id="message-input" 
                            name="text-area" 
                            value={this.state.message} 
                            onChange={(e)=>{this.setState({ message: e.target.value })}}
                        />
                    </div>
                    <input type="submit" className={"input for-control submit"} style={contactFormBtn} value="Send" onClick={(e)=>{this.handleSubmit(e)}}/>
                    </form>}
            </div>
        )
    }
}

export default Contact;