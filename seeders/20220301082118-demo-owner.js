'use strict';

module.exports = {
  async up ({context:queryInterface}) {
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

  async down ({context:queryInterface}) {
    await queryInterface.bulkDelete('owners', null, {});
  }
};
