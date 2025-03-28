import React, { useEffect, useRef } from 'react';
import './style.css';

export default function Tooltip({ commands, visible, onClose }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="tooltip__container">
      <div className="tooltip__content" ref={contentRef}>
        <button className="tooltip__close" onClick={onClose}>×</button>
        <h3>Available Commands:</h3>
        <ul className="tooltip__list">
          {Object.entries(commands).map(([command, description]) => (
            <li key={command}>
              <code>{command}</code>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}