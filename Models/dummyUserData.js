const userData = [
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      email: "jane.smith@example.com",
    }, {
      firstName: "Alice",
      lastName: "Johnson",
      phoneNumber: "111-222-3333",
      email: "alice.j@example.com",
    },
    {
      firstName: "Bob",
      lastName: "Williams",
      phoneNumber: "555-666-7777",
      email: "bob.w@example.com",
    },
    {
      firstName: "Eva",
      lastName: "Brown",
      phoneNumber: "888-999-0000",
      email: "eva.b@example.com",
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      phoneNumber: "222-333-4444",
      email: "michael.j@example.com",
    },
    {
      firstName: "Olivia",
      lastName: "Davis",
      phoneNumber: "333-444-5555",
      email: "olivia.d@example.com",
    },
    {
      firstName: "William",
      lastName: "Martinez",
      phoneNumber: "444-555-6666",
      email: "william.m@example.com",
    },
    {
      firstName: "Emma",
      lastName: "Harris",
      phoneNumber: "666-777-8888",
      email: "emma.h@example.com",
    },
    {
      firstName: "James",
      lastName: "Clark",
      phoneNumber: "777-888-9999",
      email: "james.c@example.com",
    },
    {
      firstName: "Ava",
      lastName: "Lopez",
      phoneNumber: "999-000-1111",
      email: "ava.l@example.com",
    },
    {
      firstName: "Liam",
      lastName: "Young",
      phoneNumber: "111-222-3333",
      email: "liam.y@example.com",
    },
    {
      firstName: "Sophia",
      lastName: "Lee",
      phoneNumber: "222-333-4444",
      email: "sophia.l@example.com",
    },
    {
      firstName: "Noah",
      lastName: "Adams",
      phoneNumber: "333-444-5555",
      email: "noah.a@example.com",
    },
    {
      firstName: "Isabella",
      lastName: "Gonzalez",
      phoneNumber: "555-666-7777",
      email: "isabella.g@example.com",
    },
    {
      firstName: "Logan",
      lastName: "Hall",
      phoneNumber: "666-777-8888",
      email: "logan.h@example.com",
    },
    {
      firstName: "Mia",
      lastName: "Young",
      phoneNumber: "777-888-9999",
      email: "mia.y@example.com",
    },
    {
      firstName: "Benjamin",
      lastName: "Garcia",
      phoneNumber: "888-999-0000",
      email: "benjamin.g@example.com",
    },
    {
      firstName: "Amelia",
      lastName: "Smith",
      phoneNumber: "999-000-1111",
      email: "amelia.s@example.com",
    },
    {
      firstName: "Lucas",
      lastName: "Perez",
      phoneNumber: "111-222-3333",
      email: "lucas.p@example.com",
    }
    // Add more users as needed...
  ];

  
  const taskData = [
    {
      title: "Complete project report",
      description: "Finish the quarterly project report for the client.",
      category: "Reports",
      image: "project_report.png",
      completed: false,
      dueDate: new Date("2023-10-15"),
      userId: 1, // Assigned to John Doe
    },
    {
      title: "Schedule a meeting with the team",
      description: "Coordinate a team meeting to discuss project updates.",
      category: "Meetings",
      image: null,
      completed: false,
      dueDate: new Date("2023-10-18"),
      userId: 2, // Assigned to Jane Smith
    },
    {
      title: "Prepare presentation",
      description: "Create a PowerPoint presentation for the marketing pitch.",
      category: "Presentations",
      image: "presentation.png",
      completed: false,
      dueDate: new Date("2023-10-20"),
      userId: 3, // Assigned to Alice Johnson
    },
    {
      title: "Send out meeting invites",
      description: "Send email invitations for the weekly team meeting.",
      category: "Meetings",
      image: null,
      completed: false,
      dueDate: new Date("2023-10-17"),
      userId: 4, // Assigned to Bob Williams
    },
    {
      title: "Review and edit marketing materials",
      description: "Proofread and edit marketing brochures and flyers.",
      category: "Marketing",
      image: "marketing_materials.png",
      completed: false,
      dueDate: new Date("2023-10-22"),
      userId: 5, // Assigned to Eva Brown
    },
    {
      title: "Update website content",
      description: "Add new blog posts and update product information on the website.",
      category: "Web Development",
      image: null,
      completed: false,
      dueDate: new Date("2023-10-25"),
      userId: 6, // Assigned to Michael Johnson
    },
    {
      title: "Conduct market research",
      description: "Gather data and analyze market trends for upcoming product launch.",
      category: "Research",
      image: "market_research.png",
      completed: false,
      dueDate: new Date("2023-10-30"),
      userId: 7, // Assigned to Olivia Davis
    },
    {
      title: "Client follow-up calls",
      description: "Contact clients for feedback and follow-up on recent services.",
      category: "Customer Relations",
      image: null,
      completed: false,
      dueDate: new Date("2023-11-02"),
      userId: 8, // Assigned to William Martinez
    },
    {
      title: "Prepare workshop materials",
      description: "Create handouts and presentations for the upcoming workshop.",
      category: "Workshops",
      image: "workshop_materials.png",
      completed: false,
      dueDate: new Date("2023-11-05"),
      userId: 9, // Assigned to Emma Harris
    },
    {
      title: "Organize team-building event",
      description: "Plan and coordinate a team-building event for the department.",
      category: "Events",
      image: "team_building.png",
      completed: false,
      dueDate: new Date("2023-11-10"),
      userId: 10, // Assigned to James Clark
    },
    {
      title: "Prepare budget report",
      description: "Compile financial data and create a budget report for the next fiscal year.",
      category: "Finance",
      image: "budget_report.png",
      completed: false,
      dueDate: new Date("2023-11-12"),
      userId: 11, // Assigned to Ava Lopez
    },
    {
      title: "Coordinate product launch event",
      description: "Plan and organize an event for the launch of a new product.",
      category: "Product Launch",
      image: "product_launch.png",
      completed: false,
      dueDate: new Date("2023-11-15"),
      userId: 12, // Assigned to Liam Young
    },
    {
      title: "Prepare training materials",
      description: "Develop training materials for new employee orientation.",
      category: "Training",
      image: "training_materials.png",
      completed: false,
      dueDate: new Date("2023-11-18"),
      userId: 13, // Assigned to Sophia Lee
    },
    {
      title: "Coordinate charity event",
      description: "Plan and coordinate a charity event for a local organization.",
      category: "Charity",
      image: "charity_event.png",
      completed: false,
      dueDate: new Date("2023-11-22"),
      userId: 14, // Assigned to Noah Adams
    },
    {
      title: "Update social media profiles",
      description: "Revise and update company's social media profiles with new content.",
      category: "Social Media",
      image: "social_media.png",
      completed: false,
      dueDate: new Date("2023-11-25"),
      userId: 15, // Assigned to Isabella Gonzalez
    },
    {
      title: "Prepare quarterly financial report",
      description: "Analyze financial data and create a report for the past quarter.",
      category: "Finance",
      image: "financial_report.png",
      completed: false,
      dueDate: new Date("2023-11-28"),
      userId: 16, // Assigned to Logan Hall
    },
    {
      title: "Coordinate office move",
      description: "Plan and execute the relocation of the office to a new location.",
      category: "Office Move",
      image: "office_move.png",
      completed: false,
      dueDate: new Date("2023-12-02"),
      userId: 17, // Assigned to Mia Young
    },
    {
      title: "Develop new product prototype",
      description: "Collaborate with the R&D team to create a prototype for a new product.",
      category: "Product Development",
      image: "product_prototype.png",
      completed: false,
      dueDate: new Date("2023-12-05"),
      userId: 18, // Assigned to Benjamin Garcia
    },
    {
      title: "Plan company anniversary celebration",
      description: "Organize an event to celebrate the company's anniversary with employees and clients.",
      category: "Celebrations",
      image: "anniversary_event.png",
      completed: false,
      dueDate: new Date("2023-12-10"),
      userId: 19, // Assigned to Amelia Smith
    },
    {
      title: "Update training materials",
      description: "Revise training materials for the new onboarding program.",
      category: "Training",
      image: "training_materials.png",
      completed: false,
      dueDate: new Date("2023-12-15"),
      userId: 20, // Assigned to Lucas Perez
    },
    {
      title: "Create marketing strategy",
      description: "Develop a comprehensive marketing strategy for the upcoming quarter.",
      category: "Marketing",
      image: "marketing_strategy.png",
      completed: false,
      dueDate: new Date("2023-12-20"),
      userId: 1, // Assigned to John Doe
    },
    {
      title: "Conduct customer surveys",
      description: "Design and conduct surveys to gather feedback from customers.",
      category: "Market Research",
      image: "customer_surveys.png",
      completed: false,
      dueDate: new Date("2023-12-25"),
      userId: 2, // Assigned to Jane Smith
    },
    {
      title: "Optimize website performance",
      description: "Improve website speed and user experience for better performance.",
      category: "Web Development",
      image: "website_optimization.png",
      completed: false,
      dueDate: new Date("2023-12-30"),
      userId: 3, // Assigned to Alice Johnson
    },
    // Add more tasks as needed...
  ];

  module.exports = { userData, taskData };
  
  