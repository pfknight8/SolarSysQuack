'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('moons' [{
      name: "Earth's Moon",
      mass: 1,
      diameter: 1,
      distance: 1,
      ap_distance: 1,
      peri_distance: 1,
      history: "Orbits the Earth",
      planet_id: 3,
      createdAt: new Date(),
      updateddAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('moons')
  }
};
