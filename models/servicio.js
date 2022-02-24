'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicio.init({
    nombre: DataTypes.STRING,
    monto : DataTypes.FLOAT(11,2),
    createdAt: {
      type: DataTypes.DATE,
      defaultValue : DataTypes.NOW()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue : DataTypes.NOW()
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue : DataTypes.NOW()
    },
  }, {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};