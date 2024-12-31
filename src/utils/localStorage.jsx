const employees = [
    {
      "id": "1",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "date": "2024-12-01",
          "description": "Complete onboarding documentation.",
          "category": "Documentation",
          "completedTask": true,
          "failedTask": false,
          "active": true,
          "completed": true
        },
        {
          "taskTitle": "Task 2",
          "date": "2024-12-05",
          "description": "Attend team meeting.",
          "category": "Meeting",
          "completedTask": false,
          "failedTask": true,
          "active": false,
          "completed": false
        },
        {
          "taskTitle": "Task 3",
          "date": "2024-12-10",
          "description": "Code review for sprint planning.",
          "category": "Development",
          "completedTask": true,
          "failedTask": false,
          "active": true,
          "completed": true
        }
      ]
    },
    {
      "id": "2",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "date": "2024-12-02",
          "description": "Complete project proposal.",
          "category": "Proposal",
          "completedTask": true,
          "failedTask": false,
          "active": true,
          "completed": true
        },
        {
          "taskTitle": "Task 2",
          "date": "2024-12-06",
          "description": "Client meeting for project discussion.",
          "category": "Client",
          "completedTask": false,
          "failedTask": false,
          "active": true,
          "completed": false
        },
        {
          "taskTitle": "Task 3",
          "date": "2024-12-12",
          "description": "Finalize project design.",
          "category": "Design",
          "completedTask": false,
          "failedTask": true,
          "active": false,
          "completed": false
        }
      ]
    },
    {
      "id": "3",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "date": "2024-12-03",
          "description": "Research new technologies for the project.",
          "category": "Research",
          "completedTask": true,
          "failedTask": false,
          "active": true,
          "completed": true
        },
        {
          "taskTitle": "Task 2",
          "date": "2024-12-07",
          "description": "Develop new features for the product.",
          "category": "Development",
          "completedTask": false,
          "failedTask": false,
          "active": true,
          "completed": false
        },
        {
          "taskTitle": "Task 3",
          "date": "2024-12-13",
          "description": "Prepare marketing materials.",
          "category": "Marketing",
          "completedTask": false,
          "failedTask": true,
          "active": false,
          "completed": false
        }
      ]
    },
    {
      "id": "4",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "date": "2024-12-04",
          "description": "Finalize sprint backlog.",
          "category": "Backlog",
          "completedTask": true,
          "failedTask": false,
          "active": true,
          "completed": true
        },
        {
          "taskTitle": "Task 2",
          "date": "2024-12-08",
          "description": "Write user stories for new features.",
          "category": "Documentation",
          "completedTask": false,
          "failedTask": false,
          "active": true,
          "completed": false
        },
        {
          "taskTitle": "Task 3",
          "date": "2024-12-14",
          "description": "Prepare final presentation.",
          "category": "Presentation",
          "completedTask": true,
          "failedTask": false,
          "active": true,
          "completed": true
        }
      ]
    },
    {
      "id": "5",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "date": "2024-12-01",
          "description": "Write technical documentation for the project.",
          "category": "Documentation",
          "completedTask": true,
          "failedTask": false,
          "active": true,
          "completed": true
        },
        {
          "taskTitle": "Task 2",
          "date": "2024-12-04",
          "description": "Complete initial project setup.",
          "category": "Setup",
          "completedTask": false,
          "failedTask": true,
          "active": false,
          "completed": false
        },
        {
          "taskTitle": "Task 3",
          "date": "2024-12-09",
          "description": "Complete testing for feature X.",
          "category": "Testing",
          "completedTask": true,
          "failedTask": false,
          "active": true,
          "completed": true
        }
      ]
    }
  ];
  
  const admin = {
    "id": "A1",
    "email": "admin@example.com",
    "password": "123"
  };
  
 export const setLocalStorage = ()=>{
 localStorage.setItem('employess',JSON.stringify(employees))
 localStorage.setItem('admin',JSON.stringify(admin))
 }
 export const getLocalStorage = ()=>{
 const admin = JSON.parse(localStorage.getItem("admin"))
 const employees = JSON.parse(localStorage.getItem("employees"))

 return{employees,admin}
 }