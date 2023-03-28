'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Moon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Moon.belongsTo(models.Planet, {
        foreignKey: 'planet_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Moon.init({
    name: DataTypes.STRING,
    mass: DataTypes.FLOAT,
    diameter: DataTypes.FLOAT,
    distance_planet: DataTypes.FLOAT,
    history: DataTypes.TEXT,
    planet_id: {
      type: DataTypes.INTERGER,
      onDelete: 'CASCADE',
      references: {
        model: 'planets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Moon',
    tableName: 'moons'
  });
  return Moon;
};