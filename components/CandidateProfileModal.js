import { useState } from 'react';
import InterviewDetailsModal from './InterviewDetailsModal';
import AddInterviewForm from './AddInterviewForm';

export default function CandidateProfileModal({ candidate, onClose, onPrevious, onNext, currentIndex, totalCandidates }) {
  const [activeTab, setActiveTab] = useState('job-application');
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [showAddInterviewForm, setShowAddInterviewForm] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleAddInterview = (newInterview) => {
    // In a real application, this would call an API to save the new interview
    // For now we're just updating the UI state and would need to be connected to state management
    console.log("New interview to add:", newInterview);
    setShowAddInterviewForm(false);
    // You would add code here to update your data store with the new interview
    // For example: dispatch(addInterview(candidate.id, newInterview))
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 md:p-4 overflow-y-auto">
      <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] flex flex-col relative overflow-hidden shadow-xl">
        {/* Improved elegant pagination header */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-white/90 backdrop-blur-sm py-1.5 px-3 rounded-full shadow-sm border border-gray-100">
          <button 
            onClick={onPrevious}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="text-sm font-medium text-gray-700">{currentIndex + 1} out of {totalCandidates}</span>
          <button 
            onClick={onNext}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={currentIndex === totalCandidates - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-colors z-10 shadow-sm border border-gray-100"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Candidate Header */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Candidate avatar/initials */}
              <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-purple-700 flex-shrink-0 border-4 border-white shadow">
                {candidate.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              {/* Candidate name and rating */}
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-2xl font-semibold text-gray-900">{candidate.name}</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="flex items-center mt-2 space-x-3">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1.5">★</span>
                    <span className="font-medium">{candidate.rating} Overall</span>
                  </div>
                  
                  <div className="flex items-center px-2 py-0.5 bg-green-100 rounded-full text-xs font-medium text-green-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                    Active
                  </div>
                </div>
              </div>
            </div>
            
            {/* Options and email button */}
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              
              <button className="bg-teal-600 hover:bg-teal-700 text-white rounded-md px-4 py-2 text-sm font-medium flex items-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </button>
            </div>
          </div>
          
          {/* Candidate details row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 border-t border-b border-gray-100 py-4">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">ORIGIN</p>
              <p className="font-medium text-gray-800">{candidate.origin || 'Internal Referral'}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">APPLIED AT</p>
              <p className="font-medium text-gray-800">{candidate.auditedAt || '25 August, 2023'}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">JOB APPLIED</p>
              <p className="font-medium text-gray-800">{candidate.jobApplied || 'Backend Developer'}</p>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="px-8 border-b">
          <nav className="flex space-x-1">
            <button 
              onClick={() => handleTabClick('job-application')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
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
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
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
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
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
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
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
              {/* Interview items */}
              {candidate.interviews && candidate.interviews.length > 0 ? (
                candidate.interviews.map((interview, index) => (
                  <div key={index} className="relative bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="p-4 flex">
                      {/* Date badge */}
                      <div className="h-16 w-16 bg-gray-50 border border-gray-200 rounded flex flex-col items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-medium">{interview.date}</span>
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
                    
                    {/* Centered View Details Button */}
                    <div className="py-2 px-4 bg-gray-50 border-t border-gray-200 flex justify-center">
                      <button 
                        onClick={() => setSelectedInterview(interview)}
                        className="px-4 py-1.5 text-sm border border-gray-300 bg-white rounded hover:bg-gray-50 shadow-sm transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-700">No interviews scheduled</h3>
                  <p className="text-gray-500">Click the button below to add an interview</p>
                </div>
              )}
              
              {/* Add Interview button */}
              <button 
                onClick={() => setShowAddInterviewForm(true)} 
                className="w-full flex items-center justify-center text-blue-600 py-2.5 border border-dashed border-gray-300 rounded hover:bg-blue-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Interview
              </button>
            </div>
          </div>
          
          {/* Right side - Enhanced Personal/Education Information */}
          <div className="w-2/5 p-6 overflow-y-auto bg-gray-50">
            {/* Enhanced Personal Information */}
            <div className="mb-8 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                    <a href={`mailto:${candidate.email}`} className="text-blue-600 hover:underline block mt-0.5">
                      {candidate.email || 'regina.h@example.com'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Phone Number</p>
                    <a href={`tel:${candidate.phone}`} className="text-gray-900 block mt-0.5">
                      {candidate.phone || '+1-555-887-9900'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Gender</p>
                    <p className="text-gray-900 mt-0.5">{candidate.gender || 'Female'}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Birthdate</p>
                    <p className="text-gray-900 mt-0.5">{candidate.birthdate || 'July 30, 1995'}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Living Address</p>
                    <p className="text-gray-900 mt-0.5">{candidate.location || 'Chicago, IL'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Education Information */}
            <div className="mb-8 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Education Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">University</p>
                    <p className="text-gray-900 mt-0.5">Boston University</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Qualification Held</p>
                    <p className="text-gray-900 mt-0.5">Bachelor of Engineering</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Year Graduation</p>
                    <p className="text-gray-900 mt-0.5">2014</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Referral</p>
                    <p className="text-gray-400 italic mt-0.5">Not Provided</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Notes Section */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Notes
              </h3>
              
              <div>
                <textarea 
                  placeholder="Write note..." 
                  className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-colors"
                  rows={4}
                ></textarea>
                <div className="flex justify-end mt-2 space-x-2">
                  <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                  <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                    Save
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
      
      {/* Add Interview Form Modal */}
      {showAddInterviewForm && (
        <AddInterviewForm
          candidateId={candidate.id}
          onSubmit={handleAddInterview}
          onCancel={() => setShowAddInterviewForm(false)}
        />
      )}
    </div>
  );
}