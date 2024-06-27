const { Task } = require('../Models');
const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect')

// Create a new task
router.post('/', requiresAuth(), async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

// Update/PUT a task by ID
router.put('/:id',requiresAuth(), async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedTask = req.body; // Assuming you send updated task data in the request body
    const task = await Task.findByPk(id);
    if (!task) {
      res.status(400).send("Task not found");
    } else {
      await task.update(updatedTask);
      res.json(task);
    }
  } catch (error) {
    next(error);
  }
});

// Get all tasks
router.get('/', requiresAuth(), async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

// Get a task by ID
router.get('/:id', requiresAuth(), async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (!task) {
      res.status(404).send("Task not found");
    } else {
      res.json(task);
    }
  } catch (error) {
    next(error);
  }
});


router.delete("/", requiresAuth(), async (req, res, next) => {
    try {
      await Task.destroy({ where: {} });
      res.send("All tasks have been deleted");
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id", requiresAuth(), async (req, res, next) => {
    try {
      const id = req.params.id;
      const task = await Task.findByPk(id);
      if (!task) {
        res.status(400).send("Task not found");
      } else {
        await task.destroy();
        res.send("Task has been deleted");
      }
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;