import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import { ThemeContext } from '../../Context/ThemeContext';
import githubPic from '../../Resources/Images/portfolio-github.png';
import emailPic from '../../Resources/Images/envelope-solid.png';
import mobilePic from '../../Resources/Images/mobile-icon.png';
import mobile2Pic from '../../Resources/Images/phone.svg';
import mobile3Pic from '../../Resources/Images/phone-fill.svg';
 
import { db } from '../../firebase';
import './style.css'

const Contact = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [dataSent, setDataSent] = useState(false)

    const { setPageLocation } = useContext(DataContext)
    const { theme } = useContext(ThemeContext)

    const hiddenRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    
    const scrollHandler = () => {
        if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop + 125) {
            setPageLocation('contact')
        }
    }

    function makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = 10;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleChange = e => {
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(event) {

        // Make a unique name for the message
        var d = new Date();
        var msgName = String(formData.name + '-' + d.getTime());

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
        var id = makeid(10);

        // Add message to database
        db.collection("messages").doc(msgName).set({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            date: date,
            time: time,
            timezone: d.getTimezoneOffset(),
            id: id
        })
        .then(() => {
            console.log("Great news! Message sent successfully!");
            /*console.log({
                name: formData.name,
                email: formData.email,
                message: formData.message,
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
        if (!dataSent){
            setDataSent(true)
        } 
    }

    function resetSend() {
        setDataSent(false)
    }
    
    
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

    let contactFormBtn = {
        margin: 'auto',
        display: 'block',
        padding: '2px 25px',
        outline: 'none',
        background: 'rgba(255, 71, 70, 1)',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.4em',
        width: '100%',
        border: '0pt solid white',
        //borderRadius: '25px',
    }
    let contactFormBtn2 = {
        margin: 'auto',
        display: 'block',
        padding: '5px 25px',
        outline: 'none',
        background: 'white',
        border: '1pt solid rgba(255,71,70)',
        color: 'black',
        fontSize: '1.2em',
        borderRadius: '25px',
    }
        
    return (
        <div className={"container"} id="contact-container" ref={hiddenRef}>
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

            {dataSent 
            ? <div className="msg"style={{ textAlign: 'center' }}>
                <br/>
                <p style={{ fontSize: '1.2em' }}>Message sent!</p>
                <button className="new-message-btn" 
                    style={contactFormBtn2} 
                    onClick={(e)=>{resetSend()}}>New Message</button>
            </div> 
            : <form className='contact-form' >
                <div style={/*formOptionStyle, */{display: 'none',}} >
                    <p>Or use this contact form below:</p>
                </div>
                <div style={{display: 'none',}} className="form-group contact-form__input-container"> 
                    <label name="inputName" className="form-text">Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="name-input" 
                        
                        name="name" value={formData.name}  
                        onChange={(e)=>{handleChange(e)}}
                    />
                </div>
                <div className="form-group contact-form__input-container">
                    <label name="inputEmail" className="form-text">Email</label>
                    <input type="email" 
                        className="form-control" 
                        id="email-input" 
                        placeholder='your@email.com'
                        aria-describedby="emailHelp" 
                        value={formData.email} 
                        name="email"
                        onChange={(e)=>{handleChange(e)}}
                    />
                </div>
                <div className="form-group contact-form__input-container">
                    <label name="inputMessage" className="form-text">Message</label>
                    <textarea type="text" 
                        className="form-control" 
                        id="message-input" 
                        placeholder='Message...'
                        name="message" 
                        value={formData.message} 
                        onChange={(e)=>{handleChange(e)}}                    />
                </div>
                <input type="submit" className={"input for-control submit"} style={contactFormBtn} value="Send" 
                onClick={(e)=>{e.preventDefault(); handleSubmit(e);}}/>
                </form>}
        </div>
    )
}

export default Contact;