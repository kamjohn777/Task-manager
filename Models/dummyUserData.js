const { User } = require('./models'); 
const { Sequelize, DataTypes } = require('sequelize');

// Insert data into the User table
User.bulkCreate([
  { name: "Adria Bird", phone: "1-450-185-0283", email: "enim.mauris@outlook.com" },
  { name: "Leroy Guzman", phone: "1-412-298-1714", email: "orci.donec@icloud.ca" },
  { name: "Jescie Bartlett", phone: "(856) 846-9180", email: "aliquet.phasellus.fermentum@outlook.net" },
  { name: "Claire Graves", phone: "1-621-268-4098", email: "nulla.facilisi.sed@google.com" },
  { name: "Macon Hyde", phone: "(275) 675-4376", email: "elementum@aol.ca" }
])
  .then(() => {
    console.log('Data inserted successfully.');
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });
