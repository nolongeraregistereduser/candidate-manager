import React from 'react';

export default function CandidateCard({ candidate, onClick }) {
  // Generate initials for avatar
  const initials = candidate.name
    .split(' ')
    .map(n => n[0])
    .join('');
    
  // Determine background color based on first letter (for consistent colors per user)
  const colors = [
    { bg: 'bg-pink-50', text: 'text-pink-700' },
    { bg: 'bg-blue-50', text: 'text-blue-700' },
    { bg: 'bg-purple-50', text: 'text-purple-700' },
    { bg: 'bg-amber-50', text: 'text-amber-700' },
    { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  ];
  
  const colorIndex = candidate.name.charCodeAt(0) % colors.length;
  const { bg, text } = colors[colorIndex];

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 h-full flex flex-col overflow-hidden group"
    >
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          {/* Avatar with initials */}
          <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center text-lg font-bold ${text} flex-shrink-0 transition-transform group-hover:scale-105`}>
            {initials}
          </div>
          
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{candidate.name}</h3>
            <div className="flex items-center mt-0.5">
              <span className="text-sm text-gray-500">Rating:</span>
              <span className="font-medium text-gray-800 mx-1">{candidate.rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Job Applied</p>
            <p className="text-sm font-medium text-gray-800 line-clamp-2">{candidate.jobApplied}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Status</p>
            <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
              <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-500"></span>
              {candidate.status}
            </div>
          </div>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-gray-500 text-sm">{candidate.interviews?.length || 0} interviews</span>
          <span className="text-blue-600 text-sm font-medium flex items-center group-hover:translate-x-0.5 transition-transform">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}