import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'

export default function ContactForm(props) {
  const { isOpen, toggleForm } = useContext(DataContext);

  return (
    <div className={`proposal-form ${isOpen ? 'active' : ''}`}>
      {toggleForm && <button onClick={toggleForm} id="closeForm" className="close-btn">&times;</button>}
      <h2>Request a Proposal</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="company">Company Name:</label>
        <input type="text" id="company" name="company" />

        <label htmlFor="website">Current Website (if any):</label>
        <input type="url" id="website" name="website" />

        <label htmlFor="budget">Estimated Budget:</label>
        <select id="budget" name="budget">
          <option value="" disabled selected>Select your budget range</option>
          <option value="1000">$1,000 - $5,000</option>
          <option value="5000">$5,000 - $10,000</option>
          <option value="10000">$10,000 - $20,000</option>
          <option value="20000">$20,000 - $50,000</option>
          <option value="50000">$50,000+</option>
        </select>

        <label htmlFor="services">Services Needed:</label>
        <select id="services" name="services" multiple>
          <option value="webDesign">Web Design</option>
          <option value="webDevelopment">Web Development</option>
          <option value="seo">SEO</option>
          <option value="branding">Branding</option>
          <option value="digitalMarketing">Digital Marketing</option>
        </select>

        <label htmlFor="timeline">Project Timeline:</label>
        <select id="timeline" name="timeline">
          <option value="" disabled selected>Select your timeline</option>
          <option value="immediate">Immediate (1-2 months)</option>
          <option value="short">Short Term (2-4 months)</option>
          <option value="long">Long Term (4+ months)</option>
        </select>

        <label htmlFor="details">Project Details:</label>
        <textarea id="details" name="details" rows="5" placeholder="Provide more details about your project..." required></textarea>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  )
}
