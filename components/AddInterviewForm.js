export default function AddInterviewForm({ onCancel }) {
  return (
    <div className="mt-6 border rounded-lg p-4 bg-white">
      <h3 className="font-medium text-lg mb-4">Add New Interview</h3>
      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interview Date</label>
            <input
              type="date"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interview Time</label>
            <input
              type="time"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interview Title</label>
            <input
              type="text"
              placeholder="E.g., Technical Interview"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Recruiter</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Recruiter</option>
              <option value="1">Bagus Fikri</option>
              <option value="2">Raihan Fikri</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="online">Online</option>
              <option value="office">Office</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Video Link (if online)</label>
            <input
              type="text"
              placeholder="Paste meeting link here"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="3"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add any specific notes or instructions..."
            ></textarea>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2">
          <button 
            type="button" 
            onClick={onCancel}
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 border border-blue-600 rounded-md text-white hover:bg-blue-700"
          >
            Schedule Interview
          </button>
        </div>
      </form>
    </div>
  );
}