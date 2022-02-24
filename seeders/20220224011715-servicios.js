'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('servicios',[
      {
        nombre : 'Cambio de aceite',
        monto : 100,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        nombre : 'Cambio de filtro',
        monto : 240.20,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        nombre : 'Cambio de Correa',
        monto : 360,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        nombre : 'Revision general',
        monto : 1000.29,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        nombre : 'Pintura',
        monto : 120,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        nombre : 'Otro',
        monto : 360,
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
