'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_login: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      user_password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_supervisor: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      user_level: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};