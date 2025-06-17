"use client";
import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
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
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Candidates</h1>
            
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Candidates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate, index) => (
              <div 
                key={candidate.id}
                onClick={() => openCandidateModal(index)} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full"
              >
                <div className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-lg font-bold text-pink-700 flex-shrink-0">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{candidate.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-600 mr-1">Rating:</span>
                        <span className="font-medium text-gray-800">{candidate.rating}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div>
                      <p className="text-gray-500">Job Applied</p>
                      <p className="font-medium text-gray-800">{candidate.jobApplied}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <div className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 items-center">
                        <span className="w-1.5 h-1.5 mr-1 rounded-full bg-green-500"></span>
                        {candidate.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{candidate.interviews?.length || 0} interviews</span>
                    <span className="text-blue-600 text-sm font-medium">View Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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