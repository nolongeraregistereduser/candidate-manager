import EmailButton from './EmailButton';

export default function CandidateProfile() {
  const candidate = {
    name: "Kristi Sipes",
    rating: 3.5,
    status: "Active",
    origin: "Career Site",
    auditedAt: "13 October, 2023",
    jobApplied: "Research and Development",
    personal: {
      email: "kristisipes@gmail.com",
      phone: "+62-921-019-112",
      gender: "Female",
      birthDate: "May 20, 2000",
      address: "New York, NY, 10001, United States"
    },
    education: {
      university: "Boston University",
      qualification: "Bachelor of Engineering",
      graduationYear: "2014",
      referral: "Not Provided"
    }
  };

  return (
    <div className="p-6">
      {/* Header with photo, name and rating */}
      <div className="flex items-start mb-6">
        <div className="mr-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src={`https://ui-avatars.com/api/?name=${candidate.name}&background=random`} 
              alt={candidate.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold flex items-center">
                {candidate.name} 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3a1 1 0 01.707.293l.707.707L12.828 2.828a1 1 0 011.415 0l2.828 2.828a1 1 0 010 1.415L14.414 10l2.657 2.657a1 1 0 010 1.415l-2.828 2.828a1 1 0 01-1.415 0L10 13.172l-.707.707a1 1 0 01-1.414 0l-2.828-2.828a1 1 0 010-1.415L7.88 7 5.121 4.243a1 1 0 010-1.415l2.83-2.828a1 1 0 011.414 0l1.328 1.328.707-.707A1 1 0 0110 3z" />
                </svg>
              </h1>
              <div className="flex items-center">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm font-medium">{candidate.rating} Overall</span>
                </span>
                <span className="ml-3 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  • {candidate.status}
                </span>
              </div>
            </div>
            <EmailButton email={candidate.personal.email} />
          </div>
        </div>
      </div>
      
      {/* Job Application Details */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-gray-500">Origin</p>
          <p>{candidate.origin}</p>
        </div>
        <div>
          <p className="text-gray-500">Audited at</p>
          <p>{candidate.auditedAt}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-500">Job Applied</p>
          <p>{candidate.jobApplied}</p>
        </div>
      </div>
      
      {/* Application tabs */}
      <div className="flex border-b mb-6">
        <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">Job Application</button>
        <button className="px-4 py-2 text-gray-500 text-sm">Resume</button>
        <button className="px-4 py-2 text-gray-500 text-sm">Form Submission</button>
        <button className="px-4 py-2 text-gray-500 text-sm">Interview</button>
      </div>
      
      {/* Personal Information */}
      <div className="mb-6">
        <h2 className="font-medium mb-3">Personal Information</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-600 w-28">Email Address</span>
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded">{candidate.personal.email}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-600 w-28">Phone Number</span>
            <span>{candidate.personal.phone}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-gray-600 w-28">Gender</span>
            <span>{candidate.personal.gender}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-600 w-28">Birthdate</span>
            <span>{candidate.personal.birthDate}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600 w-28">Living Address</span>
            <span>{candidate.personal.address}</span>
          </div>
        </div>
      </div>
      
      {/* Education Information */}
      <div className="mb-6">
        <h2 className="font-medium mb-3">Education Information</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <span className="text-gray-600 w-28">University</span>
            <span>{candidate.education.university}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-600 w-28">Qualification</span>
            <span>{candidate.education.qualification}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span className="text-gray-600 w-28">Year Graduation</span>
            <span>{candidate.education.graduationYear}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span className="text-gray-600 w-28">Referred</span>
            <span className="text-gray-500">{candidate.education.referral}</span>
          </div>
        </div>
      </div>
      
      {/* Notes */}
      <div>
        <h2 className="font-medium mb-3">Notes</h2>
        <div className="border rounded-lg p-3">
          <textarea 
            className="w-full min-h-[80px] focus:outline-none resize-none" 
            placeholder="Write notes..."
          ></textarea>
          <div className="flex justify-end space-x-2 mt-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
