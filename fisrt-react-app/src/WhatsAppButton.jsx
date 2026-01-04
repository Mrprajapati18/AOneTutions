import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://api.whatsapp.com/send?phone=918738879939', '_blank');
  };

  return (
    <div className="follow-us-section">
      <h2 className="follow-title">Follow Us</h2>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a 
          href="https://api.whatsapp.com/send?phone=918738879939" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon whatsapp"
          onClick={handleWhatsAppClick}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;