import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            messaage: '',
            dataSent: ''
       }
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
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

                <form style={contactFormStyle} onSubmit={this.handleSubmit}>
                    <div style={formOptionStyle}>
                        <p>Or use this contact form below:</p>
                    </div>
                    <div className="form-group"> 
                        <label for="inputName">Your Name</label>
                        <input type="text" className="form-control" id="name-input" name="name" value={this.state.name}  onChange={(e)=>{this.setState({ name: e.target.value })}}/>
                    </div>
                    <div className="form-group">
                        <label for="inputEmail">Your Email</label>
                        <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" value={this.state.email} onChange={(e)=>{this.setState({ email: e.target.value })}}/>
                    </div>
                    <div className="form-group">
                        <label for="inputMessage" className="form-text">Your Message </label>
                        <textarea type="text" className="form-control" id="message-input" name="text-area" value={this.state.message} onChange={(e)=>{this.setState({ message: e.target.value })}}/>
                    </div>
                    <input type="submit" className={"input for-control submit"} style={contactFormBtn} value="Send" onClick={(e)=>{this.handleSubmit(e)}}/>
                </form>
            </div>
        )
    }
}

export default Contact;