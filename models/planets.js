'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Planet.hasMany(models.Moon, {foreignKey: 'planet_id'})
    }
  }
  Planet.init(
    {
      name: DataTypes.STRING,
      mass: DataTypes.FLOAT,
      diameter: DataTypes.FLOAT,
      distance: DataTypes.FLOAT,
      factOne: DataTypes.STRING,
      factTwo: DataTypes.STRING,
      factThree: DataTypes.STRING,
      type: DataTypes.ENUM('dwarf planet', 'gas giant', 'terrestrial planet'),
    },
    {
      sequelize,
      modelName: 'Planet',
      tableName: 'planets',
    }
  );
  return Planet;
};
