

const User = sequelize.define("users", {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    email: Sequelize.STRING,
  });