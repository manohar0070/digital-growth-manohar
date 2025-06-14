
import React, { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show message bubble briefly after component mounts
    const timer = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      {/* Message Bubble */}
      <div 
        className={`absolute bottom-16 right-0 mb-2 mr-2 transition-all duration-300 ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg px-4 py-3 max-w-48 relative border border-gray-200">
          <p className="text-sm text-gray-800 font-medium">
            Hi! How can I help you?
          </p>
          {/* Speech bubble arrow */}
          <div className="absolute bottom-0 right-4 transform translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200 absolute -top-px"></div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918297391899?text=Hello%2C%20I%20visited%20your%20website" 
        target="_blank"
        rel="noopener noreferrer"
        className="group block animate-bounce-gentle hover:animate-none"
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
        onFocus={() => setShowMessage(true)}
        onBlur={() => setShowMessage(false)}
      >
        <div className="w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white">
          <img 
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" 
            alt="Chat on WhatsApp"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </div>
        
        {/* Pulse ring effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
