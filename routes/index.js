const express = require('express');
const router = express.Router();
// const { Task } = require('../models'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Example route using the Task model
router.get('/tasks', async function(req, res, next) {
  try {
    const tasks = await Task.findAll(); // Fetch all tasks from the database
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

//DELETE all tasks and one task routes


module.exports = router;

