import React, { useContext, useEffect, useRef, useState } from 'react';
import './NavProposalForm.css';  // Changed from './ProposalRequestForm.css'
import { DataContext } from '../../Context/DataContext';

const NavProposalForm = () => {
  const { 
    isOpen, 
    setIsOpen, 
    toggleForm, 
    formData, 
    setFormData, 
    handleProjectFormSubmit 
  } = useContext(DataContext);
  const formRef = useRef(null);
  
  // State to hold form data
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   company: '',
  //   website: '',
  //   services: [],
  //   timeline: '',
  //   details: ''
  // });

  const [isClosing, setIsClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore clicks on the toggle buttons
      if (event.target.closest('#openForm') || 
          event.target.closest('.navigation--hamburger')) {
        return;
      }
      
      // Only close if clicking outside the form container
      if (formRef.current && !formRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore clicks on the toggle buttons
      if (event.target.closest('#openForm') || 
          event.target.closest('.navigation--hamburger')) {
        return;
      }
      
      // Only close if clicking outside the form
      if (formRef.current && !formRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Load data from local storage
      const savedData = JSON.parse(localStorage.getItem('proposalFormData'));
      const savedTimestamp = localStorage.getItem('proposalFormDataTimestamp');

      // Check if the saved data is still valid (not expired)
      if (savedData && savedTimestamp) {
        const currentTime = new Date().getTime();
        const expirationTime = parseInt(savedTimestamp) + 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

        if (currentTime < expirationTime) {
          setFormData(savedData);
        } else {
          localStorage.removeItem('proposalFormData');
          localStorage.removeItem('proposalFormDataTimestamp');
        }
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  // Update the handleChange function to handle multiple selections
  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    let newValue = value;

    // Handle multiple select
    if (type === 'select-multiple') {
      newValue = Array.from(selectedOptions).map(option => option.value);
    }

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: newValue };
      localStorage.setItem('proposalFormData', JSON.stringify(updatedData));
      localStorage.setItem('proposalFormDataTimestamp', new Date().getTime().toString());
      return updatedData;
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Call the context submit handler and wait for completion
    const doSubmit = async () => {
      try {
        await handleProjectFormSubmit();
        // Clear local storage after submission
        localStorage.removeItem('proposalFormData');
        localStorage.removeItem('proposalFormDataTimestamp');
        setSubmitted(true);
      } catch (err) {
        console.error('Error submitting proposal:', err);
      }
    };

    doSubmit();
  };

  if (!isOpen) return null;

  return (
    <div className="proposal-form-overlay">
      <div 
        ref={formRef}
        className={`proposal-form-container ${isClosing ? 'closing' : ''}`}
      >
        <div className="proposal-form-header">
          {!submitted && <h2>Request a Proposal</h2>}          
          {!submitted && <p>Let's discuss your project and make it happen</p>}
          <button 
            className="proposal-form-close" 
            onClick={handleClose}
          >
            ×
          </button>
        </div>
        
        {submitted ? (
          <div className="proposal-submitted">
            <h3>Thanks — proposal request sent!</h3>
            <p>I received your request and will respond shortly.</p>
            <div className="proposal-submitted-actions">
              <button className="send-another-button proposal-submitted-button" onClick={() => {
                // reset form data for a new submission
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  projectType: [],
                  website: '',
                  budget: '',
                  message: '',
                  company: '',
                  services: [],
                  timeline: '',
                  details: ''
                });
                setSubmitted(false);
              }}>Send another</button>
              <button className="new-button proposal-submitted-button" onClick={() => {
                setSubmitted(false);
              }}>Go Back</button>
              {/* <button className="close-button proposal-submitted-button" onClick={handleClose}>Close</button> */}

             
            </div>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="website">Current Website (if any)</label>
            <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Services</label>
            <div className="services-options">
              {[
                { value: 'webDesign', label: 'Web Design' },
                { value: 'webDevelopment', label: 'Web Development' },
                { value: 'backendDevelopment', label: 'Backend Development' },
                { value: 'seo', label: 'SEO' },
                { value: 'branding', label: 'Branding' },
                { value: 'digitalMarketing', label: 'Digital Marketing' },
                { value: 'otherServices', label: 'Other Services' }
              ].map((service) => (
                <label key={service.value} className="service-option">
                  <input
                    type="checkbox"
                    name="services"
                    value={service.value}
                    checked={formData.services.includes(service.value)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        services: e.target.checked 
                          ? [...prev.services, value]
                          : prev.services.filter(s => s !== value)
                      }));
                    }}
                  />
                  <span>{service.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* <div className="form-group">
            <label htmlFor="timeline">Project Timeline</label>
            <select 
              id="timeline" 
              name="timeline" 
              className="timeline-select"
              value={formData.timeline} 
              onChange={handleChange}
            >
              <option value="none">Select your timeline</option>
              <option value="immediate">Immediate</option>
              <option value="short">Short Term</option>
              <option value="long">Long Term</option>
            </select>
          </div> */}

          <div className="form-group">
            <label htmlFor="details">Project Details</label>
            <textarea id="details" name="details" rows="5" value={formData.details} onChange={handleChange} placeholder="Provide more details about your project..."></textarea>
          </div>

          <button type="submit" className="submit-button">Send Proposal Request</button> 
        </form>
      )}
      </div>
    </div>
  );
};

export default NavProposalForm;
