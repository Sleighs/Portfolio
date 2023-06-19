import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './style.css';

export default function ContactInfo() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`contact__info contact__info-${theme}`}>
        <div className={`home-contact-info__link-${theme} home-contact-info__link1`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16" 
                style={{
                    width: 20,
                    marginRight: 8,
                    marginBottom: 4,
                }}>
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
            <a className={`contact-info-link`} target="_blank" href="mailto:wsright987@gmail.com" rel="noreferrer">wsright987@gmail.com</a>
        </div>
        <div className={`home-contact-info__link-${theme} home-contact-info__link2`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"
                style={{
                    width: 20,
                    marginRight: 8,
                    marginBottom: 4,
                }}>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <a className={`contact-info-link`} target="_blank" href="http://github.com/sleighs" rel="noreferrer">github.com/sleighs</a>
        </div>
        <div className={`home-contact-info__link-${theme} home-contact-info__link3`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16"
                style={{
                    width: 20,
                    marginRight: 8,
                    marginBottom: 4,
                }}>
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
            </svg>

            <a className={`contact-info-link`} target="_blank" href="tel:609-472-2897" rel="noreferrer">+1 609 472 2897</a>
        </div>
    </div>
  )
}
