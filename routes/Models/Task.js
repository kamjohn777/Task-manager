// const {Sequelize} = require('sequelize')
// const {sequelize} = require('../db')



const Task = sequelize.define("tasks", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.FLOAT,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
 Task
};
