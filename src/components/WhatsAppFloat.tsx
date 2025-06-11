
import React from 'react';

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/918297391899?text=Hello%2C%20I%20visited%20your%20website" 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" 
        alt="Chat on WhatsApp"
      />
    </a>
  );
};

export default WhatsAppFloat;
