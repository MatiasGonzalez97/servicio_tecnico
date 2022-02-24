'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('propietarios',[
      {
        apellido : 'Alberto',
        nombre : 'Ramirez',
        email : 'albertoramirez@gmail.com',
        dni : 12345678,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        apellido : 'Santiago',
        nombre : 'Fernandez',
        email : 'fernando123@gmail.com',
        dni : 11111111,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        apellido : 'Omar',
        nombre : 'Gonzalez',
        email : 'omg@gmail.com',
        dni : 2222244,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
