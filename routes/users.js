var express = require('express');
var router = express.Router();

const dummyData = require('../Models/dummyUserData');
const { error } = require('console');

// Create a new user
router.post('/', function(req, res, next) {
  const newUser = req.body; 
  dummyData.push(newUser);
  res.status(201).json(newUser); // Respond with the newly created user
});

// Read all users
router.get('/', async function(req, res, next) {
  try {
    const users = await User.findAll(users)
    res.json(users);
  } catch (error) {
    console.log('error message', error)
  }
});

// Read a specific user by ID
router.get('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Update a user by ID
router.put('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body; 
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user by ID
router.delete('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;