'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class propietario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  propietario.init({
    apellido: DataTypes.STRING,
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    dni: DataTypes.INTEGER,
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
    modelName: 'propietario',
  });
  return propietario;
};