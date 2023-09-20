const {Sequelize} = require('sequelize')
// const {sequelize} = require('../routes/db')
const {sequelize} = require('../routes/db')



const Task = sequelize.define("tasks", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
 Task,
 db: sequelize
};
