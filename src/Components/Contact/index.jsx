import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import { ThemeContext } from '../../Context/ThemeContext';

// import { db } from '../../firebase';
import './style.css'
import ContactForm from './ContactForm';

const Contact = (props) => {
    const { 
      setPageLocation, isOpen, setIsOpen, toggleForm,
      formData, setFormData, dataSent, setDataSent 
    } = useContext(DataContext)
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


    const handleChange = e => {
      setFormData(prevData => {
        return {
          ...prevData,
          [e.target.name]: e.target.value
        }
      })
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
      fontFamily: 'Cabin',
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
      fontFamily: 'Cabin',
    }
        
    return (
      <div className="container" id="contact-container" ref={hiddenRef}>
        <div className="section-header"  id="contact">
          <h3 className="section-title"><strong>Get in Touch</strong></h3>
        </div>
        
        <div className="contact__content">
          
          <div style={{ display: 'none', textAlign: 'center'}}>
            <div>
              Schedule a demo of feature-rich websites and online marketing solutions
            </div>
            <p>
              Schedule a Quick Call 
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
              onClick={(e)=>{resetSend()}}>
                New Project?
            </button>
          </div> 
          : 
          <>
            <form className='contact-form' style={{display: 'none'}}>
              <div style={{display: '',}} className="form-group contact-form__input-container"> 
                <label name="inputName" className="form-text" style={{display: 'none'}}>Name</label>
                <input type="text" 
                  className={`contact__input contact__input-${theme}`} 
                  id="name-input" 
                  placeholder='Name'
                  name="name" value={formData.name}  
                  onChange={(e)=>{handleChange(e)}}
                />
              </div>
              <div className={`form-group contact-form__input-container form-group-${theme}`} >
                <label name="inputEmail" className="form-text" style={{display: 'none'}}>Email</label>
                <input type="email" 
                  className={`contact__input contact__input-${theme}`} 
                  id="email-input" 
                  placeholder='Email'
                  aria-describedby="emailHelp" 
                  value={formData.email} 
                  name="email"
                  onChange={(e)=>{handleChange(e)}}
                />
              </div>
              <div className={`form-group contact-form__input-container  form-group-${theme}`}>
                <label name="inputMessage" className="form-text" style={{display: 'none'}}>Message</label>
                <textarea type="text" 
                  className={`form-msg contact__input contact__input-${theme}`} 
                  id="message-input" 
                  placeholder='Message'
                  name="message" 
                  value={formData.message} 
                  onChange={(e)=>{handleChange(e)}} 
                />
              </div>
              <input type="submit" className={"input for-control submit"} style={contactFormBtn} value="Send" 
                onClick={(e)=>{e.preventDefault(); handleSubmit(e);}}/>
            </form>

            <ContactForm />
                     
          </>}
        </div>
      </div>
    )
}

export default Contact;