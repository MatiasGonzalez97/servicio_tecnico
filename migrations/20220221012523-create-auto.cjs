module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Autos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      anio: {
        type: Sequelize.INTEGER
      },
      patente: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      id_propietario: {
        type: Sequelize.INTEGER,
        references : {
          model: 'propietarios',
          key : 'id'
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Autos');
  }
};