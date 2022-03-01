'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('owners', [{
      firstName: 'jay',
      lastName: 'rathod',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'jayraj',
      lastName: 'rathod',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'jayrajsinh',
      lastName: 'rathod',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('owners', null, {});
  }
};
