'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class planets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  planets.init({
    name: DataTypes.STRING,
    mass: DataTypes.FLOAT,
    diameter: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'planets',
  });
  return planets;
};