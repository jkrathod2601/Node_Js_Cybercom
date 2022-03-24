'use strict';
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.createTable('cars', {
      name: {
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
  async down({ context: queryInterface }) {
    await queryInterface.dropTable('cars');
  }
};