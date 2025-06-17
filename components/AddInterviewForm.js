import { useState } from 'react';

export default function AddInterviewForm({ candidateId, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    month: '',
    timeRange: '',
    with: '',
    location: '',
    status: 'Scheduled'
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    if (!formData.month.trim()) newErrors.month = 'Month is required';
    if (!formData.timeRange.trim()) newErrors.timeRange = 'Time range is required';
    if (!formData.with.trim()) newErrors.with = 'Interviewer is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      const newInterview = {
        id: `int-${Date.now()}`,
        ...formData,
        createdBy: 'Current User',
        createdAt: new Date().toISOString()
      };
      
      onSubmit(newInterview);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-lg shadow-xl">
        <div className="p-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Add New Interview</h3>
          <p className="text-sm text-gray-500">Schedule an interview for candidate #{candidateId}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Interview Title*
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.title ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Technical Assessment"
              />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date*
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.date ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="27"
                />
                {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
              </div>
              
              <div>
                <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
                  Month*
                </label>
                <select
                  id="month"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.month ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="">Select Month</option>
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
                {errors.month && <p className="mt-1 text-sm text-red-600">{errors.month}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="timeRange" className="block text-sm font-medium text-gray-700 mb-1">
                Time Range*
              </label>
              <input
                type="text"
                id="timeRange"
                name="timeRange"
                value={formData.timeRange}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.timeRange ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="10:00AM - 11:00AM"
              />
              {errors.timeRange && <p className="mt-1 text-sm text-red-600">{errors.timeRange}</p>}
            </div>
            
            <div>
              <label htmlFor="with" className="block text-sm font-medium text-gray-700 mb-1">
                Interviewer*
              </label>
              <input
                type="text"
                id="with"
                name="with"
                value={formData.with}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.with ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Curtis Bauch"
              />
              {errors.with && <p className="mt-1 text-sm text-red-600">{errors.with}</p>}
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location*
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.location ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="">Select Location</option>
                <option value="Remote">Remote</option>
                <option value="Office">Office</option>
                <option value="Online">Online</option>
              </select>
              {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Schedule Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}