import React, { Component } from 'react';

class Contact extends Component {
    render (){
        let containerStyle = {
            margin: 'auto'
        }
        
        return (
            <div className={"container", "contact-container", "m-5"} style={containerStyle}>
                <h3>HOW YOU CAN REACH ME?</h3>
                <a href="mailto:wsright987@gmail.com">WSRIGHT987@GMAIL.COM</a>
                <div>Or use this contact form below:</div>
                <form>
                    <div>
                        <span>Your Name </span>
                        <input type="text"></input>
                    </div>
                    <div>
                         <span>Your Email </span>
                        <input type="text"></input>
                    </div>
                    <div>
                        <span>Your Message </span>
                        <input type="text"></input>
                    </div>
                    
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default Contact;