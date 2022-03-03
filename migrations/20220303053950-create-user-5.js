'use strict';
const Sequelize = require('sequelize');
module.exports = {
  async up({context:queryInterface}) {
    await queryInterface.createTable('User5s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
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
  async down({context:queryInterface}) {
    await queryInterface.dropTable('User5s');
  }
};