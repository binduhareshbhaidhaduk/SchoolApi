School API Project 🎓

  This is a fully authenticated RESTful API for managing school operations. It uses JWT (JSON Web Tokens) for secure authentication and authorization, 
ensuring only authorized users can access or modify data.

📌 Features

🔐 Authentication

  Secure user login and registration using JWT (JSON Web Tokens).
 Passwords hashed with bcrypt for enhanced security.
 Token-based protected routes for authorization.

🏫 Role-Based Management

  Admin:
      Manage students, teachers, and classes.
      Add, update, or delete records.
  Principal:
      Manage students, teachers, and classes.
  Teacher:
      Access and manage assigned students.
  Student:
      View personal details and class information.

⚡ API Functionalities

  CRUD operations for:
  1.Students
  2.Principal
  3.Teachers
  4.Classes
  
  Secure Operations: All endpoints are protected by JWT-based authentication and role-based access control.


🛠️ Technologies Used

  Backend: Node.js with Express.js
  
  Database: MongoDb
  
  Authentication: JSON Web Tokens (JWT)
  
  Libraries:
    bcrypt: Secure password hashing.
    jsonwebtoken: Token generation and verification.
    sequelize: ORM for database operations.

