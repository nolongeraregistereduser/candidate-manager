"use client";
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '../../../components/Sidebar';
import InterviewDetailsModal from '../../../components/InterviewDetailsModal';
import candidates from '../../../data/candidates';

export default function CandidateDetails({ params }) {
  const router = useRouter();
  const pathname = usePathname();
  const candidateId = parseInt(params.id);
  const [selectedInterview, setSelectedInterview] = useState(null);
  
  // Find the candidate by ID and pagination info
  const candidateIndex = candidates.findIndex(c => c.id === candidateId);
  const candidate = candidates[candidateIndex];
  const totalCandidates = candidates.length;
  
  // Previous and next navigation
  const prevCandidate = candidateIndex > 0 ? candidates[candidateIndex - 1] : null;
  const nextCandidate = candidateIndex < totalCandidates - 1 ? candidates[candidateIndex + 1] : null;
  
  // Selected tab state
  const [activeTab, setActiveTab] = useState('job');
  
  // If candidate doesn't exist, redirect to candidates list
  useEffect(() => {
    if (candidateIndex === -1) {
      router.push('/candidates');
    }
  }, [candidateIndex, router]);
  
  if (candidateIndex === -1) return null;
  
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
        
          {/* Pagination header */}
          <div className="bg-white rounded-lg shadow-sm mb-6 p-4 flex justify-between items-center">
            <button 
              onClick={() => prevCandidate && router.push(`/candidates/${prevCandidate.id}`)}
              disabled={!prevCandidate}
              className={`flex items-center text-gray-600 ${!prevCandidate ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-900'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prevCandidate ? prevCandidate.name : 'Previous'}
            </button>
            
            <div className="text-sm font-medium text-gray-700">
              {candidateIndex + 1} out of {totalCandidates}
            </div>
            
            <button 
              onClick={() => nextCandidate && router.push(`/candidates/${nextCandidate.id}`)}
              disabled={!nextCandidate}
              className={`flex items-center text-gray-600 ${!nextCandidate ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-900'}`}
            >
              {nextCandidate ? nextCandidate.name : 'Next'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Candidate Profile and Details */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              {/* Avatar, name, rating section */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-xl font-bold text-pink-700 flex-shrink-0">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div>
                    <h1 className="text-lg font-semibold text-gray-900">{candidate.name}</h1>
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
                
                {/* Send Email button */}
                <button className="bg-teal-600 text-white rounded-md px-3 py-2 w-[110px] flex items-center justify-center hover:bg-teal-700 transition-colors shadow-sm text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </button>
              </div>
              
              {/* Job information with grid layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
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
            </div>
            
            {/* Tab navigation */}
            <div className="border-b border-gray-200">
              <div className="px-6">
                <nav className="flex -mb-px" aria-label="Tabs">
                  <button 
                    onClick={() => setActiveTab('job')}
                    className={`border-b-2 py-2 px-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === 'job' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Job Application
                  </button>
                  <button 
                    onClick={() => setActiveTab('resume')}
                    className={`border-b-2 py-2 px-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === 'resume' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Resume
                  </button>
                  <button 
                    onClick={() => setActiveTab('interview')}
                    className={`border-b-2 py-2 px-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === 'interview' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Interview
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'job' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Email Address</div>
                        <div className="text-blue-600">{candidate.email}</div>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Phone Number</div>
                        <div className="text-gray-900">{candidate.phone}</div>
                      </div>
                    </div>
                    
                    {/* Gender */}
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Gender</div>
                        <div className="text-gray-900">{candidate.gender}</div>
                      </div>
                    </div>
                    
                    {/* Birthdate */}
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Birthdate</div>
                        <div className="text-gray-900">{candidate.birthdate}</div>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Location</div>
                        <div className="text-gray-900">{candidate.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'resume' && (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-700">Resume information coming soon</h3>
                  <p className="mt-2 text-gray-500">This section is under development.</p>
                </div>
              )}
              
              {activeTab === 'interview' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Interview History</h2>
                  {/* Full interview list */}
                  <div className="space-y-4">
                    {candidate.interviews && candidate.interviews.length > 0 ? (
                      candidate.interviews.map((interview, index) => (
                        <div key={interview.id} className="border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="p-4 flex">
                            {/* Date badge */}
                            <div className="bg-gray-100 rounded-lg p-2 text-center w-16 mr-4 flex-shrink-0">
                              <div className="text-xl font-medium">{interview.date}</div>
                              <div className="text-sm text-gray-600">{interview.month}</div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-medium text-gray-900">{interview.title}</h3>
                                  <p className="text-sm text-gray-600">
                                    {interview.timeRange} with {interview.with}
                                  </p>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                                    interview.status === 'Completed' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {interview.status}
                                  </span>
                                  
                                  <button 
                                    onClick={() => setSelectedInterview(interview)} 
                                    className="text-sm text-gray-500 hover:text-gray-800"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-4 mb-2">
                                <div>
                                  <p className="text-xs text-gray-500">Location</p>
                                  <p className="text-sm">{interview.location}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Created by</p>
                                  <p className="text-sm">{interview.createdBy}</p>
                                </div>
                                {interview.status === 'Completed' && interview.feedback && (
                                  <div>
                                    <p className="text-xs text-gray-500">Score</p>
                                    <p className="text-sm font-medium">{interview.feedback.score}</p>
                                  </div>
                                )}
                              </div>
                              
                              {interview.notes && (
                                <div className="mb-3">
                                  <p className="text-xs text-gray-500">Notes</p>
                                  <p className="text-sm text-gray-700 line-clamp-1">{interview.notes}</p>
                                </div>
                              )}
                              
                              <div className="flex justify-end">
                                <button 
                                  onClick={() => setSelectedInterview(interview)} 
                                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-700">No interviews yet</h3>
                        <p className="text-gray-500">Schedule an interview with this candidate.</p>
                      </div>
                    )}
                    
                    {/* Add Interview Button */}
                    <div className="mt-4 border border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <button className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Interview
                      </button>
                    </div>
                  </div>
                </div>
              )}
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