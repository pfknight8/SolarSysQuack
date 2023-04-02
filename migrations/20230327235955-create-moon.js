'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('moons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      mass: {
        type: Sequelize.STRING
      },
      diameter: {
        type: Sequelize.STRING
      },
      distance_planet: {
        type: Sequelize.STRING
      },
      history: {
        type: Sequelize.TEXT
      },
      planet_name: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'planets',
          key: 'name'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('moons');
  }
};