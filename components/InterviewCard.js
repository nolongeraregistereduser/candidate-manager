import { useState } from 'react';
import InterviewDetailsModal from './InterviewDetailsModal';

export default function InterviewCard({ interview }) {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <>
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Card Header with date */}
        <div className="flex border-b">
          <div className="w-16 bg-gray-50 flex flex-col items-center justify-center p-4 border-r">
            <span className="font-bold text-xl text-gray-800">{interview.date}</span>
            <span className="text-gray-500 text-sm">{interview.month}</span>
          </div>
          <div className="p-4 flex-1">
            <h3 className="font-semibold text-gray-900">{interview.title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {interview.timeRange} with {interview.with}
            </p>
          </div>
          <div className="flex items-start p-3">
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Card Body with details */}
        <div className="p-4 bg-gray-50">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500 font-medium mb-1">Location</p>
              <p className="text-gray-800">{interview.location}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium mb-1">Status</p>
              <p className="flex items-center text-gray-800">
                <span className={`w-2 h-2 rounded-full ${
                  interview.status === 'Completed' ? 'bg-green-500' : 
                  interview.status === 'Scheduled' ? 'bg-blue-500' : 'bg-yellow-500'
                } mr-1.5`}></span>
                {interview.status}
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-medium mb-1">Created by</p>
              <p className="text-gray-800">{interview.createdBy}</p>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button 
              onClick={() => setShowDetails(true)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Interview Details Modal */}
      {showDetails && (
        <InterviewDetailsModal 
          interview={interview} 
          onClose={() => setShowDetails(false)} 
        />
      )}
    </>
  );
}