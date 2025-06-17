export default function InterviewDetailsModal({ interview, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative animate-slide-up">
        {/* Header with close button */}
        <div className="px-5 py-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{interview.title}</h2>
          <button 
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Date and time */}
        <div className="px-5 py-3 bg-gray-50 border-b">
          <div className="flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{interview.date} {interview.month}, {interview.timeRange}</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-4 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
            <div>
              <p className="text-xs text-gray-500 uppercase">Interviewer</p>
              <p className="font-medium">{interview.with}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Location</p>
              <p className="font-medium">{interview.location}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Created by</p>
              <p className="font-medium">{interview.createdBy}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Status</p>
              <p className="font-medium flex items-center">
                <span className={`w-2 h-2 rounded-full ${
                  interview.status === 'Completed' ? 'bg-green-500' : 
                  interview.status === 'Scheduled' ? 'bg-blue-500' : 'bg-yellow-500'
                } mr-1.5`}></span>
                {interview.status}
              </p>
            </div>
          </div>
          
          {interview.status === 'Completed' && (
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500 uppercase">Feedback Score</p>
                <span className="text-sm font-semibold bg-green-100 text-green-800 rounded-full px-2 py-0.5">
                  {interview.feedback?.score}/10
                </span>
              </div>
            </div>
          )}
          
          {/* Notes Section */}
          <div className="mb-4">
            <p className="text-xs text-gray-500 uppercase mb-1">Notes</p>
            <div className="bg-gray-50 p-3 rounded text-sm">
              <p className="text-gray-700">{interview.notes || 'No notes available.'}</p>
            </div>
          </div>

          {interview.status === 'Completed' && interview.feedback && (
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Feedback</p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="text-gray-700">{interview.feedback.comments}</p>
              </div>
            </div>
          )}
          
          {/* Video Conference Link */}
          {interview.videoLink && (
            <div className="mt-4">
              <a 
                href={interview.videoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 text-sm hover:text-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Join Video Conference
              </a>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="px-5 py-3 bg-gray-50 border-t flex justify-end">
          {interview.status !== 'Completed' && (
            <button className="mr-2 px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700">
              Mark as Completed
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}