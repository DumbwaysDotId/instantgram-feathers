'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        email: 'admin@dumbways.id',
        password: 'admin_secret'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', [{
        email: 'admin@dumbways.id',
        password: 'admin_secret'
      }], {});
  }
};
