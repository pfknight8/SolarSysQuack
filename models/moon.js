'use strict';
const { Model } = require('sequelize');
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
        onUpdate: 'CASCADE',
      });
    }
  }
  Moon.init(
    {
      name: DataTypes.STRING,
      mass: DataTypes.STRING,
      diameter: DataTypes.STRING,
      // distance_planet: DataTypes.FLOAT,
      // ap_distance: DataTypes.FLOAT,
      // peri_distance: DataTypes.FLOAT,
      history: DataTypes.TEXT,
      planet_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'planets', // FYI, this can be either a string representing the table name ('planets'), OR a sequelize model (Planet).
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Moon',
      tableName: 'moons',
    }
  );
  return Moon;
};
