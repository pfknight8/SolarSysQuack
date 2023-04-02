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
        as: "orbits",
        foreignKey: 'planet_name', // // This is the name of the fKey for the model that will be associated (resides in our child (Moon) model)
        targetKey: 'name', // This sets the 'name' field as the target field for the association in the Planet model (i.e. will be using the name from Planet to populate our fKey (planet_name) in Moon)
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Moon.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      mass: DataTypes.STRING,
      diameter: DataTypes.STRING,
      distance_planet: DataTypes.STRING,
      history: DataTypes.TEXT,
      planet_name: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'planets', // FYI, this can be either a string representing the table name ('planets'), OR a sequelize model (Planet).
          key: 'name',
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
