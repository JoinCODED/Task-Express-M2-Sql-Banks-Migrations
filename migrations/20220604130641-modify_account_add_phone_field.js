'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Accounts', 'phone', Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Accounts', 'phone');
  },
};
