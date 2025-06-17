import { useState } from 'react';

export default function CandidateProfile({ candidate }) {
  const [emailSent, setEmailSent] = useState(false);
  
  const handleSendEmail = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };
  
  if (!candidate) return null;
  
  return (
    <div className="p-6">
      {/* Header section with smaller button and full name */}
      <div className="flex justify-between items-start mb-6">
        {/* Left: Avatar and name info */}
        <div className="flex items-start gap-4 max-w-[70%]">
          {/* Profile avatar with initials */}
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-xl font-bold text-pink-700 flex-shrink-0">
            {candidate.name.split(' ').map(n => n[0]).join('')}
          </div>
          
          {/* Name, rating and status - allowing full name to show */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900 break-words">{candidate.name}</h1>
            <div className="flex items-center mt-1">
              <span className="text-sm text-gray-600 mr-1">Overall</span>
              <span className="font-medium text-gray-800">{candidate.rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="mt-1">
              <div className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 items-center">
                <span className="w-1.5 h-1.5 mr-1 rounded-full bg-green-500"></span>
                Active
              </div>
            </div>
          </div>
        </div>
        
        {/* Right: Smaller Send Email button */}
        <div className="relative flex-shrink-0">
          <button 
            onClick={handleSendEmail}
            className="bg-teal-600 text-white rounded-md px-3 py-2 w-[110px] flex items-center justify-center hover:bg-teal-700 transition-colors shadow-sm text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </button>
          
          {/* Email sent notification */}
          {emailSent && (
            <div className="absolute top-full right-0 mt-2 py-2 px-3 bg-green-100 text-green-800 text-sm rounded-md shadow-md animate-fade-in">
              Email has been sent
            </div>
          )}
        </div>
      </div>
      
      {/* Job information with grid layout */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
        <div>
          <p className="text-sm font-medium text-gray-500">Origin</p>
          <p className="text-gray-900 font-medium">{candidate.origin}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Audited at</p>
          <p className="text-gray-900 font-medium">{candidate.auditedAt}</p>
        </div>
        <div className="col-span-2">
          <p className="text-sm font-medium text-gray-500">Job Applied</p>
          <p className="text-gray-900 font-medium">{candidate.jobApplied}</p>
        </div>
      </div>
      
      {/* Streamlined navigation with fewer items */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex" aria-label="Tabs">
          <a 
            href="#" 
            className="border-b-2 border-blue-500 py-2 px-4 text-sm font-medium text-blue-600 whitespace-nowrap"
            aria-current="page"
          >
            Job Application
          </a>
          <a 
            href="#" 
            className="border-b-2 border-transparent py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
          >
            Resume
          </a>
          <a 
            href="#" 
            className="border-b-2 border-transparent py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
          >
            Interview
          </a>
        </nav>
      </div>
      
      {/* Personal Information section */}
      <div className="mt-2">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Email Address</p>
              <p className="mt-1 text-sm font-semibold text-blue-600">{candidate.personal.email}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Phone Number</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">{candidate.personal.phone}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Gender</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">{candidate.personal.gender}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Birthdate</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">{candidate.personal.birthDate}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Living Address</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">{candidate.personal.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}