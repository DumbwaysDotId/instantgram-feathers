'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('todos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isDone: {
        type: Sequelize.BOOLEAN
      },

      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('todos');
  }
};
