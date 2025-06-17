
"use client";
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import CandidateCard from '../../components/CandidateCard';
import CandidateProfileModal from '../../components/CandidateProfileModal';
import candidates from '../../data/candidates';

export default function CandidatesList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCandidateIndex, setSelectedCandidateIndex] = useState(null);
  
  // Filter candidates based on search term
  const filteredCandidates = candidates.filter(candidate => 
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.jobApplied.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openCandidateModal = (index) => {
    setSelectedCandidateIndex(index);
  };

  const closeCandidateModal = () => {
    setSelectedCandidateIndex(null);
  };

  const goToPreviousCandidate = () => {
    if (selectedCandidateIndex > 0) {
      setSelectedCandidateIndex(selectedCandidateIndex - 1);
    }
  };

  const goToNextCandidate = () => {
    if (selectedCandidateIndex < filteredCandidates.length - 1) {
      setSelectedCandidateIndex(selectedCandidateIndex + 1);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Candidates</h1>
            
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full md:w-80 pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-colors"
                />
              </div>
            </div>
          </div>
          
          {/* Candidates Grid with responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredCandidates.map((candidate, index) => (
              <CandidateCard 
                key={candidate.id}
                candidate={candidate}
                onClick={() => openCandidateModal(index)}
              />
            ))}
          </div>
          
          {/* Empty state when no results */}
          {filteredCandidates.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No candidates found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Candidate Profile Modal */}
      {selectedCandidateIndex !== null && (
        <CandidateProfileModal 
          candidate={filteredCandidates[selectedCandidateIndex]}
          onClose={closeCandidateModal}
          onPrevious={goToPreviousCandidate}
          onNext={goToNextCandidate}
          currentIndex={selectedCandidateIndex}
          totalCandidates={filteredCandidates.length}
        />
      )}
    </div>
  );
}