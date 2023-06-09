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
        as: 'moons',
        foreignKey: 'planet_name', // This is the name of the fKey for the model that will be associated (resides in our child (Moon) model)
        sourceKey: 'name', // This sets the 'name' field as the source of the association from Planet model
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Planet.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      overview: DataTypes.TEXT,
      mass: DataTypes.STRING,
      diameter: DataTypes.STRING,
      distance: DataTypes.STRING,
      factOne: DataTypes.TEXT,
      factTwo: DataTypes.TEXT,
      factThree: DataTypes.TEXT,
      category: {
        type: DataTypes.ENUM({
          values: ['dwarf planet', 'gas giant', 'terrestrial', 'ice planet'],
        }),
      },
    },
    {
      sequelize,
      modelName: 'Planet',
      tableName: 'planets',
    }
  );
  return Planet;
};
