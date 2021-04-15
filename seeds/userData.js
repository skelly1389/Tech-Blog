const { User } = require('../models');

const userdata = [
  {
    username: 'test1',
    email: 'test1@test.com',
    password: 'password',
  },

  {
    username: 'test2',
    email: 'test2@test.com',
    password: 'password',
  }
]
  

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
