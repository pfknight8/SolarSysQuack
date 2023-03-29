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
      Planet.hasMany(models.Moon, {
        foreignKey: 'planet_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Planet.init(
    {
      name: DataTypes.STRING,
      mass: DataTypes.FLOAT,
      diameter: DataTypes.FLOAT,
      distance: DataTypes.FLOAT,
      ap_distance: DataTypes.FLOAT,
      peri_distance: DataTypes.FLOAT,
      factOne: DataTypes.TEXT,
      factTwo: DataTypes.TEXT,
      factThree: DataTypes.TEXT,
      category: {
        type: DataTypes.ENUM({values: ['dwarf planet', 'gas giant', 'terrestrial']}),
      }
    },
    {
      sequelize,
      modelName: 'Planet',
      tableName: 'planets',
    }
  );
  return Planet;
};
