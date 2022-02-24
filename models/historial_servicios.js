'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historial_servicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  historial_servicios.init({
    id_auto: DataTypes.INTEGER,
    id_servicio: DataTypes.INTEGER,
    monto : {
      type: DataTypes.FLOAT(10,2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'historial_servicios',
  });
  return historial_servicios;
};