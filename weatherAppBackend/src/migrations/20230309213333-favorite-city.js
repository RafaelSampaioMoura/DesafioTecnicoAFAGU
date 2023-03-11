"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Cities", {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    state: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    city: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    lat: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    lon: {
      aloowNull: false,
      type: Sequelize.INTEGER,
    },
  });
  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */
}

export async function down(queryInterface, _Sequelize) {
  await queryInterface.dropTable("Cities");
  /**
   * Add reverting commands here.
   *
   * Example:
   * await queryInterface.dropTable('users');
   */
}
