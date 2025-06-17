const candidates = [
  {
    id: 1,
    name: "Kristi Sipes",
    rating: 3.5,
    status: "Active",
    origin: "Career Site",
    auditedAt: "13 October, 2023",
    jobApplied: "Research and Development",
    email: "kristisipes@gmail.com",
    phone: "+62-921-019-112",
    gender: "Female",
    birthdate: "May 20, 2000",
    location: "San Francisco, CA",
    interviews: [
      {
        id: "int-1",
        title: "Aptitude test",
        date: "01",
        month: "Oct",
        timeRange: "10:00AM - 10:30AM",
        with: "Bagus Fikri",
        location: "Online",
        createdBy: "Raihan Fikri",
        status: "Completed",
        notes: "Candidate performed exceptionally well in logical reasoning and problem-solving sections.",
        feedback: {
          score: "8/10",
          comments: "Strong analytical skills demonstrated. Good time management during the test."
        },
        videoLink: "#"
      },
      {
        id: "int-2",
        title: "Written Test",
        date: "05",
        month: "Oct",
        timeRange: "10:00AM - 10:30AM",
        with: "Bagus Fikri",
        location: "Online",
        createdBy: "Raihan Fikri",
        status: "Completed",
        notes: "Completed all sections within time limit.",
        feedback: {
          score: "7/10",
          comments: "Good technical knowledge, but could improve on system design concepts."
        }
      }
    ]
  },
  {
    id: 2,
    name: "Marlon Reynolds",
    rating: 4.2,
    status: "Active",
    origin: "LinkedIn",
    auditedAt: "15 October, 2023",
    jobApplied: "Frontend Developer",
    email: "marlon.reynolds@example.com",
    phone: "+1-555-234-5678",
    gender: "Male",
    birthdate: "April 12, 1994",
    location: "Austin, TX",
    interviews: [
      {
        id: "int-3",
        title: "Technical Interview",
        date: "10",
        month: "Oct",
        timeRange: "2:00PM - 3:00PM",
        with: "Merle Vandervort",
        location: "Remote",
        createdBy: "Cameron Dickens",
        status: "Completed",
        notes: "Strong JavaScript and React knowledge. Solved all coding problems efficiently.",
        feedback: {
          score: "9/10",
          comments: "Exceptional frontend skills. Great understanding of modern frameworks and performance optimization."
        }
      },
      {
        id: "int-4",
        title: "System Design Interview",
        date: "15",
        month: "Oct",
        timeRange: "11:00AM - 12:30PM",
        with: "Elijah Morgan",
        location: "Remote",
        createdBy: "Cameron Dickens",
        status: "Scheduled"
      }
    ]
  },
  {
    id: 3,
    name: "Cameron Dickens",
    rating: 4.0,
    status: "Active",
    origin: "Referral",
    auditedAt: "03 September, 2023",
    jobApplied: "UX Designer",
    email: "cameron.dickens@example.com",
    phone: "+1-555-987-6543",
    gender: "Male",
    birthdate: "January 5, 1992",
    location: "New York, NY",
    interviews: [
      {
        id: "int-5",
        title: "Portfolio Review",
        date: "05",
        month: "Sep",
        timeRange: "3:00PM - 4:00PM",
        with: "Lola Kirin",
        location: "Office",
        createdBy: "Marlon Reynolds",
        status: "Completed",
        notes: "Impressive portfolio with strong focus on user-centered design.",
        feedback: {
          score: "8/10",
          comments: "Great visual design skills. Some improvements needed in explaining design decisions."
        }
      }
    ]
  },
  {
    id: 4,
    name: "Lola Kirin",
    rating: 4.5,
    status: "Active",
    origin: "Job Board",
    auditedAt: "03 September, 2023",
    jobApplied: "Product Manager",
    email: "lola.k@example.com",
    phone: "+1-555-123-4567",
    gender: "Female",
    birthdate: "March 17, 1989",
    location: "Seattle, WA",
    interviews: [
      {
        id: "int-6",
        title: "Product Case Study",
        date: "07",
        month: "Sep",
        timeRange: "1:00PM - 3:00PM",
        with: "Virgil Larkin",
        location: "Office",
        createdBy: "Regina Hardy",
        status: "Completed",
        notes: "Excellent problem-solving approach and market analysis.",
        feedback: {
          score: "9/10",
          comments: "Outstanding analytical thinking and strategic vision. Great communication skills."
        }
      },
      {
        id: "int-7",
        title: "Leadership Assessment",
        date: "12",
        month: "Sep",
        timeRange: "10:00AM - 11:30AM",
        with: "Virgil Larkin",
        location: "Office",
        createdBy: "Regina Hardy",
        status: "Completed",
        feedback: {
          score: "8/10",
          comments: "Strong leadership qualities. Good at stakeholder management."
        }
      }
    ]
  },
  {
    id: 5,
    name: "Regina Hardy",
    rating: 3.8,
    status: "Active",
    origin: "Internal Referral",
    auditedAt: "25 August, 2023",
    jobApplied: "Backend Developer",
    email: "regina.h@example.com",
    phone: "+1-555-887-9900",
    gender: "Female",
    birthdate: "July 30, 1995",
    location: "Chicago, IL",
    interviews: [
      {
        id: "int-8",
        title: "Technical Assessment",
        date: "27",
        month: "Aug",
        timeRange: "9:00AM - 11:00AM",
        with: "Curtis Bauch",
        location: "Remote",
        createdBy: "Jaime Anderson",
        status: "Completed",
        notes: "Strong knowledge of backend technologies and database optimization.",
        feedback: {
          score: "7/10",
          comments: "Good technical skills but needs improvement in system scalability concepts."
        }
      }
    ]
  },
  {
    id: 6,
    name: "Curtis Bauch",
    rating: 3.7,
    status: "Active",
    origin: "LinkedIn",
    auditedAt: "29 October, 2023",
    jobApplied: "DevOps Engineer",
    email: "curtis.bauch@example.com",
    phone: "+1-555-444-3333",
    gender: "Male",
    birthdate: "October 3, 1991",
    location: "Denver, CO",
    interviews: [
      {
        id: "int-9",
        title: "Infrastructure Design Interview",
        date: "02",
        month: "Nov",
        timeRange: "2:00PM - 3:30PM",
        with: "Jaime Anderson",
        location: "Remote",
        createdBy: "Shelia Doyle",
        status: "Scheduled"
      }
    ]
  },
  {
    id: 7,
    name: "Michael Dibbert",
    rating: 4.1,
    status: "Active", 
    origin: "Indeed",
    auditedAt: "18 October, 2023",
    jobApplied: "Data Scientist",
    email: "michael.dibbert@example.com",
    phone: "+1-555-222-7777",
    gender: "Male",
    birthdate: "February 15, 1990",
    location: "Boston, MA",
    interviews: [
      {
        id: "int-10",
        title: "ML Algorithm Test",
        date: "20",
        month: "Oct",
        timeRange: "1:00PM - 3:00PM",
        with: "Regina Hardy",
        location: "Remote",
        createdBy: "Kristi Sipes",
        status: "Completed",
        notes: "Strong theoretical knowledge in machine learning algorithms.",
        feedback: {
          score: "8/10",
          comments: "Excellent understanding of machine learning concepts and practical applications."
        }
      },
      {
        id: "int-11",
        title: "Practical Data Analysis",
        date: "25",
        month: "Oct",
        timeRange: "10:00AM - 12:00PM",
        with: "Regina Hardy",
        location: "Remote",
        createdBy: "Kristi Sipes",
        status: "Completed",
        notes: "Successfully completed complex data analysis tasks.",
        feedback: {
          score: "9/10",
          comments: "Outstanding data visualization skills and statistical analysis."
        }
      }
    ]
  },
  {
    id: 8,
    name: "Jaime Anderson",
    rating: 3.9,
    status: "Active",
    origin: "Career Fair",
    auditedAt: "29 October, 2023",
    jobApplied: "Network Engineer",
    email: "jaime.anderson@example.com",
    phone: "+1-555-999-8888",
    gender: "Male",
    birthdate: "June 7, 1993",
    location: "Dallas, TX",
    interviews: [
      {
        id: "int-12",
        title: "Network Design Assessment",
        date: "01",
        month: "Nov",
        timeRange: "9:00AM - 10:30AM",
        with: "Curtis Bauch",
        location: "Office",
        createdBy: "Marlon Reynolds",
        status: "Scheduled"
      }
    ]
  },
  {
    id: 9,
    name: "Shelia Doyle",
    rating: 4.3,
    status: "Active",
    origin: "Referral",
    auditedAt: "13 October, 2023",
    jobApplied: "Project Manager",
    email: "shelia.doyle@example.com",
    phone: "+1-555-777-1111",
    gender: "Female",
    birthdate: "September 22, 1988",
    location: "Portland, OR",
    interviews: [
      {
        id: "int-13",
        title: "Project Planning Exercise",
        date: "17",
        month: "Oct",
        timeRange: "11:00AM - 12:30PM",
        with: "Lola Kirin",
        location: "Remote",
        createdBy: "Cameron Dickens",
        status: "Completed",
        notes: "Demonstrated strong planning skills and resource allocation.",
        feedback: {
          score: "9/10",
          comments: "Excellent project management methodology and stakeholder communication."
        }
      },
      {
        id: "int-14",
        title: "Team Leadership Interview",
        date: "20",
        month: "Oct",
        timeRange: "2:00PM - 3:00PM",
        with: "Cameron Dickens",
        location: "Remote",
        createdBy: "Cameron Dickens",
        status: "Completed",
        notes: "Showed good leadership qualities and conflict resolution skills.",
        feedback: {
          score: "8/10",
          comments: "Strong team management approach and good at resolving conflicts."
        }
      }
    ]
  },
  {
    id: 10,
    name: "Virgil Larkin",
    rating: 4.7,
    status: "Active",
    origin: "Headhunter",
    auditedAt: "03 September, 2023",
    jobApplied: "CTO",
    email: "virgil.larkin@example.com",
    phone: "+1-555-333-4444",
    gender: "Male",
    birthdate: "August 14, 1982",
    location: "San Jose, CA",
    interviews: [
      {
        id: "int-15",
        title: "Technical Vision Interview",
        date: "07",
        month: "Sep",
        timeRange: "9:00AM - 10:30AM",
        with: "CEO Panel",
        location: "Office",
        createdBy: "Board Committee",
        status: "Completed",
        notes: "Impressive technical vision and strategic roadmap presentation.",
        feedback: {
          score: "10/10",
          comments: "Outstanding technical leadership and strategic thinking. Clear vision for technology direction."
        }
      },
      {
        id: "int-16",
        title: "Leadership Assessment",
        date: "10",
        month: "Sep",
        timeRange: "1:00PM - 3:00PM",
        with: "Executive Team",
        location: "Office",
        createdBy: "Board Committee",
        status: "Completed",
        notes: "Demonstrated excellent leadership qualities and team building approach.",
        feedback: {
          score: "9/10",
          comments: "Strong leadership skills and excellent at explaining complex technical concepts to non-technical stakeholders."
        }
      },
      {
        id: "int-17",
        title: "Final Board Interview",
        date: "15",
        month: "Sep",
        timeRange: "10:00AM - 12:00PM",
        with: "Board of Directors",
        location: "Office",
        createdBy: "CEO",
        status: "Completed",
        notes: "Successful final interview with the board.",
        feedback: {
          score: "9/10",
          comments: "Board members were impressed with strategic vision and leadership approach."
        }
      }
    ]
  },
  {
    id: 11,
    name: "Jasmine Wiza",
    rating: 3.8,
    status: "Active",
    origin: "University Recruitment",
    auditedAt: "10 October, 2023",
    jobApplied: "Junior Software Developer",
    email: "jasmine.wiza@example.com",
    phone: "+1-555-666-7890",
    gender: "Female",
    birthdate: "November 30, 1998",
    location: "Toronto, CA",
    interviews: [
      {
        id: "int-18",
        title: "Coding Challenge",
        date: "12",
        month: "Oct",
        timeRange: "2:00PM - 4:00PM",
        with: "Curtis Bauch",
        location: "Remote",
        createdBy: "Regina Hardy",
        status: "Completed",
        notes: "Completed all coding challenges with good efficiency.",
        feedback: {
          score: "7/10",
          comments: "Good foundation in programming fundamentals. Shows potential for growth."
        }
      },
      {
        id: "int-19",
        title: "Team Fit Interview",
        date: "16",
        month: "Oct",
        timeRange: "11:00AM - 12:00PM",
        with: "Development Team",
        location: "Remote",
        createdBy: "Regina Hardy",
        status: "Scheduled"
      }
    ]
  },
  {
    id: 12,
    name: "Merle Vandervort",
    rating: 4.4,
    status: "Active",
    origin: "Agency",
    auditedAt: "09 September, 2023",
    jobApplied: "Senior QA Engineer",
    email: "merle.vandervort@example.com",
    phone: "+1-555-222-1234",
    gender: "Male",
    birthdate: "May 3, 1987",
    location: "Philadelphia, PA",
    interviews: [
      {
        id: "int-20",
        title: "Testing Methodology Discussion",
        date: "11",
        month: "Sep",
        timeRange: "10:00AM - 11:30AM",
        with: "QA Team Lead",
        location: "Office",
        createdBy: "Curtis Bauch",
        status: "Completed",
        notes: "Strong understanding of testing methodologies and automation.",
        feedback: {
          score: "9/10",
          comments: "Excellent knowledge of test automation frameworks and CI/CD integration."
        }
      },
      {
        id: "int-21",
        title: "Practical Test Case Design",
        date: "14",
        month: "Sep",
        timeRange: "2:00PM - 4:00PM",
        with: "QA Team",
        location: "Office",
        createdBy: "Curtis Bauch",
        status: "Completed",
        notes: "Created comprehensive test cases for complex scenarios.",
        feedback: {
          score: "8/10",
          comments: "Great attention to detail and thoroughness in test planning."
        }
      }
    ]
  }
];

export default candidates;