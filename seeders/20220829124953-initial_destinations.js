"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Destinations",
      [
        {
          name: "Grand Palace",
          province: "Bangkok",
          region: "Central",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Wat Traimit",
          province: "Bangkok",
          region: "Central",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Giant Swing",
          province: "Bangkok",
          region: "Central",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Chatuchak Market",
          province: "Bangkok",
          region: "Central",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "",
          province: "Bangkok",
          region: "Central",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Khao San Road",
          province: "Bangkok",
          region: "Central",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lumpini Park",
          province: "Bangkok",
          region: "Central",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Yaowarat",
          province: "Bangkok",
          region: "Central",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
