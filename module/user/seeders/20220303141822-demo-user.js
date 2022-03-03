'use strict';

module.exports = {
  async up ({ context: queryInterface }) {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Doe',
      age:"22",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Doe',
      age:"22",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down ({ context: queryInterface }) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
