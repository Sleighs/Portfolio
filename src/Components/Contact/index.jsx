import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import { ThemeContext } from '../../Context/ThemeContext';
import './style.css';

const Contact = () => {
    const { setPageLocation } = useContext(DataContext);
    const { theme } = useContext(ThemeContext);
    const hiddenRef = useRef();
    const [copyStatus, setCopyStatus] = useState({
        email: false,
        phone: false,
        btc: false,
        xrp: false,
        xrpMemo: false,
        cashapp: false
    });

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    
    const scrollHandler = () => {
      if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop + 125) {
        setPageLocation('contact');
      }
    };

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyStatus(prev => ({ ...prev, [type]: true }));
            setTimeout(() => {
                setCopyStatus(prev => ({ ...prev, [type]: false }));
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const copyXRPDetails = async () => {
        try {
            const xrpAddress = 'rNbwQhHxJiDX6QwzHzxy4qRR3YuY4JyqS5';
            const xrpMemo = '1234567'; // Replace with your actual memo
            await navigator.clipboard.writeText(`Address: ${xrpAddress}\nMemo: ${xrpMemo}`);
            setCopyStatus(prev => ({ ...prev, xrp: true }));
            setTimeout(() => {
                setCopyStatus(prev => ({ ...prev, xrp: false }));
            }, 2000);
        } catch (err) {
            console.error('Failed to copy XRP details: ', err);
        }
    };

    return (
      <div className="contact-section" id="contact-container" ref={hiddenRef}>
        <div className="contact-section__header">
          <h2 className="contact-section__title">Let's Build Something Amazing</h2>
          <p className="contact-section__subtitle">I'm always excited to hear about new projects.</p>
        </div>

        <div className="contact-section__content">
          <div className="contact-section__grid">
            <div className="contact-section__main">
              <div className="contact-section__card contact-section__card--primary">
                <div className="contact-section__card-content">
                  <h3>Get in Touch</h3>
                  <p>Whether you're looking to build something new or explore technical possibilities, I'd love to hear about it. I'm always open to exploring new ideas and collaborations.</p>
                  <div className="contact-section__cta">
                    {/* <a href="mailto:swrightdev@gmail.com" className="contact-section__button contact-section__button--primary">
                      Send an Email
                    </a> */}
                    {/* <a href="https://calendly.com/sleighs" target="_blank" rel="noopener noreferrer" className="contact-section__button contact-section__button--secondary">
                      Schedule a Call
                    </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-section__info">
              <div className="contact-section__info-card">
                <div className="contact-section__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3>Let's Talk</h3>
                <div className="contact-section__info-row">
                  <p>+1 (609) 742-2897</p>
                  <button 
                    className="contact-section__copy-button"
                    onClick={() => copyToClipboard('+1 (609) 742-2897', 'phone')}
                    aria-label="Copy phone number"
                  >
                    {copyStatus.phone ? (
                      <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    ) : (
                      <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                      </svg>
                    )}
                  </button>
                </div>
                <p className="contact-section__info-note">Available Monday - Friday, 9am - 5pm EST</p>
              </div>

              <div className="contact-section__info-card">
                <div className="contact-section__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3>Email Me</h3>
                <div className="contact-section__info-row">
                  <p>swrightdev@gmail.com</p>
                  <button 
                    className="contact-section__copy-button"
                    onClick={() => copyToClipboard('swrightdev@gmail.com', 'email')}
                    aria-label="Copy email address"
                  >
                    {copyStatus.email ? (
                      <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    ) : (
                      <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                      </svg>
                    )}
                  </button>
                </div>
                <p className="contact-section__info-note">I typically respond within 24 hours</p>
              </div>

              <div className="contact-section__info-card">
                <div className="contact-section__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h3>Location</h3>
                <p>South Jersey, NJ, USA</p>
                <p className="contact-section__info-note">Available for remote work worldwide</p>
              </div>

              <div className="contact-section__info-card">
                <div className="contact-section__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <h3>GitHub</h3>
                <a href="https://github.com/sleighs" target="_blank" rel="noopener noreferrer" className="contact-section__info-link">
                  <p>github.com/sleighs</p>
                </a>
                <p className="contact-section__info-note">Check out my projects and contributions</p>
              </div>
            </div>

            <div className="contact-section__donate">
              <div className="contact-section__info-card donate-card">
                <div className="contact-section__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c0 1.4-1.4 2.5-2.8 2.5-1.4 0-2.8-1.1-2.8-2.5V9.5C9.2 8.1 10.6 7 12 7z"/>
                  </svg>
                </div>
                <h3>Support My Work</h3>
                <p className="donate-description">
                  If you find my projects helpful or interesting, consider sharing them with others or reaching out to say hi. Your support helps me continue creating open-source tools and engaging content.
                </p>
                <div className="donate-options">
                  <div className="donate-option">
                    <h4>Bitcoin</h4>
                    <div className="contact-section__info-row">
                      <p className="crypto-address">3Gi4kHsnoXfcVU44drVVXmSGd6cNjURNrg</p>
                      <button 
                        className="contact-section__copy-button"
                        onClick={() => copyToClipboard('3Gi4kHsnoXfcVU44drVVXmSGd6cNjURNrg', 'btc')}
                        aria-label="Copy Bitcoin address"
                      >
                        {copyStatus.btc ? (
                          <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        ) : (
                          <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="donate-option">
                    <h4>XRP</h4>
                    <div className="crypto-details">
                        <div className="contact-section__info-row">
                            <p className="crypto-address">rwnYLUsoBQX3ECa1A5bSKLdbPoHKnqf63J</p>
                            <button 
                                className="contact-section__copy-button"
                                onClick={() => copyToClipboard('rwnYLUsoBQX3ECa1A5bSKLdbPoHKnqf63J', 'xrp')}
                                aria-label="Copy XRP address"
                            >
                                {copyStatus.xrp ? (
                                    <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                    </svg>
                                ) : (
                                    <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="contact-section__info-row">
                            <p className="crypto-address memo">Memo: 1620796148</p>
                            <button 
                                className="contact-section__copy-button"
                                onClick={() => copyToClipboard('1620796148', 'xrpMemo')}
                                aria-label="Copy XRP memo"
                            >
                                {copyStatus.xrpMemo ? (
                                    <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                    </svg>
                                ) : (
                                    <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                  <div className="donate-option">
                    <h4>Cash App</h4>
                    <div className="contact-section__info-row">
                      <p>$samuelxwright</p>
                      <button 
                        className="contact-section__copy-button"
                        onClick={() => copyToClipboard('$samuelwright', 'cashapp')}
                        aria-label="Copy Cash App ID"
                      >
                        {copyStatus.cashapp ? (
                          <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        ) : (
                          <svg className="contact-section__copy-icon" viewBox="0 0 24 24">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;