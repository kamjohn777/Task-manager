# Task-manager

# Tier 1 — MVP Application - Functionality
1. As a user I want to be able to read what is the task
2. As a user I want to create task
3. As a user I want to Remove task
4. As a user I want to Update task
5. As a user I want to Check off task as complete


# Tier 2 - Login, Hashing (Authentication)
1. As a User, I want to be able to log in to my API
2. As a User, I want any passwords saved to be hashed and salted before saved to the database (note: If you use OAuth, you might not even store passwords at all!)
3. Use OAuth as our user login authentication

# Tier 3 - Register
1. As a User, I want to be able to sign up for the API
2. As a signed-up User, I want to be granted authorization to access the API

# Tier 4 - Authorization

1. As a User, I want my API protected from unauthorized Users
2. As an unauthorized User, I want a helpful message telling me I do not have access to the API
3. As a User, I expect not to be able to create new entities without first logging in / authenticating in some way (token/session)
4. As a User, I want my data to only be accessible/editable/deletable by myself
5. As a User I can only access and modify task and task list.
6. Restrict data and API access to authorized users only.




### Task Manager App - README.md

# Task Manager App

## Project Overview

**Purpose:**
The Task Manager App is designed to manage user authentication and tasks. This app enables users to create, read, update, and delete their profiles and tasks, providing a comprehensive solution for task management and user data handling.

### Technologies Used

- **Backend:** Node.js, Express.js, Sequelize
- **Database:** PostgreSQL (using Sequelize ORM)
- **Authentication:** express-openid-connect

### Code Explanation

#### `server.js`

The `server.js` file initializes the server and connects to the database.

```javascript
const { db } = require("./Models");
const app = require("./app");

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
```

- **db.sync():** Synchronizes the Sequelize models with the database.
- **app.listen(PORT):** Starts the Express server on the specified port.

#### `user.js` (Routes Directory)

The `user.js` file in the routes directory handles CRUD operations for users.

```javascript
const express = require('express');
const router = express.Router();
const { User } = require('../Models');
const { requiresAuth } = require('express-openid-connect');

// Create a new user
router.post('/', requiresAuth(), async function(req, res, next) {
  try {
    const { firstName, lastName, phoneNumber, email } = req.body;

    const newUser = await User.create({
      firstName,
      lastName,
      phoneNumber,
      email
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Failed to add user' });
  }
});

// Read all users
router.get('/', requiresAuth(), async function(req, res, next) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log('error message', error);
    next(error);
  }
});

// Read a specific user by ID
router.get('/:id', requiresAuth(), async function(req, res, next) {
  try {
    let userID = parseInt(req.params.id);
    console.log('user id', userID);

    if (!isNaN(+userID)) {
      const foundUser = await User.findByPk(userID, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

      if (!foundUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({ message: 'Successfully retrieved user', data: foundUser });
    } else {
      throw new Error(`Invalid Id ${userID} passed`);
    }
  } catch (err) {
    err.statusCode = 400;
    return next(err);
  }
});

// Update a user by ID
router.put('/:id', requiresAuth(), async function(req, res, next) {
  let id = req.params.id;
  let user = await User.findByPk(id);
  const { firstName, lastName, phoneNumber, email } = req.body;
  try {
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.phoneNumber = phoneNumber;
      user.email = email;
      await user.save();
      res.send(user);
    }
  } catch (error) {
    next(error);
  }
});

// Delete a user by ID
router.delete('/:id', requiresAuth(), async function(req, res, next) {
  try {
    let userID = parseInt(req.params.id);
    let user = await User.findByPk(userID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
```

- **router.post('/', requiresAuth(), ...):** Handles creating a new user. Requires authentication.
- **router.get('/', requiresAuth(), ...):** Fetches all users. Requires authentication.
- **router.get('/:id', requiresAuth(), ...):** Fetches a user by ID. Requires authentication.
- **router.put('/:id', requiresAuth(), ...):** Updates a user by ID. Requires authentication.
- **router.delete('/:id', requiresAuth(), ...):** Deletes a user by ID. Requires authentication.

#### `index.js` (Routes Directory)

The `index.js` file in the routes directory sets up the base routes for the application.

```javascript
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/tasks', require('./tasks'));
router.use('/users', require('./users'));

module.exports = router;
```

- **router.get('/'):** Renders the home page.
- **router.use('/tasks', require('./tasks')):** Sets up the tasks routes.
- **router.use('/users', require('./users')):** Sets up the users routes.

#### `index.js` (Models Directory)

The `index.js` file in the models directory defines the Sequelize models and their relationships.

```javascript
const { Sequelize } = require('sequelize');
const { sequelize } = require('../db/db');

const User = sequelize.define("users", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  email: Sequelize.STRING,
});

const Task = sequelize.define("tasks", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
  completed: Sequelize.BOOLEAN,
  dueDate: Sequelize.DATE,
});

User.belongsToMany(Task, { through: 'user_tasks' });
Task.belongsToMany(User, { through: 'user_tasks' });

module.exports = {
  User,
  Task,
  db: sequelize
};
```

- **User Model:** Defines the User model with fields for firstName, lastName, phoneNumber, and email.
- **Task Model:** Defines the Task model with fields for title, description, category, image, completed, and dueDate.
- **User.belongsToMany(Task, { through: 'user_tasks' }):** Defines a many-to-many relationship between Users and Tasks.

### Job Function Competencies

**JF 2.4: Demonstrates commitment to continued professional development**
Developing the Task Manager App allowed me to expand my knowledge in backend development, particularly with Express.js and Sequelize. Integrating user authentication with `express-openid-connect` was a new challenge that helped me grow my skills.

**JF 3.3: Understands how to develop effective user interfaces**
Even though this project is backend-focused, ensuring that API endpoints are clear, concise, and well-documented is crucial for effective frontend integration. The design of the routes and models ensures a seamless interaction between the backend and potential frontend components.

**JF 3.5: Understands how to follow software designs and functional/technical specifications**
The development process followed detailed specifications to ensure each feature met the requirements. This included defining clear models and routes, handling errors appropriately, and ensuring secure user authentication.

**JF 4.7: Understands how to apply algorithms, logic, and data structures**
The app's backend logic involved designing efficient data models and relationships using Sequelize. Handling CRUD operations and user authentication required careful planning and implementation of logical structures.

---
