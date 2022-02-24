'use strict';
const {
  Model
} = require('sequelize');
const propietario = require('./propietario');
module.exports = (sequelize, DataTypes) => {
  class Auto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Auto.belongsTo(models.propietario,{foreignKey:'id_propietario'});
      models.propietario.hasMany(Auto,{
        foreignKey:'id_propietario',
        as : 'id_propietario'
      });
    }
  }
  Auto.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    anio: DataTypes.INTEGER,
    patente: DataTypes.STRING,
    color: DataTypes.STRING,
    id_propietario : DataTypes.INTEGER,
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
    modelName: 'Auto',
  });
  return Auto;
};