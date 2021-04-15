const { User } = require('../models');
const bcrypt = require('bcrypt');

const password = 'password'
const hash = bcrypt.hashSync(password, 10);

const userdata = [
  {
    username: 'test1',
    email: 'test1@test.com',
    password: hash,
  },

  {
    username: 'test2',
    email: 'test2@test.com',
    password: hash,
  }
]
  

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
