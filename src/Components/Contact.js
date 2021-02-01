import React, { Component } from 'react';
import config from '../Resources/config';
import axios from 'axios';

import Firebase from 'firebase';
import '../App.css';
const API_PATH = 'http://192.168.1.18:3000/portfolio/src/api/message.php';

class Contact extends Component {
    constructor(props){
        super(props);
        
        //Firebase.initializeApp(config.firebase);
        this.state = {
            name: '',
            email: '',
            message: '',
            dataSent: ''
       }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.resetSend = this.resetSend.bind(this)
    }
    componentDidMount() {
        //console.log(Firebase)
    }

    handleSubmit(event) {
        /*axios({
            method: 'post',
            url: API_PATH,
            headers: {
                'content-type': 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log('axios results', result.data)
            this.setState({
                dataSent: result.data.sent,
            })
            //console.log(this.state)
        })
        .catch(error => this.setState({
            error: error.message
        }));

        event.preventDefault();*/
        console.log(this.state);

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
            fontSize: '1.2em'
        }
        let formOptionStyle = {
            textAlign: 'center'
        }
        let contactFormStyle = {
            maxWidth: 450,
            margin: 'auto',
            padding: '0 3%'
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
            borderRadius: '25px'
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
            borderRadius: '25px'
        }
        
        return (
            <div className={"container"} id="contact-container">
                <div id="contact-header">
                    <h3 id="contact-title"><strong>HOW CAN YOU REACH ME?</strong></h3>
                </div>
                <div style={contactInfoStyle}>
                    <a href="mailto:wsright987@gmail.com">WSRIGHT987@GMAIL.COM</a>
                    <br/>
                    <strong>609-472-2897</strong>
                </div>
                    
                {this.state.dataSent ?
                <div className="msg">
                    <br/>
                    <h2>MESSAGE SENT</h2>
                    <br/>
                    <p>Thanks for your time.</p>
                    <button className="new-message-btn" style={contactFormBtn2} onClick={(e)=>{this.resetSend()}}>New Message</button>
                </div> :
                <form style={contactFormStyle} >
                    <div style={formOptionStyle}>
                        <p>Or use this contact form below:</p>
                    </div>
                    <div className="form-group"> 
                        <label name="inputName">Your Name</label>
                        <input type="text" className="form-control" id="name-input" name="name" value={this.state.name}  onChange={(e)=>{this.setState({ name: e.target.value })}}/>
                    </div>
                    <div className="form-group">
                        <label name="inputEmail">Your Email</label>
                        <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" value={this.state.email} onChange={(e)=>{this.setState({ email: e.target.value })}}/>
                    </div>
                    <div className="form-group">
                        <label name="inputMessage" className="form-text">Your Message </label>
                        <textarea type="text" className="form-control" id="message-input" name="text-area" value={this.state.message} onChange={(e)=>{this.setState({ message: e.target.value })}}/>
                    </div>
                    <input type="submit" className={"input for-control submit"} style={contactFormBtn} value="Send" onClick={(e)=>{this.handleSubmit(e)}}/>
                </form>}
            </div>
        )
    }
}

export default Contact;