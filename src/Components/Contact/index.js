import React, { Component } from 'react';

import { db } from '../../firebase';

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

        // Email message to inbox
        /*db.collection('mail').add({
            to: 'wsright987@gmail.com',
            message: {
              sname: this.state.name,
              email: this.state.email,
              message: this.state.message,
              date: date,
              time: time,
              timezone: d.getTimezoneOffset(),
              id: id
            }
          }).then(() => console.log('Queued email for delivery!'));
*/
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
            fontSize: '1.2em',
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
                <div id="contact-header">
                    <h3 id="contact-title"><strong>HOW CAN YOU REACH ME?</strong></h3>
                </div>
                <div style={contactInfoStyle}>
                    <a href="mailto:wsright987@gmail.com">REALITYCALC@GMAIL.COM</a>
                    <br/>
                    <strong>609-472-2897</strong>
                    
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