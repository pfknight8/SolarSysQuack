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
        type: Sequelize.STRING
      },
      mass: {
        type: Sequelize.FLOAT
      },
      diameter: {
        type: Sequelize.FLOAT
      },
      distance_planet: {
        type: Sequelize.FLOAT
      },
      history: {
        type: Sequelize.TEXT
      },
      planet_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'planets',
          key: 'id'
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