'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ username: 'DemoUser', email: 'demo@example.com', hashedPassword: createPassword() }),
      r({ username: 'Gus', email: 'gus@whatever.com', hashedPassword: createPassword() }),
      r({ username: 'Oona', email: 'oona@whatever.com', hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
