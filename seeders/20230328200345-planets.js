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
    await queryInterface.bulkInsert('planets' [{
      name: "Earth",
      mass: 5.972,
      diameter: 12756.2,
      distance: 1,
      ap_distance: 152097597,
      peri_distance: 147098450,
      factOne: "Native planet for humans (as far as we know...)",
      factTwo: "Lot's o' fish.",
      factThree: "Mostly harmless.",
      type: 'terrestrial',
      createdAt: new Date(),
      updateddAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('planets')
  }
};
