export const candidates = [
  {
    id: 1,
    name: "Kristi Sipes",
    rating: 3.5,
    status: "Active",
    verified: true,
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
    },
    interviews: [
      {
        id: 1,
        title: "Aptitude test",
        date: "01",
        month: "Oct",
        timeRange: "10:00AM - 10:30AM",
        with: "Bagus Fikri",
        location: "Online",
        status: "Completed",
        createdBy: "Raihan Fikri",
        notes: "Candidate performed exceptionally well in logical reasoning and problem-solving sections.",
        videoLink: "https://zoom.us/j/1234567890",
        feedback: {
          score: 8,
          comments: "Strong analytical skills demonstrated. Good time management during the test."
        },
        completedDate: "01 Oct, 2023"
      },
      {
        id: 2,
        title: "Written Test",
        date: "05",
        month: "Oct",
        timeRange: "10:00AM - 10:30AM",
        with: "Bagus Fikri",
        location: "Online",
        status: "Completed",
        createdBy: "Raihan Fikri",
        notes: "The written test focused on technical knowledge and communication skills.",
        videoLink: "https://zoom.us/j/0987654321",
        feedback: {
          score: 7.5,
          comments: "Good technical knowledge but could improve on clarity of written communication."
        },
        completedDate: "05 Oct, 2023"
      }
    ]
  },
  {
    id: 2,
    name: "Marlon Reynolds",
    rating: 4.2,
    status: "Active",
    verified: true,
    origin: "LinkedIn",
    auditedAt: "15 October, 2023",
    jobApplied: "Frontend Developer",
    personal: {
      email: "marlon.reynolds@gmail.com",
      phone: "+1-555-123-4567",
      gender: "Male",
      birthDate: "June 12, 1995",
      address: "San Francisco, CA, 94105, United States"
    },
    education: {
      university: "Stanford University",
      qualification: "Master of Computer Science",
      graduationYear: "2018",
      referral: "Employee Referral"
    },
    interviews: [
      {
        id: 1,
        title: "Technical Interview",
        date: "10",
        month: "Oct",
        timeRange: "14:00PM - 15:30PM",
        with: "Sarah Johnson",
        location: "Online",
        status: "Completed",
        createdBy: "Raihan Fikri",
        notes: "Assessment of React.js, JavaScript, and CSS skills through practical coding challenges.",
        videoLink: "https://meet.google.com/abc-defg-hij",
        feedback: {
          score: 9,
          comments: "Excellent technical skills. Solved complex problems efficiently and explained the reasoning clearly."
        },
        completedDate: "10 Oct, 2023"
      },
      {
        id: 2,
        title: "Culture Fit",
        date: "15",
        month: "Oct",
        timeRange: "11:00AM - 12:00PM",
        with: "Michael Chen",
        location: "Office",
        status: "Scheduled",
        createdBy: "Sarah Johnson",
        notes: "Discussion about work preferences, team collaboration, and career aspirations.",
        videoLink: null
      },
      {
        id: 3,
        title: "Final Interview",
        date: "20",
        month: "Oct",
        timeRange: "13:00PM - 14:30PM",
        with: "Victoria Adams",
        location: "Online",
        status: "Pending",
        createdBy: "Michael Chen",
        notes: "Executive interview to discuss role expectations and confirm fit.",
        videoLink: "https://teams.microsoft.com/meeting/123456"
      }
    ]
  },
  {
    id: 3,
    name: "Regina Hane",
    rating: 3.8,
    status: "Active",
    verified: false,
    origin: "Indeed",
    auditedAt: "18 October, 2023",
    jobApplied: "UX Designer",
    personal: {
      email: "regina.hane@outlook.com",
      phone: "+44-7700-900123",
      gender: "Female",
      birthDate: "August 3, 1992",
      address: "London, UK, SW1A 1AA"
    },
    education: {
      university: "Royal College of Art",
      qualification: "Master of Arts in Design",
      graduationYear: "2015",
      referral: "Not Provided"
    },
    interviews: [
      {
        id: 1,
        title: "Portfolio Review",
        date: "12",
        month: "Oct",
        timeRange: "09:00AM - 10:00AM",
        with: "Elaine Wong",
        location: "Online",
        status: "Completed",
        createdBy: "Elaine Wong",
        notes: "Review of design portfolio focusing on user-centered design approach.",
        videoLink: "https://zoom.us/j/5678901234",
        feedback: {
          score: 8.5,
          comments: "Strong portfolio with excellent user research methodologies. Creative solutions to complex problems."
        },
        completedDate: "12 Oct, 2023"
      },
      {
        id: 2,
        title: "Design Challenge",
        date: "17",
        month: "Oct",
        timeRange: "14:00PM - 16:00PM",
        with: "Adrian Patel",
        location: "Online",
        status: "Scheduled",
        createdBy: "Elaine Wong",
        notes: "Live design challenge to assess problem-solving and tool proficiency.",
        videoLink: "https://meet.google.com/jkl-mnop-qrs"
      }
    ]
  },
  {
    id: 4,
    name: "Curtis Baumbach",
    rating: 3.0,
    status: "Active",
    verified: true,
    origin: "Referral",
    auditedAt: "20 October, 2023",
    jobApplied: "Backend Developer",
    personal: {
      email: "curtis.b@gmail.com",
      phone: "+1-212-555-7890",
      gender: "Male",
      birthDate: "January 15, 1990",
      address: "Chicago, IL, 60601, United States"
    },
    education: {
      university: "MIT",
      qualification: "Bachelor of Science in Computer Science",
      graduationYear: "2011",
      referral: "John Smith (Engineering Director)"
    },
    interviews: [
      {
        id: 1,
        title: "Technical Screening",
        date: "19",
        month: "Oct",
        timeRange: "13:00PM - 14:00PM",
        with: "Thomas Zhang",
        location: "Online",
        status: "Completed",
        createdBy: "HR Department",
        notes: "Initial technical assessment focusing on database design and system architecture.",
        videoLink: "https://zoom.us/j/1122334455",
        feedback: {
          score: 6,
          comments: "Demonstrated basic understanding but struggled with advanced concepts. Recommended for junior position instead."
        },
        completedDate: "19 Oct, 2023"
      }
    ]
  },
  {
    id: 5,
    name: "Jaime Anderson",
    rating: 4.5,
    status: "Active",
    verified: true,
    origin: "Company Website",
    auditedAt: "21 October, 2023",
    jobApplied: "DevOps Engineer",
    personal: {
      email: "j.anderson@outlook.com",
      phone: "+49-30-1234567",
      gender: "Non-binary",
      birthDate: "March 22, 1988",
      address: "Berlin, 10115, Germany"
    },
    education: {
      university: "Technical University of Berlin",
      qualification: "Master in Information Technology",
      graduationYear: "2010",
      referral: "Tech Conference"
    },
    interviews: [
      {
        id: 1,
        title: "Technical Assessment",
        date: "22",
        month: "Oct",
        timeRange: "10:00AM - 12:00PM",
        with: "Ahmed Hassan",
        location: "Online",
        status: "Scheduled",
        createdBy: "Tech Lead",
        notes: "Cloud infrastructure and CI/CD pipeline expertise evaluation.",
        videoLink: "https://teams.microsoft.com/meeting/789012"
      }
    ]
  }
];

export default candidates;