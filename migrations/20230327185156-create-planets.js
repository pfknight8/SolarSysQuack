'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('planets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      overview: {
        type: Sequelize.TEXT,
      },
      mass: {
        type: Sequelize.STRING,
      },
      diameter: {
        type: Sequelize.STRING,
      },
      distance: {
        type: Sequelize.STRING,
      },
      factOne: {
        type: Sequelize.TEXT,
      },
      factTwo: {
        type: Sequelize.TEXT,
      },
      factThree: {
        type: Sequelize.TEXT,
      },
      category: {
        type: Sequelize.ENUM({
          values: ['dwarf planet', 'gas giant', 'terrestrial', 'ice planet'],
        }),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('planets');
  },
};
