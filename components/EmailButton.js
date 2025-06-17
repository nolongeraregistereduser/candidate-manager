import { useState } from 'react';

export default function EmailButton({ email }) {
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSendEmail = () => {
    // Simulate email sending
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  
  return (
    <div className="relative mt-2 sm:mt-0">
      <button
        onClick={handleSendEmail}
        className="px-4 py-2.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors flex items-center shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Send Email
      </button>
      
      {showSuccess && (
        <div className="absolute top-full right-0 mt-2 p-2 bg-green-100 text-green-800 text-sm rounded shadow-md z-10 animate-fade-in">
          Email sent to {email}!
        </div>
      )}
    </div>
  );
}