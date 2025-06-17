"use client";
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CandidateProfile from '../components/CandidateProfile';
import InterviewsList from '../components/InterviewsList';
import Pagination from '../components/Pagination';
import candidates from '../data/candidates';

export default function Home() {
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const totalCandidates = candidates.length;
  const currentCandidate = candidates[currentCandidateIndex];
  
  const handlePrevious = () => {
    setCurrentCandidateIndex(prev => 
      prev > 0 ? prev - 1 : prev
    );
  };
  
  const handleNext = () => {
    setCurrentCandidateIndex(prev => 
      prev < totalCandidates - 1 ? prev + 1 : prev
    );
  };
  
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Pagination header */}
          <div className="p-4 border-b flex justify-between items-center">
            <Pagination 
              current={currentCandidateIndex + 1}
              total={totalCandidates}
              onPrevious={handlePrevious}
              onNext={handleNext}
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
              <CandidateProfile candidate={currentCandidate} />
            </div>
            
            {/* Interviews List */}
            <div className="lg:w-2/3">
              <InterviewsList interviews={currentCandidate?.interviews || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
