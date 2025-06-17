import React from 'react';

export default function InterviewDetailsModal({ interview, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-lg overflow-hidden shadow-xl">
        <div className="flex justify-between items-center border-b border-gray-200 p-4">
          <h2 className="text-xl font-semibold text-gray-800">{interview.title}</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          {/* Date and time */}
          <div className="flex items-center mb-6">
            <div className="h-16 w-16 bg-blue-50 border border-blue-100 rounded flex flex-col items-center justify-center mr-4">
              <span className="text-lg font-medium text-blue-700">{interview.date}</span>
              <span className="text-xs text-blue-600">{interview.month}</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{interview.timeRange}</h3>
              <p className="text-sm text-gray-600">with {interview.with}</p>
            </div>
          </div>
          
          {/* Interview details */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-6">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Location</p>
              <p className="mt-1 text-gray-900">{interview.location}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Status</p>
              <div className="mt-1 flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${
                  interview.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                }`}></span>
                <span className="text-gray-900">{interview.status}</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Created by</p>
              <p className="mt-1 text-gray-900">{interview.createdBy}</p>
            </div>
            {interview.feedback && (
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Score</p>
                <p className="mt-1 text-gray-900 font-medium">{interview.feedback.score}</p>
              </div>
            )}
          </div>
          
          {/* Notes */}
          {interview.notes && (
            <div className="mb-6">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Notes</p>
              <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-gray-800">
                {interview.notes}
              </div>
            </div>
          )}
          
          {/* Feedback */}
          {interview.feedback && interview.feedback.comments && (
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Feedback</p>
              <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-gray-800">
                {interview.feedback.comments}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-end bg-gray-50 p-4 border-t border-gray-200">
          {interview.status !== 'Completed' && (
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mr-3">
              Mark as Completed
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 bg-white rounded-md hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}