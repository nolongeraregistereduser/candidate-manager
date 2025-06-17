
export default function InterviewCard({ interview }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Card Header with date */}
      <div className="flex border-b">
        <div className="w-16 bg-gray-50 flex flex-col items-center justify-center p-2 border-r">
          <span className="font-bold text-xl">{interview.date.split(' ')[0]}</span>
          <span className="text-gray-500 text-sm">Oct</span>
        </div>
        <div className="p-3 flex-1">
          <h3 className="font-medium">{interview.title}</h3>
          <p className="text-sm text-gray-500">
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
            <p className="text-gray-500">Location</p>
            <p>{interview.location}</p>
          </div>
          <div>
            <p className="text-gray-500">Status</p>
            <p className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              {interview.status}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Created by</p>
            <p>{interview.createdBy}</p>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-white border rounded text-sm hover:bg-gray-50">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}