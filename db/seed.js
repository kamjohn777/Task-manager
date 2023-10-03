const { sequelize } = require('./db')
const { Task, User } = require('../Models')
const { userData } = require('../Models/dummyUserData')
const { taskData } = require('../Models/dummyUserData')

const seed = async () => {
  // drop the db
  await sequelize.sync({ force: true })
console.log(userData);
  // add the data
  const users = await User.bulkCreate(userData)
  const task = await Task.bulkCreate(taskData)
  // associate some data
  await Promise.all([
    users[0].addTask(task[0]),
    users[0].addTask(task[1]),
    users[1].addTask(task[2]),
    users[1].addTask(task[3])
  ])

  console.log('Task and User database info populated!')
}



//export my seed function
// module.exports = seed
seed()