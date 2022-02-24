'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('historial_servicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_auto: {
        type: Sequelize.INTEGER,
        references : {
          model: 'autos',
          key : 'id'
        },
        allowNull: false,
      },
      id_servicio: {
        type: Sequelize.INTEGER,
        references : {
          model: 'servicios',
          key : 'id'
        },
        allowNull: false,
      },
      monto : {
        type: Sequelize.FLOAT(10,2),
        allowNull: false,
      },
      id_transaccion : {
        type: Sequelize.INTEGER,
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('historial_servicios');
  }
};