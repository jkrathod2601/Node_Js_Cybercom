'use strict';
const Sequelize = require('sequelize');
module.exports = {
  async up({context:queryInterface}) {
    await queryInterface.createTable('randome_tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
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
    await queryInterface.dropTable('randome_tables');
  }
};