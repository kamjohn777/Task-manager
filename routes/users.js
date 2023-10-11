const express = require('express');
const router = express.Router();
const { User } = require('../Models');
// import the auth 

// Create a new user
router.post('/', async function(req, res, next) {
  try {
    const {  firstName, lastName, phoneNumber, email } = req.body;

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
router.get('/', async function(req, res, next) {
  try {
    const users = await User.findAll()
    res.json(users);
  } catch (error) {
    console.log('error message', error)
    next(error);
  }
});

// Read a specific user by ID
router.get('/:id', async function(req, res, next) {
  try {
    let userID = parseInt(req.params.id);
    console.log('user id', userID);

    if (!isNaN(+userID)) {
      // Find user by Id
      const foundUser = await User.findByPk(userID, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

      if (!foundItem) {
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
router.put('/:id', async function(req, res, next) {
   let is = req.params.id;
   let user = await User.findByPk(id);
   const {firstName, lastName, phoneNumber, email} = req.body
   try{
    if(user) {
     user.firstName = firstName
     user.lastName = lastName
     user.phoneNumber = phoneNumber
     user.email = email
     await item.save()
     res.send(item)
    }
   }catch (error) {
     next(error)
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