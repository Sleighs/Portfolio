import React, { useState } from 'react';
import './style.css';

const SupportCopyButton = ({ value, label, copiedValue, onCopy }) => (
    <button
      className="support-copy-button"
      type="button"
      onClick={() => onCopy(value)}
      aria-label={`Copy ${label}`}
    >
      {copiedValue === value ? (
        <svg className="support-copy-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
      ) : (
        <svg className="support-copy-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
      )}
    </button>
);

const Support = () => {
  const [copiedValue, setCopiedValue] = useState('');

  const copyToClipboard = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      setTimeout(() => {
        setCopiedValue(currentValue => currentValue === value ? '' : currentValue);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <section className="support-section" id="support-container">
      <header className="support-section__header">
        <h2 className="support-section__title">Support My Work</h2>
        <p className="support-section__subtitle">
          If you find my projects helpful or interesting, consider sharing them with others or reaching out to say hi. Your support helps me continue creating open-source tools and engaging content.
        </p>
      </header>

      <div className="support-options">
        <div className="support-option">
          <h3>Bitcoin</h3>
          <div className="support-option__address">
            <p>3Gi4kHsnoXfcVU44drVVXmSGd6cNjURNrg</p>
            <SupportCopyButton value="3Gi4kHsnoXfcVU44drVVXmSGd6cNjURNrg" label="Bitcoin address" copiedValue={copiedValue} onCopy={copyToClipboard} />
          </div>
        </div>

        <div className="support-option">
          <h3>XRP</h3>
          <div className="support-option__address">
            <p>rwnYLUsoBQX3ECa1A5bSKLdbPoHKnqf63J</p>
            <SupportCopyButton value="rwnYLUsoBQX3ECa1A5bSKLdbPoHKnqf63J" label="XRP address" copiedValue={copiedValue} onCopy={copyToClipboard} />
          </div>
          <div className="support-option__address">
            <p className="support-option__memo">Memo: 1620796148</p>
            <SupportCopyButton value="1620796148" label="XRP memo" copiedValue={copiedValue} onCopy={copyToClipboard} />
          </div>
        </div>

        <div className="support-option">
          <h3>Cash App</h3>
          <div className="support-option__address">
            <p>$samuelxwright</p>
            <SupportCopyButton value="$samuelxwright" label="Cash App ID" copiedValue={copiedValue} onCopy={copyToClipboard} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
