const {Sequelize} = require('sequelize')
// const {sequelize} = require('../routes/db')
const {sequelize} = require('../db/db')



const Task = sequelize.define("tasks", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
  completed: Sequelize.BOOLEAN,
  dueDate: Sequelize.DATE
});


module.exports = {
 Task,
 db: sequelize
};
