'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cars', [{
      Name: 'BMW',
      modelName: 'x1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'AUDI',
      modelName: 'q4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'verna',
      modelName: 's plus',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('cars', null, {});
  }
};
