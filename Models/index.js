const {Sequelize} = require('sequelize');
const {sequelize} = require('../db/db');


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
    dueDate: Sequelize.DATE
  });
  

User.belongsToMany(Task, {through:'user_tasks'});
Task.belongsToMany(User, {through:'user_tasks'});



  module.exports = {
    User, Task,
    db: sequelize
   };