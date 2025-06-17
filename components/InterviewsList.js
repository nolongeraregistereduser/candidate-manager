import { useState } from 'react';
import InterviewCard from './InterviewCard';
import AddInterviewForm from './AddInterviewForm';

export default function InterviewsList() {
  const [showAddForm, setShowAddForm] = useState(false);
  
  const interviews = [
    {
      id: 1,
      title: "Aptitude test",
      date: "01 Oct",
      timeRange: "10:00AM - 10:30AM",
      with: "Bagus Fikri",
      location: "Online",
      status: "Completed",
      createdBy: "Raihan Fikri"
    },
    {
      id: 2,
      title: "Written Test",
      date: "05 Oct",
      timeRange: "10:00AM - 10:30AM",
      with: "Bagus Fikri",
      location: "Online",
      status: "Completed",
      createdBy: "Raihan Fikri"
    }
  ];
  
  return (
    <div className="p-6">
      {/* Interview Cards */}
      <div className="space-y-6">
        {interviews.map((interview) => (
          <InterviewCard key={interview.id} interview={interview} />
        ))}
      </div>
      
      {/* Add Interview Button/Form */}
      {showAddForm ? (
        <AddInterviewForm onCancel={() => setShowAddForm(false)} />
      ) : (
        <button 
          onClick={() => setShowAddForm(true)}
          className="mt-6 w-full py-3 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Interview
        </button>
      )}
    </div>
  );
}
