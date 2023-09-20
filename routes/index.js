// var express = require('express');
// var router = express.Router();
const express = require('express');
const router = express.Router();
// const { Task } = require('./Models');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// // Update/PUT
// router.put('/', function(req, res, next) {

// });
// const express = require("express");
// const router = express.Router();

// different model routers
router.use('/Task', require('../Models'));
// router.use('/items/:id', require('./items/:id'));



module.exports = router;
