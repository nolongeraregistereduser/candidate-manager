"use client";
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CandidateProfile from '../components/CandidateProfile';
import InterviewsList from '../components/InterviewsList';
import Pagination from '../components/Pagination';

export default function Home() {
  const [currentCandidate, setCurrentCandidate] = useState(1);
  const totalCandidates = 56;
  
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Pagination header */}
          <div className="p-4 border-b flex justify-between items-center">
            <Pagination 
              current={currentCandidate}
              total={totalCandidates}
              onPrevious={() => setCurrentCandidate(prev => Math.max(1, prev - 1))}
              onNext={() => setCurrentCandidate(prev => Math.min(totalCandidates, prev + 1))}
            />
            <button onClick={() => {}} className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Candidate Profile */}
            <div className="lg:w-1/3 border-r">
              <CandidateProfile />
            </div>
            
            {/* Interviews List */}
            <div className="lg:w-2/3">
              <InterviewsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
