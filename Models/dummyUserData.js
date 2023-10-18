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
    },
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
      userId: 1, // Assign this task to user with ID 1 (John Doe)
    },
    {
      title: "Schedule a meeting with the team",
      description: "Coordinate a team meeting to discuss project updates.",
      category: "Meetings",
      image: null,
      completed: false,
      dueDate: new Date("2023-10-18"),
      userId: 1, // Assign this task to user with ID 1 (John Doe)
    },
    {
      title: "Prepare presentation",
      description: "Create a PowerPoint presentation for the marketing pitch.",
      category: "Presentations",
      image: "presentation.png",
      completed: false,
      dueDate: new Date("2023-10-20"),
      userId: 2, // Assign this task to user with ID 2 (Jane Smith)
    },
    {
      title: "Send out meeting invites",
      description: "Send email invitations for the weekly team meeting.",
      category: "Meetings",
      image: null,
      completed: false,
      dueDate: new Date("2023-10-17"),
      userId: 2, // Assign this task to user with ID 2 (Jane Smith)
    },
    // Add more tasks as needed...
  ];

  module.exports = { userData, taskData };
  
  
