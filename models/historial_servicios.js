'use strict';
const {
  Model
} = require('sequelize');
const auto = require('./auto');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class historial_servicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

        historial_servicios.belongsTo(models.Auto,{
          foreignKey: 'id_auto',
        });

        historial_servicios.belongsTo(models.servicio,{
          foreignKey : 'id_servicio'
        });
    }
  }
  historial_servicios.init({
    id_auto: DataTypes.INTEGER,
    id_servicio: DataTypes.INTEGER,
    monto : {
      type: DataTypes.FLOAT(10,2),
      allowNull: false,
    },
    id_transaccion : DataTypes.INTEGER,

    createdAt: {
      type: DataTypes.DATE,
      defaultValue : DataTypes.NOW(),
      get() {
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue : DataTypes.NOW(),
      get() {
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
      }
    },
  }, {
    sequelize,
    modelName: 'historial_servicios',
  });
  return historial_servicios;
};