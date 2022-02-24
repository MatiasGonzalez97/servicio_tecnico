'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('autos',[
      {
        marca : 'Toyota',
        modelo : 'hilux',
        anio : 2011,
        patente : 'fte123asd',
        color : 'Verde',
        id_propietario : 1,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        marca : 'Ford',
        modelo : '100',
        anio : 2020,
        patente : 'pol909kil',
        color : 'Gris',
        id_propietario : 3,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
      {
        marca : 'Ford',
        modelo : 'fiesta',
        anio : 1999,
        patente : 'teg123teg',
        color : 'morado',
        id_propietario : 2,
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
