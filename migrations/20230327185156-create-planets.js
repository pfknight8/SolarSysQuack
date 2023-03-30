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
      // ap_distance: {
      //   type: Sequelize.FLOAT,
      // },
      // peri_distance: {
      //   type: Sequelize.FLOAT,
      // },
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
        type: Sequelize.ENUM({values: ['dwarf planet', 'gas giant', 'terrestrial', 'ice planet']}),
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
