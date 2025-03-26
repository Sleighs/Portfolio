import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import './contact-form.css'
import { ThemeContext } from '../../Context/ThemeContext';

export default function ContactForm(props) {
  const { 
    handleProjectFormSubmit, 
    formData, 
    setFormData,
    dataSent, 
    setDataSent  
  } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`contact-form contact-form-${theme}`}>
      <div className="contact-form__content">
        <form className="contact-form__form"> 
          <h2>Have a Project?</h2>
          
          <div className={`contact-form__form-inputs`}>
            <div className="contact-form__input">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Name"/>
            </div>  
            <div className="contact-form__input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email"/>
            </div>
            <div className="contact-form__input">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Phone Number"/>
            </div>
          </div>

          <div className="contact-form__form-inputs2">
            <label htmlFor="services">Type Of Project</label>
            <select id="services" name="services" multiple>
              <option value="websiteDesign">Website Design</option>
              <option value="seo">Searh Engine Optimization</option>
              <option value="googleReputation">Google Reputation Management</option>
              <option value="payPerClick">Social Media</option>
              <option value="other">Other</option>
              {/* <option value="webDevelopment">Web Development</option> */}
              {/* <option value="branding">Branding</option> */}
              {/* <option value="digitalMarketing">Digital Marketing</option> */}
            </select>
          </div>

          <div className="contact-form__form-inputs3">
            <div className="contact-form__input">
              <label htmlFor="website"> Website/Domain (If Applicable)</label>
              <input type="url" id="website" name="website" placeholder="Website"/>
            </div>
            <div className="contact-form__input" style={{display: 'none'}}>
              <label htmlFor="budget">Estimated Budget:</label>
              <select id="budget" name="budget">
                <option value="" disabled defaultValue={'1000'}>Select your budget range</option>
                <option value="1000">$1,000 - $5,000</option>
                <option value="5000">$5,000 - $10,000</option>
                <option value="10000">$10,000 - $20,000</option>
                <option value="20000">$20,000 - $50,000</option>
                <option value="50000">$50,000+</option>
              </select>
            </div>
          </div>

          <div className="" style={{display: 'none'}}>
            <label htmlFor="timeline">Project Timeline:</label>
            <select id="timeline" name="timeline">
              <option value="" disabled selected>Select your timeline</option>
              <option value="immediate">Immediate (1-2 weeks)</option>
              <option value="short">Short Term (1-2 months)</option>
              <option value="long">Long Term (2+ months)</option>
            </select>
          </div>

          {/* <label htmlFor="details">Project Details</label> */}
          <textarea id="contact-form__details" name="details" rows="5" placeholder="How can we help you?"></textarea>

          <button type="submit" className="contact-form__send-button"
          // onClick={() => handleProjectFormSubmit()}
          >Send</button>
        </form>
      </div>
    </div>
  )
}
