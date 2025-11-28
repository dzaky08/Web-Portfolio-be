"use strict";
const bycrpt = require("bycrpt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const saltRounds = 10;
    const adminPassword = "adminabdul1234";
    const hashPassword = bycrpt.hashSync(adminPassword, saltRounds);
    await queryInterface.bulkInsert("users", [
      {
        name: "Admin Abdul",
        email: "abdul1@gmail.com",
        password: hashPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
