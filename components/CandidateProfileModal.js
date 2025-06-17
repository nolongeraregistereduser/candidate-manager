import { useState } from 'react';
import InterviewDetailsModal from './InterviewDetailsModal';

export default function CandidateProfileModal({ candidate, onClose, onPrevious, onNext, currentIndex, totalCandidates }) {
  const [activeTab, setActiveTab] = useState('job-application');
  const [selectedInterview, setSelectedInterview] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col relative overflow-hidden">
        {/* Pagination header */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-sm">
          <button 
            onClick={onPrevious}
            className="p-1 rounded-full hover:bg-gray-100"
            disabled={currentIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            onClick={onNext}
            className="p-1 rounded-full hover:bg-gray-100"
            disabled={currentIndex === totalCandidates - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="text-gray-600">{currentIndex + 1} out of {totalCandidates}</span>
        </div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Candidate Header */}
        <div className="px-8 pt-8 pb-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Candidate photo */}
              <div className="h-16 w-16 rounded-full overflow-hidden border border-gray-200">
                <img 
                  src={candidate.photo || "https://via.placeholder.com/64"} 
                  alt={candidate.name}
                  className="h-full w-full object-cover" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(candidate.name)}&background=f3e8ff&color=9333ea&size=64`;
                  }}
                />
              </div>
              
              {/* Candidate name and rating */}
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-medium text-gray-900">{candidate.name}</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="flex items-center mt-1 space-x-3">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm font-medium">{candidate.rating} Overall</span>
                  </div>
                  
                  <div className="flex items-center px-2 py-0.5 bg-green-100 rounded-full text-xs font-medium text-green-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
                    Active
                  </div>
                </div>
              </div>
            </div>
            
            {/* Options and email button */}
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              
              <button className="bg-teal-600 hover:bg-teal-700 text-white rounded px-3 py-1.5 text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </button>
            </div>
          </div>
          
          {/* Candidate details row */}
          <div className="grid grid-cols-3 gap-8 mt-6">
            <div>
              <p className="text-xs text-gray-500 uppercase">Origin</p>
              <p className="font-medium">{candidate.origin || 'Career Site'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Applied at</p>
              <p className="font-medium">{candidate.auditedAt || '13 October, 2023'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Job Applied</p>
              <p className="font-medium">{candidate.jobApplied || 'Research and Development'}</p>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="px-8 border-b">
          <nav className="flex space-x-4" aria-label="Tabs">
            <button 
              onClick={() => handleTabClick('job-application')}
              className={`px-3 py-2.5 text-sm font-medium border-b-2 ${
                activeTab === 'job-application' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Job Application
              </div>
            </button>
            <button 
              onClick={() => handleTabClick('resume')}
              className={`px-3 py-2.5 text-sm font-medium border-b-2 ${
                activeTab === 'resume' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </div>
            </button>
            <button 
              onClick={() => handleTabClick('form-submission')}
              className={`px-3 py-2.5 text-sm font-medium border-b-2 ${
                activeTab === 'form-submission' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Form Submission
              </div>
            </button>
            <button 
              onClick={() => handleTabClick('interview')}
              className={`px-3 py-2.5 text-sm font-medium border-b-2 ${
                activeTab === 'interview' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Interview
              </div>
            </button>
          </nav>
        </div>
        
        {/* Main content area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left side - Interviews */}
          <div className="w-3/5 p-6 overflow-y-auto border-r">
            <div className="space-y-5">
              {/* First Interview */}
              {candidate.interviews && candidate.interviews.map((interview, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start mb-2">
                    {/* Date badge */}
                    <div className="h-16 w-16 bg-gray-50 border border-gray-200 rounded flex flex-col items-center justify-center mr-3">
                      <span className="font-medium">{interview.date}</span>
                      <span className="text-xs text-gray-500">{interview.month}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{interview.title}</h3>
                          <p className="text-sm text-gray-600">
                            {interview.timeRange} with {interview.with}
                          </p>
                        </div>
                        
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div>
                          <p className="text-xs text-gray-500">Location</p>
                          <p className="text-sm">{interview.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Status</p>
                          <p className="text-sm flex items-center">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                            {interview.status}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Created by</p>
                          <p className="text-sm">{interview.createdBy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pl-[76px] flex justify-end">
                    <button 
                      onClick={() => setSelectedInterview(interview)}
                      className="px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Add Interview button */}
              <button className="w-full mt-4 flex items-center justify-center text-blue-600 py-2 border border-dashed border-gray-300 rounded hover:bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Interview
              </button>
            </div>
          </div>
          
          {/* Right side - Candidate details */}
          <div className="w-2/5 p-6 overflow-y-auto">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="font-medium text-gray-900 mb-4">Personal Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">Email Address</p>
                  <p className="text-sm text-blue-600">{candidate.email || 'kristisipes@gmail.com'}</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">Phone Number</p>
                  <p className="text-sm">{candidate.phone || '+62-921-019-112'}</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">Gender</p>
                  <p className="text-sm">{candidate.gender || 'Female'}</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">Birthdate</p>
                  <p className="text-sm">{candidate.birthdate || 'May 20, 2000'}</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">Living Address</p>
                  <p className="text-sm">{candidate.location || 'New York, NY, 10001, United States'}</p>
                </div>
              </div>
            </div>
            
            {/* Education Information */}
            <div className="mb-8">
              <h3 className="font-medium text-gray-900 mb-4">Education Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">University</p>
                  <p className="text-sm">Boston University</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">Qualification Held</p>
                  <p className="text-sm">Bachelor of Engineering</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">Year Graduation</p>
                  <p className="text-sm">2014</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500 w-28">Referral</p>
                  <p className="text-sm text-gray-400">Not Provided</p>
                </div>
              </div>
            </div>
            
            {/* Notes Section */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Notes</h3>
              
              <div className="bg-gray-50 rounded-md border border-gray-200">
                <textarea 
                  placeholder="Write note..." 
                  className="w-full p-3 bg-transparent text-sm resize-none focus:outline-none"
                  rows={4}
                ></textarea>
                <div className="flex justify-end border-t border-gray-200 p-2">
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button className="p-1 mx-1 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interview Details Modal */}
      {selectedInterview && (
        <InterviewDetailsModal 
          interview={selectedInterview} 
          onClose={() => setSelectedInterview(null)} 
        />
      )}
    </div>
  );
}